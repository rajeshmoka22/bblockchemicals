import AboutUs from '../components/AboutUs/AboutUs.js';
import Home from '../components/Home/Home.js';
import ContactUs from '../components/ContactUs/ContactUs';
import Products from '../components/Products/Products';

const routes = [
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

export default routes;