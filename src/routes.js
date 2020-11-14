import Home from "./pages/Home/home";
import DetailMovie from "./pages/Home/detail-movie";
import CheckoutMovie from "./pages/Home/checkout-movie";
import AdminLogin from "./pages/Admin/admin-login";
import Dashboard from "./pages/Admin/dashboard";
const routesHome = [
    {
        path: "/",
        exact: true,
        component: Home
    }
    ,
    {
        path: "/detail-movie/:id",
        exact: true,
        component: DetailMovie
    },
    {
        path: "/checkout-movie/:id",
        exact: true,
        component: CheckoutMovie
    },

];
const routesAdmin = [
    {
        path: "/admin/login",
        exact: true,
        component: AdminLogin
    },
    {
        path: "/admin/dashboard",
        exact: true,
        component: Dashboard
    }
];

export { routesHome, routesAdmin };