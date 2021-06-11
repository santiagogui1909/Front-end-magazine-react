import "../../index.css";
import backgroundMan from "../../img/pexels-photo-4195342.png";


const Header = () => {
    return (
        <div>
            <header>
                <h3 className="container-header">100 richest people on the planet</h3>
                <img className="background-magazine" src={backgroundMan} />
                <section className="container-title">
                    <h1>business</h1>
                    <div className="date">
                        <p><time datetime="2018-08-15"> monday, 15th august 2018 </time></p>
                        <p>issue #24</p>
                    </div>
                </section>
            </header>
        </div>
    );
};

export default Header;