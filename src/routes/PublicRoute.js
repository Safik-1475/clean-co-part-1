import Home from '../pages/Home/Home';
import Services from '../pages/Services';
import About from './../pages/About';
import Contact from './../pages/Contact';
import Login from './../pages/Login';

export const publicRoute = [
    { path: '/', name: 'Home', Component: Home },
    { path: '/about', name: 'About', Component: About },
    { path: '/services', name: 'Services', Component: Services },
    { path: '/contact', name: 'Contact', Component: Contact },
    { path: '/login', name: 'Login', Component: Login },
]