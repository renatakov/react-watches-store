import s from "./Home.module.scss"
import { useSelector } from "react-redux";
import ProductsItem from "../Products/ProductsItem/ProductsItem"
import { Carousel } from "react-bootstrap";
import MyVerticallyCenteredModal from "../../assets/Modal/Modal";
import { useState, useRef } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
const Home = () => {

    const [menuOpen, setMenuOpen] = useState(false);
    const handleMenuToggle = () => {
        setMenuOpen(!menuOpen);
    };
    const menuList = useRef(null)
    const [modalShow, setModalShow] = useState(false);
    const state = useSelector(state => state.products)
    console.log(state);
    const WatchesCollection = state.watches.map((item, i) => {
        return (
            <Carousel.Item>

                <ProductsItem
                    key={`id-${i}`}
                    model={item.model}
                    price={item.price}
                    img={item.img}
                />
            </Carousel.Item>
        )
    })
    return (
        <>

            <header>
                <img src="https://corkerro.github.io/volumenzeit/img/logo.svg" alt="" />

                <nav>
                    <ul>
                        <li>Home</li>
                        <li>Features</li>
                        <li>Our Mission</li>
                        <li>About Us</li>
                        <li>Watches</li>
                        <button>Sign Up</button>
                    </ul>
                </nav>
                <div className={s.menu}>
                    <input type="checkbox" name="" id="" onChange={handleMenuToggle}/>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </header>
            {window.innerWidth < 600 && (

                <div className={`${s.menuList} ${menuOpen ? s.open : ''}`} ref={menuList} >
                <nav>
                    <ul>
                        <li>Home</li>
                        <li>Features</li>
                        <li>Our Mission</li>
                        <li>About Us</li>
                        <li>Watches</li>
                        <button>
                        <svg xmlns="http://www.w3.org/2000/svg" height="30" width="30" viewBox="0 0 448 512"><path fill="#ffffff" d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/></svg>
                            My Account
                            </button>
                        <button>
                        <svg xmlns="http://www.w3.org/2000/svg" height="30" width="30" viewBox="0 0 576 512"><path fill="#ffffff" d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg>
                            Cart
                            </button>
                        <button>Design Your Watch</button>

                    </ul>
                </nav>
                </div>
            )}
            <section className={s.home}>
                <aside>

                    <ul className={s.home_socialList}>
                        <li>
                            <a href="#1"><img src="https://corkerro.github.io/volumenzeit/img/main/pinterest.svg" alt="" /></a>

                        </li>
                        <li>

                            <a href="#4"><img src="https://corkerro.github.io/volumenzeit/img/main/facebook.svg" alt="" /></a>
                        </li>
                        <li>
                            <a href="#2"><img src="	https://corkerro.github.io/volumenzeit/img/main/twitter.svg" alt="" /></a>

                        </li>
                        <li>

                            <a href="#3"><img src="https://corkerro.github.io/volumenzeit/img/main/instagram.svg" alt="" /></a>
                        </li>
                    </ul>
                    <p>follow us</p>
                </aside>
                <div className={s.homeBlock}>
                    <h1>Find your dream watch</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim facilisi elementum commodo ipsum.<br /> Aenean aenean adipiscing lect</p>
                    <button>Design your watch</button>
                </div>
                <img className={s.homeBlock_img} src="https://corkerro.github.io/volumenzeit/img/main/watch.png" alt="" />
            </section>
            <section className={s.features}>
                <h2>Features</h2>
                <div className={s.features__container}>
                    <div className={s.container_firstBlock}>

                        <div className={s.firstBlock_item}>
                            <h3>Individual Style</h3>
                            <p>48 style combinations<br />
                                Color shifting Dial Colors<br />
                                15 Strap options<br />
                                Custom Strap Engraving</p>
                        </div>
                        <div className={s.firstBlock_item}>
                            <h3>High Quality Components</h3>
                            <p>Case: 316L Stainless-steel<br />
                                Coating: Color anodized anti-scratch<br />
                                Glass: Sapphire Crystal<br />
                                Straps: 22mm Stainless-steel bracelet, Milanese Mesh bracelet, Leather</p>
                        </div>
                    </div>
                    <div className={s.img_container}>
                        <div>
                            <div>
                                <img src="https://corkerro.github.io/volumenzeit/img/features/watch.png" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className={s.features__container_item}>
                        <h3>Features</h3>
                        <p>Case Size: 42mm<br />
                            Case Color: Silver, Black, Blue, chamfered brush with mirror polish<br />
                            Dial Color: Black Metallic, Color shifting Blue-Purple, Green-Purple, Pink-Gold<br />
                            Water Resistance: 5 ATM/50 meters<br />
                            Straps: Quick release<br />
                            Movement: Swiss Parts RONDA 762E<br />
                            Instantaneous rate -10/ +20 sec/month<br />
                            Standard Battery life: 10 years</p>
                    </div>
                </div>
                <div className={s.watchDesign}>
                    <h2>design your watch</h2>
                    <div className={s.watchDesign__container}>
                        <div className={s.watchDesign__container_item}>
                            <div>
                                <div>1</div>
                            </div>
                            <p>case color</p>
                        </div>
                        <hr />

                        <div className={s.watchDesign__container_item}>
                            <div>
                                <div>2</div>
                            </div>
                            <p>dial design</p>
                        </div>
                        <hr />

                        <div className={s.watchDesign__container_item}>
                            <div>
                                <div>3</div>
                            </div>
                            <p>dial color</p>
                        </div>
                        <hr />
                        <div className={s.watchDesign__container_item}>
                            <div>
                                <div>4</div>
                            </div>
                            <p>strap design</p>
                        </div>
                    </div>
                    <button>Design Your Watch</button>
                </div>
                <div className={s.mission}>
                    <div className={s.mission__info}>
                        <h2>our mission</h2>
                        <p>We have invested 6 year of our lifes to invent a new technology of production a 3D dials with quality of wristwatch industry.
                            All what we need to turn on our imagination on maximum.

                            We love Out-of-the-box designs and believe there are many people who thinks the same.</p>
                        <button>Design Your Watch</button>
                    </div>
                    <img src="https://s3-alpha-sig.figma.com/img/b44c/a747/702e0fe49fea979a1fb9299684156eb2?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TdO7ofhx~jzUOfN-q~C~BUVg4v4DmKugdQorqlZIp20m6z9ezOXVi8bgx9VbmiUM38od7MLy1DbrqeY9IkbCPS1mzQtsdDcVC37I67VWjh~Luwes68QgSH7cVmCQsyJcBLojc5MEHO7mvNrhUvVVJQvC4f9tT03icwWYGPPzlPJT3x9SEslJOBQ00q~BpldWzPf6DrACghx8XcRyac7u2Y6wp3gp38KhyhiAndm7FHRet~UTwuLXjSyGrdWfc08U1VF23IRASvKR8stvpXdJ9I69~XrSZbvF8bIWUF6-eB21y1kLsJq5rb62FfCGMubL9ybaE37Q0yC3I1FLvmgr0A__" alt="" />
                </div>
                <div className={s.watches}>
                    <h2>WATCHES</h2>
                    <p>Volumenzeit gives you a total of 48 style combinations with 4 dial types, 4 dial colors, 3 case colors, multiple stylish strap combinations, and customized engraving options.</p>

                    <Carousel data-bs-theme="dark" indicators={false} wrap={true}>
                        {WatchesCollection}
                    </Carousel>


                </div>
                <div className={s.about}>
                    <div className={s.about__info}>
                        <h2>about us</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Accumsan volutpat tristique metus, nibh massa quam iaculis lectus. A dui nam phasellus porttitor nisi. Eget a quam est, eget dictum nisi. Sit donec aenean vivamus sagittis, blandit. Eleifend bibendum aliquet orci risus, velit. Lectus tellus amet</p>
                    </div>
                    <div className={s.about__video}>
                        <button onClick={() => setModalShow(true)}>Watch Video</button>
                        <MyVerticallyCenteredModal
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                        />
                    </div>


                </div>
                <div className={s.newsletter}>
                    <h2>Don't miss your chance to get free Giveaway <br/>Sing up to our newsletter</h2>
                    <p>We will inform you about coming Giveaways, Offers, Online Store preparation progress and start of sales</p>
                    <form className={s.newsletter__form}>

                        <input type="text" id="" placeholder="Name" />
                        <input type="email" id="" placeholder="Email"/>
                        <button type="submit">Sign Up</button>
                    </form>
                </div>
                <footer>
                    <img src="https://corkerro.github.io/volumenzeit/img/logo.svg" alt="" />
                    <p>© Copyright 2022 wolumenzeit - All rights reserved.</p>
                </footer>
            </section>
        </>



    )
}

export default Home;