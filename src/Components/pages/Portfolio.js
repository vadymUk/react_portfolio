import { Link } from "react-router-dom";
import puls from "../img/works/pulse.jpg";
import food from "../img/works/paprika.jpg";
import heroes from "../img/works/heroes.jpeg";
import add from "../img/works/Add.jpeg";
import marvel from "../img/works/Marvel.jpeg";
import picture from "../img/works/picture.png";
import shop from "../img/works/Shop.jpeg";
import movies from "../img/works/Movies.jpeg";
import meals from "../img/works/meals.jpeg";
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
                        href='https://github.com/vadymUk/react_dev-heroes.git'
                        target='_blank'
                        className='portfolio__item'
                        rel='noreferrer'
                    >
                        <img
                            src={heroes}
                            alt='heroes'
                        />
                    </a>
                    <a
                        href='https://github.com/vadymUk/web-dev_Puls.git'
                        target='_blank'
                        className='portfolio__item'
                        rel='noreferrer'
                    >
                        <img
                            src={puls}
                            alt='pulse'
                        />
                    </a>
                    <a
                        href='https://github.com/vadymUk/js-native_project-food.git'
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
                        href='https://github.com/vadymUk/js_native-picture.git'
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
                </div>
            </div>
        </section>
    );
};
export default Portfolio;
