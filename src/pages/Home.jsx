import { FaServer } from 'react-icons/fa';
import { FaUpload } from 'react-icons/fa';
import { FaProjectDiagram } from 'react-icons/fa';
import cli from '../assets/cli.png';
import cloud from '../assets/cloud.png';
import node from '../assets/logos/node.png';
import python from '../assets/logos/python.png';
import csharp from '../assets/logos/csharp.png';
import ruby from '../assets/logos/ruby.png';
import scala from '../assets/logos/scala.png';
import clojure from '../assets/logos/clojure.png';
import ScrollToTop from '../components/ScrollToTop';
import { Link } from 'react-router-dom';
import './utilities.css';

export default function Home() {
    return (
        <>
            <ScrollToTop />
            <section className="showcase">
                <div className="container grid">
                    <div className="showcase-text">
                        <h1>Easier Deployment</h1>
                        <p>
                            Deploy web apps of all kinds, from large scale
                            enterprise APIs to static websites for individuals.
                            Fill out the form to try a demo of our platform
                        </p>
                        <Link to="/docs">
                            <button className="btn btn-outline">
                                Read More
                            </button>
                        </Link>
                    </div>
                    <div className="showcase-form card">
                        <h2>Request a Demo</h2>
                        <form>
                            <div className="form-control">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Name"
                                    required
                                />
                            </div>
                            <div className="form-control">
                                <input
                                    type="text"
                                    name="company"
                                    placeholder="Company Name"
                                    required
                                />
                            </div>
                            <div className="form-control">
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    required
                                />
                            </div>
                            <input
                                type="submit"
                                value="Send"
                                className="btn btn-primary"
                            />
                        </form>
                    </div>
                </div>
            </section>
            <section className="stats">
                <div className="container">
                    <h3 className="stats-heading text-center my-1">
                        Welcome to the best platform for building applications
                        of all types with modern architecture and scaling
                    </h3>
                    <div className="grid grid-3 text-center my-4">
                        <div>
                            <FaServer className="icon-stats" />
                            <h3>10,349,405</h3>
                            <p className="text-secondary">Deployments</p>
                        </div>
                        <div>
                            <FaUpload className="icon-stats" />
                            <h3>987 TB</h3>
                            <p className="text-secondary">Published</p>
                        </div>
                        <div>
                            <FaProjectDiagram className="icon-stats" />
                            <h3>2,343,265</h3>
                            <p className="text-secondary">Projects</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="cli">
                <div className="container grid">
                    <img src={cli} alt="image" />
                    <div className="card">
                        <h3>Easy to use, cross platform CLI</h3>
                    </div>
                    <div className="card">
                        <h3>Deploy in seconds</h3>
                    </div>
                </div>
            </section>
            <section className="cloud bg-primary my-2 py-2">
                <div className="container grid">
                    <div className="text-center">
                        <h2 className="lg">Extreme Cloud Hosting</h2>
                        <p className="lead my-1">
                            Cloud hosting like you've never seen. Fast,
                            efficient and scalable
                        </p>
                        <a href="features.html" className="btn btn-dark">
                            Read More
                        </a>
                    </div>
                    <img src={cloud} alt="image" />
                </div>
            </section>
            <section className="languages">
                <h2 className="md text-center my-2">Supported Languages</h2>
                <div className="container flex">
                    <div className="card">
                        <h4>Node.js</h4>
                        <img src={node} alt="image" />
                    </div>
                    <div className="card">
                        <h4>Python</h4>
                        <img src={python} alt="image" />
                    </div>
                    <div className="card">
                        <h4>C#</h4>
                        <img src={csharp} alt="image" />
                    </div>
                    <div className="card">
                        <h4>Ruby</h4>
                        <img src={ruby} alt="image" />
                    </div>
                    <div className="card">
                        <h4>Scala</h4>
                        <img src={scala} alt="image" />
                    </div>
                    <div className="card">
                        <h4>Clojure</h4>
                        <img src={clojure} alt="image" />
                    </div>
                </div>
            </section>
        </>
    );
}
