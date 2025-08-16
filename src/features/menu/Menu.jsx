import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";

function Menu() {
    const menu = useLoaderData();

    return <ul></ul>;
}

// eslint-disable-next-line react-refresh/only-export-components
export async function loader() {
    const menu = await getMenu();
    return menu;
}

export default Menu;
