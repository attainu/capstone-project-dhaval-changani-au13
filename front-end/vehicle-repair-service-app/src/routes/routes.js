import PATHS from "../config/webPath";
import Home from "../containers/Home/Home";
import UserAuthLogin from "../containers/UserAuth/UserAuthLogin";
import UserAuthSignup from "../containers/UserAuth/UserAuthSignup";

const routes = [
    {exact: true, path: PATHS.HOME, component: Home},
    {exact: true, path: PATHS.USER_LOGIN, component: UserAuthLogin},
    {exact: true, path: PATHS.USER_SIGNUP, component: UserAuthSignup}
]


export default routes;