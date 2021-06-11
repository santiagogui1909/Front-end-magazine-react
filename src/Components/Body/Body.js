import "../../index.css";

import barcode from "../../img/barcode-icon-vector.png";

const Body = () => {
    return (
        <div>
            <article className="title-one">
                <h3>
                    the<br />
                    first title
                </h3>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non mollitia,
                    quasi magnam, cumque excepturi et officia odio tempore eaque quia animi,
                    quae pariatur suscipit perferendis fugit eligendi.Lorem, ipsum dolor sit
                    amet consectetur adipisicing elit. Non mollitia.
                </p>
            </article>
            <div className="clr"></div>
            <article className="title-two">
                <h3>second one</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui provident
                    molestias quaerat odit vel aliquam iste laboriosam pariatur.Lorem, ipsum
                    dolor sit amet consectetur adipisicing elit.
                </p>
            </article>
            <div className="clr"></div>
            <article>
                <h2 className="sub-title">
                    secret <br />
                    to success
                </h2>
            </article>
            <section className="container-final">
                <article className="title-third">
                    <header>
                        <h3>
                            third <br />
                            title
                        </h3>
                    </header>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat
                        quidem ratione veritatis obcaecati.
                    </p>
                </article>
                <article className="box-name">
                    <div className="name-businessman">
                        <header>
                            <h2>john smith</h2>
                        </header>
                        <p>young businessman</p>
                        <p>featured</p>
                    </div>
                    <img className="cod" src={barcode} />
                </article>
            </section>
            <div className="clr"></div>
        </div>
    );
};

export default Body;