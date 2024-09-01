import { Link } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="footer bg-dark py-5">
            <div className="container grid grid-3">
                <div>
                    <Link to="/">
                        <h1>TraxxDeploy</h1>
                    </Link>
                    <p>Copyright &copy; 2024</p>
                </div>
                <nav>
                    <ul className="footer-nav">
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
                <div className="social">
                    <a href="#">
                        <FaGithub className="icon github" />
                    </a>
                    <a href="#">
                        <FaFacebook className="icon facebook" />
                    </a>
                    <a href="#">
                        <FaInstagram className="icon instagram" />
                    </a>
                    <a href="#">
                        <FaTwitter className="icon twitter" />
                    </a>
                </div>
            </div>
        </footer>
    );
}
