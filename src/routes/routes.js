import AboutUs from '../components/AboutUs/AboutUs.js';
import Home from '../components/Home/Home.js';
import ContactUs from '../components/ContactUs/ContactUs';
import Products from '../components/Products/Products';
import Cart from '../components/Cart/Cart';
import SignIn from '../components/SignIn/SignIn';
import SignUp from '../components/SignUp/SignUp';

export const breadCrumb = [
  {
    path: '/',
    exact: true,
    component: Home,
    name: 'Home'
  },
  {
    path: '/products',
    exact: false,
    component: Products,
    name: 'Products'
  },
  {
    path: '/aboutus',
    exact: false,
    component: AboutUs,
    name: 'About Us'
  },
  {
    path: '/contactus',
    exact: false,
    component: ContactUs,
    name: 'Contact Us'
  }
];
const routes = [
  ...breadCrumb,
  {
    path: '/cart',
    exact: false,
    component: Cart,
    name: 'Cart'
  },
  {
    path: '/signin',
    exact: false,
    component: SignIn,
    name: 'Sign In'
  },
  {
    path: '/signup',
    exact: false,
    component: SignUp,
    name: 'Sign Up'
  }
];

export default routes;