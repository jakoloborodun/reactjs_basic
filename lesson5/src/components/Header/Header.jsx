import { Link } from 'react-router-dom';

import './Header.css';

const Header = () => {
    return (
        <header className='header'>
            <span>Telegram 2040</span>
            <div className='menu'>
                <Link to='/' className='menu-item'>
                    Chats
                </Link>
                <Link to='/profile' className='menu-item'>
                    Profile
                </Link>
            </div>
        </header>
    );
};

export { Header };
