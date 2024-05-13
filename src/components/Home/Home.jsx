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
                    <p>follow us</p>
                    
                </aside>
                <div className={s.homeBlock}>
                <h1>Find your dream watch</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim facilisi elementum commodo ipsum.<br/> Aenean aenean adipiscing lect</p>
                <button>Design your watch</button>
                </div>
                <img src="https://corkerro.github.io/volumenzeit/img/main/watch.png" alt="" />
            </section>
        </>
        


    )
}

export default Home;