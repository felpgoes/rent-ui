import Dashboard from '../pages/Dashboard';
import DetalhePlace from '../pages/DetalhePlace';
import DetalheUsuario from '../pages/DetalheUsuario';

export const routes = [
  { id: 1, url: '/home', component: Dashboard, isPrivate: true },
  {
    id: 2,
    url: '/place/:idPlace',
    component: DetalhePlace,
    isPrivate: true,
  },
  {
    id: 3,
    url: '/user/:idUser',
    component: DetalheUsuario,
    isPrivate: true,
  },
];
