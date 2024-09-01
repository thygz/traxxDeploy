import docs from '../assets/docs.png';
import { FaInfo } from 'react-icons/fa';
import ScrollToTop from '../components/ScrollToTop';
import './utilities.css';

export default function Docs() {
    return (
        <>
            <ScrollToTop />
            <section className="docs-head bg-primary py-3">
                <div className="container grid">
                    <div>
                        <h1 className="xl">Docs</h1>
                        <p className="lead">
                            Learn how to work with the Loruki platform
                        </p>
                    </div>
                    <img src={docs} alt="image" />
                </div>
            </section>
            <section className="docs-main my-4">
                <div className="container grid">
                    <div className="card bg-light p-3">
                        <h3 className="my-2">Essentials</h3>
                        <nav>
                            <ul>
                                <li>
                                    <a className="text-primary" href="#">
                                        Introduction
                                    </a>
                                </li>
                                <li>
                                    <a href="#">About Loruki</a>
                                </li>
                                <li>
                                    <a href="#">Installation</a>
                                </li>
                            </ul>
                        </nav>

                        <h3 className="my-2">Deployment</h3>
                        <nav>
                            <ul>
                                <li>
                                    <a href="#">Setting up a container</a>
                                </li>
                                <li>
                                    <a href="#">Using the CLI</a>
                                </li>
                                <li>
                                    <a href="#">Managing resources</a>
                                </li>
                                <li>
                                    <a href="#">Upgrade & downgrade</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="card">
                        <h2>Introduction</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Distinctio illo facere perferendis laborum?
                            Similique recusandae incidunt eos dolorum aliquam
                            ipsam unde perspiciatis laudantium totam quam
                            laborum velit, at maxime minus?
                        </p>

                        <div className="alert alert-success">
                            <FaInfo /> Lorem ipsum dolor sit amet consectetur
                            adipisicing elit. Quae, animi?
                        </div>

                        <h3>Lorem, ipsum dolor.</h3>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Minima totam magni eius vitae velit id, atque
                            veritatis! At, vero porro.
                        </p>
                        <a href="#" className="btn btn-primary">
                            Install CLI
                        </a>

                        <h3>Requirements</h3>
                        <ul>
                            <li>Windows 10, Mac OSX, Linux</li>
                            <li>Node.js v12 or higher</li>
                        </ul>

                        <h3>Install</h3>
                        <p>Mac (Homebrew)</p>
                        <pre>
                            <code>$ brew install loruki-cli</code>
                        </pre>
                        <p>NPM</p>
                        <pre>
                            <code>$ npm install loruki-cli</code>
                        </pre>
                        <p>Yarn</p>
                        <pre>
                            <code>$ yarn install loruki-cli</code>
                        </pre>
                    </div>
                </div>
            </section>
        </>
    );
}
