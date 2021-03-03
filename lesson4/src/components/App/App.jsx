import { Header } from '../Header';
import { Router } from '../Router';

function App() {
    return (
        <div style={appStyle}>
            <Header />
            <Router />
        </div>
    );
}

export { App };

const appStyle = {
    margin: '10px auto',
    maxWidth: '800px',
};
