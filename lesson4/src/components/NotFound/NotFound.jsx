import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <b>Такой страницы не существует!</b>
            <div>
                <Link to='/'>На главную</Link>
            </div>
        </div>
    );
};

export { NotFound };
