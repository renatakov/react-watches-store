import s from "./Home.module.scss"

const Home = () => {
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
            </section>
        </>



    )
}

export default Home;