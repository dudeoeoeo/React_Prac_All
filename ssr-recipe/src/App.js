import logo from './logo.svg';
import './App.css';
import Menu from './components/Menu';
import { Route } from 'react-router';
// import RedPage from './pages/RedPage';
// import BluePage from './pages/BluePage';
// import UsersPage from './pages/UsersPage';
import loadable from '@loadable/component';

const RedPage = loadable(() => import('./pages/RedPage'));
const BluePage = loadable(() => import('./pages/BluePage'));
const UsersPage = loadable(() => import('./pages/UsersPage'));

function App() {
  return (
    <div>
      <Menu />
      <hr />
      <Route path="/red" component={RedPage} />
      <Route path="/blue" component={BluePage} />
      <Route path="/users" component={UsersPage} />
    </div>
  );
}

export default App;