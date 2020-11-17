import { RouteProps } from 'react-router-dom';
import { CrudScreen } from './scenes/Crud';
import { HomeScreen } from './scenes/Home';

interface RoutePropsWithId extends RouteProps {
  id: number;
}

const routes: RoutePropsWithId[] = [
  {
    id: 1,
    path: '/',
    component: HomeScreen,
    exact: true,
  },
  {
    id: 2,
    path: '/portfolio',
    component: CrudScreen,
    exact: true,
  },
];

export default routes;
