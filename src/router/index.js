import Home from "../components/Home.vue";
import signUp from "../components/SignUp.vue";
import Login from "../components/LogIn.vue";
import Add from "../components/AddResturent.vue";
import Update from "../components/UpdateResturent.vue";
import notFound from "../components/NotFound.vue";
import Profile from "../components/Profile.vue";
const routes = [
    { path: "/", name: "Home", component: Home },
    { path: "/sign-up", name: "Signup", component: signUp },
    { path: "/login", name: "Login", component: Login },
    { path: "/add-resturent", name: "Add", component: Add },
    { path: "/update-resturent/:id", name: "Update", component: Update },
    { path: "/profile", name: "Profile", component: Profile },
    { path: "/:catchAll(.*)", name: "notFound", component: notFound },
];
export default routes;