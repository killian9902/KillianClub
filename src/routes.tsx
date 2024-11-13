// src/routes.ts

import Home from './pages/home';
import Networking from './pages/networking';

const routes = [
  { path: '/', element: <Home /> },
  { path: '/Networking', element: <Networking /> },
];

export default routes;
