import { useState } from "react";
import { Form, redirect, useActionData, useNavigation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createOrder } from "../../services/apiRestaurant";
import Button from "../../ui/Button";
import { clearCart, getCart, getTotalPizzaPrice } from "../cart/cartSlice";
import EmptyCart from "../cart/EmptyCart";
import store from "../../store";
import { formatCurrency } from "../../utils/helpers";
import { fetchAddress } from "../user/userSlice";

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
    /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
        str,
    );

function CreateOrder() {
    const [withPriority, setWithPriority] = useState(false);

    const formErrors = useActionData();

    const isSubmitting = useNavigation().state === "submitting";

    const {
        userName,
        status: statusAddress,
        position,
        address,
        error: addressError,
    } = useSelector((state) => state.user);

    console.log(position);
    console.log(address);

    const isLoadingAddress = statusAddress === "loading";

    const cart = useSelector(getCart);

    const dispatch = useDispatch();

    const totalCartPrice = useSelector(getTotalPizzaPrice);
    const priorityPrice = withPriority ? totalCartPrice * 0.2 : 0;
    const totalPrice = totalCartPrice + priorityPrice;

    if (!cart.length) return <EmptyCart />;

    return (
        <div className="px-4 py-6">
            <h2 className="mb-8 text-xl font-semibold">
                Ready to order? Lets go!
            </h2>

            <Form method="post" action="/order/new">
                <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
                    <label className="sm:basis-40">First Name</label>
                    <input
                        className="input grow"
                        type="text"
                        name="customer"
                        defaultValue={userName}
                        required
                    />
                </div>

                <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
                    <label className="sm:basis-40">Phone number</label>
                    <div className="grow">
                        <div className="grow">
                            <input
                                className="input w-full"
                                type="tel"
                                name="phone"
                                required
                            />
                        </div>
                        {formErrors?.phone && (
                            <p className="mt-2 rounded-md bg-red-100 p-2 text-xs text-red-700">
                                {formErrors.phone}
                            </p>
                        )}
                    </div>
                </div>

                <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
                    <label className="sm:basis-40">Address</label>
                    <div className="relative flex grow flex-col">
                        <input
                            className="input w-full"
                            type="text"
                            name="address"
                            defaultValue={address}
                            required
                        />
                        {!position.latitude && !position.longitude && (
                            <span className="absolute right-[3px] top-[3px] z-50 md:right-[5px] md:top-[5px]">
                                <Button
                                    disabled={isLoadingAddress}
                                    type="small"
                                    onClick={(event) => {
                                        event.preventDefault();
                                        dispatch(fetchAddress());
                                    }}
                                >
                                    {isLoadingAddress
                                        ? "Getting your address..."
                                        : "Get Address"}
                                </Button>
                            </span>
                        )}
                        {addressError && (
                            <p className="mt-2 rounded-md bg-red-100 p-2 text-xs text-red-700">
                                {addressError}
                            </p>
                        )}
                    </div>
                </div>

                <div className="mb-12 flex items-center gap-5">
                    <input
                        className="h-6 w-6 accent-yellow-400 focus:outline-none focus:ring focus:ring-yellow-400 focus:ring-offset-2"
                        type="checkbox"
                        name="priority"
                        id="priority"
                        value={withPriority}
                        onChange={(e) => setWithPriority(e.target.checked)}
                    />
                    <label htmlFor="priority" className="font-medium">
                        Want to yo give your order priority?
                    </label>
                </div>

                <div>
                    <input
                        type="hidden"
                        name="cart"
                        value={JSON.stringify(cart)}
                    />
                    <input
                        type="hidden"
                        name="position"
                        value={
                            position.latitude && position.longitude
                                ? `${position.latitude} , ${position.longitude}`
                                : ""
                        }
                    />
                    <Button
                        disabled={isSubmitting || isLoadingAddress}
                        type="primary"
                    >
                        {isSubmitting
                            ? "Placing Order..."
                            : `Order now from ${formatCurrency(totalPrice)}`}
                    </Button>
                </div>
            </Form>
        </div>
    );
}

// eslint-disable-next-line react-refresh/only-export-components
export async function action({ request }) {
    const formData = await request.formData();

    const data = Object.fromEntries(formData);

    const error = {};

    if (!isValidPhone(data.phone))
        error.phone =
            "Please enter a valid phone number as we may use it later to contact you.";

    if (Object.keys(error).length > 0) return error;

    const order = {
        ...data,
        cart: JSON.parse(data.cart),
        priority: data.priority === "true",
    };

    const newOrder = await createOrder(order);

    store.dispatch(clearCart());

    return redirect(`/order/${newOrder.id}`);
}

export default CreateOrder;
