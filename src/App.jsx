import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Home from "./ui/Home";
import Menu, { loader as menuLoader } from "./features/menu/Menu";
import Cart from "./features/cart/Cart";
import CartItem from "./features/cart/CartItem";

const router = createBrowserRouter([
    {
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/menu",
                element: <Menu />,
                loader: menuLoader,
            },
            {
                path: "/cart",
                element: <Cart />,
            },
            {
                path: "/cart/:id",
                element: <CartItem />,
            },
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
