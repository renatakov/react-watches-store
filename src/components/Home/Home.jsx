import s from "./Home.module.scss"
import { useSelector } from "react-redux";
import ProductsItem from "../Products/ProductsItem/ProductsItem"
import { Carousel } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
const Home = () => {
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
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </header>
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
                    <button>Watch Video</button>
                    </div>
                    {/* <iframe poster width="560" height="315" src="https://www.youtube.com/embed/s-x_HVCwKgI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}

                </div>
            </section>
        </>



    )
}

export default Home;