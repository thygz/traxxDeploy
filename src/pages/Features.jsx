import server from '../assets/server.png';
import server2 from '../assets/server2.png';
import { FaServer } from 'react-icons/fa';
import { BsDiagram2Fill } from 'react-icons/bs';
import { FaLaptopCode } from 'react-icons/fa';
import { HiDatabase } from 'react-icons/hi';
import { FaPowerOff } from 'react-icons/fa';
import { FaUpload } from 'react-icons/fa';
import ScrollToTop from '../components/ScrollToTop';
import './utilities.css';

export default function Features() {
    return (
        <>
            <ScrollToTop />
            <section className="features-head bg-primary py-3">
                <div className="container grid">
                    <div>
                        <h1 className="xl">Features</h1>
                        <p className="lead">
                            Check out the features of TraxxDeploy that separate
                            us from the competition
                        </p>
                    </div>
                    <img src={server} alt="image" />
                </div>
            </section>
            <section className="features-sub-head bg-light py-3">
                <div className="container grid">
                    <div>
                        <h1 className="md">The TraxxDeploy Platform</h1>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Dolor cupiditate dignissimos temporibus
                            perspiciatis quae! Suscipit qui, consectetur ea
                            consequatur, doloribus repellendus quasi, aut
                            corporis nam alias culpa. Nostrum, inventore
                            accusantium!
                        </p>
                    </div>
                    <img src={server2} alt="image" />
                </div>
            </section>
            <section className="features-main my-2">
                <div className="container grid grid-3">
                    <div className="card flex">
                        <FaServer className="icon-features-1" />
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Voluptas nemo saepe corrupti et dolorem
                            voluptate at, nostrum rem voluptatem ab alias quia
                            molestiae ea, libero nihil deserunt. Molestias, eum?
                            Necessitatibus!
                        </p>
                    </div>
                    <div className="card flex">
                        <BsDiagram2Fill className="icon-features-1" />
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Ducimus recusandae perferendis culpa,
                            reiciendis a itaque debitis qui vel dignissimos
                            ipsum!
                        </p>
                    </div>
                    <div className="card flex">
                        <FaLaptopCode className="icon-features" />
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Debitis, magnam.
                        </p>
                    </div>
                    <div className="card flex">
                        <HiDatabase className="icon-features" />
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Vero, a!
                        </p>
                    </div>
                    <div className="card flex">
                        <FaPowerOff className="icon-features" />
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Debitis, magnam.
                        </p>
                    </div>
                    <div className="card flex">
                        <FaUpload className="icon-features" />
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Debitis, magnam.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}
