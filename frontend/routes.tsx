import MainLayout from 'Frontend/views/MainLayout.js';
import { createBrowserRouter, RouteObject } from 'react-router-dom';
import ItemsView from './views/items/ItemsView';
import Error404 from './views/Error404';
import CollectionsView from './views/collections/CollectionsView';
import VendorsView from './views/vendors/VendorsView';

const routing = [
  {
    element: <MainLayout />,
    errorElement: <Error404 />,
    handle: { title: 'SearchStash' },
    children: [
      { path: '/', element: <ItemsView />, handle: { title: 'Items' } },
      { path: '/collections', element: <CollectionsView />, handle: { title: 'Collections' } },
      { path: '/vendors', element: <VendorsView />, handle: { title: 'Vendors' } },
    ],
  },
] as RouteObject[];

export const routes = routing;
export default createBrowserRouter(routes);
