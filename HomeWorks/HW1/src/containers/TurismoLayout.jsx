import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import TopNav from '../components/Layout/TopNav/TopNav';
import MidNav from '../components/Layout/MidNav/MidNav';
import BlueNav from '../components/Layout/BlueNav/BlueNav';
import BotNav from '../components/Layout/BotNav/BotNav';
import Footer from '../components/Layout/Footer/Footer';
// import LoginModal from '../components/LoginModal';

function TurismoLayout() {
    const [loginModal, setLoginModal] = useState(false);

    return (
        <>
            <TopNav onLoginClick={() => setLoginModal('login')} />
            <MidNav />
            <BlueNav />
            <BotNav />
            <Outlet />
            <Footer />
        </>
    );
}

export default TurismoLayout;

