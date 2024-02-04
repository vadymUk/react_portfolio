import { Link } from "react-router-dom";
import puls from "../img/works/pulse.jpg";
import food from "../img/works/paprika.jpg";
import foodMarket from "../img/works/foodMarket.jpg";
import add from "../img/works/Add.jpeg";
import marvel from "../img/works/Marvel.jpeg";
import picture from "../img/works/picture.png";
import shop from "../img/works/Shop.jpeg";
import movies from "../img/works/Movies.jpeg";
import meals from "../img/works/meals.jpeg";
import coast from "../img/works/coast.jpeg";
import pizza from "../img/works/pizza.jpeg";
import crypto from "../img/works/crypto.jpeg";
import PizzasShop from "../img/works/PizzasShop.jpg";
import bitcoin from "../img/works/bitcoin.jpg";
const Portfolio = () => {
    return (
        <section
            id='portfolio'
            className='portfolio'
        >
            <Link
                to='/'
                onClick={() => {}}
                style={{ paddingLeft: "60px", textDecoration: "none" }}
            >
                НА ГОЛОВНУ
            </Link>
            <div className='container'>
                <h2 className='title title_fs16 portfolio__title'>Портфоліо</h2>
                <div className='title title_fs36 portfolio__subtitle'>
                    Мої роботи
                </div>
                <div className='divider'></div>
                <div className='portfolio__wrapper'>
                    <a
                        href='https://vadymUk.github.io/react_dev-snekers'
                        target='_blank'
                        className='portfolio__item'
                        rel='noreferrer'
                    >
                        <img
                            src={shop}
                            alt='meals'
                        />
                    </a>
                    <a
                        href='https://js-native-project-food.vercel.app'
                        target='_blank'
                        className='portfolio__item'
                        rel='noreferrer'
                    >
                        <img
                            src={foodMarket}
                            alt='foodMarket'
                        />
                    </a>
                    <a
                        href='https://web-dev-puls.vercel.app'
                        target='_blank'
                        className='portfolio__item'
                        rel='noreferrer'
                    >
                        <img
                            src={puls}
                            alt='coast'
                        />
                    </a>
                    <a
                        href='https://vadymuk.github.io/react_redaxtoolkit'
                        target='_blank'
                        className='portfolio__item'
                        rel='noreferrer'
                    >
                        <img
                            src={food}
                            alt='food'
                        />
                    </a>
                    <a
                        href='https://vadymUk.github.io/react_add-employees'
                        target='_blank'
                        className='portfolio__item'
                        rel='noreferrer'
                    >
                        <img
                            src={add}
                            alt='add'
                        />
                    </a>
                    <a
                        href='https://vadymUk.github.io/react-dev_Marvel'
                        target='_blank'
                        className='portfolio__item'
                        rel='noreferrer'
                    >
                        <img
                            src={marvel}
                            alt='marvel'
                        />
                    </a>
                    <a
                        href='https://js-native-picture.vercel.app'
                        target='_blank'
                        className='portfolio__item horizontal'
                        rel='noreferrer'
                    >
                        <img
                            src={picture}
                            alt='paint'
                        />
                    </a>
                    <a
                        href='https://vadymUk.github.io/react_dev-shop'
                        target='_blank'
                        className='portfolio__item vertical'
                        rel='noreferrer'
                    >
                        <img
                            src={shop}
                            alt='shop'
                        />
                    </a>
                    <a
                        href='https://vadymUk.github.io/react-dev-movies'
                        target='_blank'
                        className='portfolio__item'
                        rel='noreferrer'
                    >
                        <img
                            src={movies}
                            alt='movies'
                        />
                    </a>
                    <a
                        href='https://vadymUk.github.io/react_dev-meal'
                        target='_blank'
                        className='portfolio__item'
                        rel='noreferrer'
                    >
                        <img
                            src={meals}
                            alt='meals'
                        />
                    </a>
                    <a
                        href=' https://vadymuk.github.io/react_dev-coasts'
                        target='_blank'
                        className='portfolio__item'
                        rel='noreferrer'
                    >
                        <img
                            src={coast}
                            alt='coast'
                        />
                    </a>
                    <a
                        href='https://vadymuk.github.io/react_dev-pizza'
                        target='_blank'
                        className='portfolio__item'
                        rel='noreferrer'
                    >
                        <img
                            src={pizza}
                            alt='pizza'
                        />
                    </a>
                    <a
                        href='https://vadymuk.github.io/react_firebase-crypto'
                        target='_blank'
                        className='portfolio__item'
                        rel='noreferrer'
                    >
                        <img
                            src={crypto}
                            alt='crypto'
                        />
                    </a>
                    <a
                        href='https://vadymuk.github.io/react_shop-pizzas'
                        target='_blank'
                        className='portfolio__item'
                        rel='noreferrer'
                    >
                        <img
                            src={PizzasShop}
                            alt='pizzasShop'
                        />
                    </a>
                    <a
                        href='https://react-crypto-peach.vercel.app'
                        target='_blank'
                        className='portfolio__item'
                        rel='noreferrer'
                    >
                        <img
                            src={bitcoin}
                            alt='pizzasShop'
                        />
                    </a>
                </div>
            </div>
        </section>
    );
};
export default Portfolio;
