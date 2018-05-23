import Register from '../components/register';

export default {
  register: {
    path: '/register',
    component: Register,
    isLoaded: true,
    isPrivate: false,
  },
  addAccount: {
    path: '/add-account',
    component: Login,
    isLoaded: true,
    isPrivate: false,
  },
  login: {
    path: '/',
    component: Login,
    isLoaded: true,
    isPrivate: false,
    exact: true,
  },
  accounts: {
    pathPrefix: '/explorer',
    path: '/accounts',
    pathSuffix: '/:address?',
    component: AccountTransactions,
    isPrivate: false,
  },
};
