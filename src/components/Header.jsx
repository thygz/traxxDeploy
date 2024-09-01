import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header className="navbar">
            <div className="container flex">
                <Link to="/">
                    <h1 className="logo">TraxxDeploy</h1>
                </Link>
                <nav>
                    <ul>
                        <Link to="/">
                            <li>Home</li>
                        </Link>
                        <Link to="/features">
                            <li>Features</li>
                        </Link>
                        <Link to="/docs">
                            <li>Docs</li>
                        </Link>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
