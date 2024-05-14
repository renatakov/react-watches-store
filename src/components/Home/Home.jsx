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
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim facilisi elementum commodo ipsum.<br/> Aenean aenean adipiscing lect</p>
                <button>Design your watch</button>
                </div>
                <img className={s.homeBlock_img} src="https://corkerro.github.io/volumenzeit/img/main/watch.png" alt="" />
            </section>
        </>
        


    )
}

export default Home;