import { lazy } from 'react';

// project imports
import Loadable from 'ui-component/Loadable';
import MinimalLayout from 'layout/MinimalLayout';

// maintenance routing
const MaintenanceError = Loadable(lazy(() => import('views/pages/maintenance/Error')));
const MaintenanceComingSoon1 = Loadable(lazy(() => import('views/pages/maintenance/ComingSoon/ComingSoon1')));
const MaintenanceComingSoon2 = Loadable(lazy(() => import('views/pages/maintenance/ComingSoon/ComingSoon2')));
const MaintenanceUnderConstruction = Loadable(lazy(() => import('views/pages/maintenance/UnderConstruction')));
const Products = Loadable(lazy(() => import('views/pages/product')));
const Checkout = Loadable(lazy(() => import('views/pages/checkout')));
const About = Loadable(lazy(() => import('views/pages/about')));
const Donation = Loadable(lazy(() => import('views/pages/donation')));
const Services = Loadable(lazy(() => import('views/pages/servicies')));
const Events = Loadable(lazy(() => import('views/events')));
// ==============================|| AUTHENTICATION ROUTING ||============================== //

const AuthenticationRoutes = {
    path: '/',
    element: <MinimalLayout />,
    children: [
        {
            path: '/pages/error',
            element: <MaintenanceError />
        },
        {
            path: '/products',
            element: <Products />
        },
        {
            path: '/donation',
            element: <Donation />
        },
        {
            path: '/about',
            element: <About />
        },
        {
            path: '/products/checkout',
            element: <Checkout />
        },
        {
            path: '/initiative',
            element: <Services />
        },
        {
            path: '/events',
            element: <Events />
        },
        {
            path: '/pages/coming-soon1',
            element: <MaintenanceComingSoon1 />
        },
        {
            path: '/pages/coming-soon2',
            element: <MaintenanceComingSoon2 />
        },
        {
            path: '/pages/under-construction',
            element: <MaintenanceUnderConstruction />
        }
    ]
};

export default AuthenticationRoutes;
