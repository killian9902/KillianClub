// src/routes.ts

import Home from './pages/home';
import Networking from './pages/networking';

const routes = [
  { path: '/', element: <Home />, title: 'Home' },
  { path: '/Networking', element: <Networking />, title: 'Networking' },
];



export default routes;
