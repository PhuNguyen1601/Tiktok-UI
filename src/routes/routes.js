import config from '~/config';

//Layouts
import { HeaderOnly } from '~/layouts';
//Pages
import Following from '~/Pages/Following';
import Home from '~/Pages/Home';
import Profile from '~/Pages/Profile';
import Search from '~/Pages/Search';
import Upload from '~/Pages/Upload';
import Live from '~/Pages/Live';

const publicRoutes = [
    {
        path: config.routes.home,
        component: Home,
    },
    {
        path: config.routes.following,
        component: Following,
    },
    {
        path: config.routes.live,
        component: Live,
    },
    {
        path: config.routes.profile,
        component: Profile,
    },
    {
        path: config.routes.upload,
        component: Upload,
        layout: HeaderOnly,
    },
    {
        path: config.routes.search,
        component: Search,
        layout: null,
    },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
