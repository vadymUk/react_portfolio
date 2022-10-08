import { Link } from "react-router-dom";
import html from "../img/icons/skills/html5.svg";
import css from "../img/icons/skills/css3.svg";
import js from "../img/icons/skills/js.svg";
import jquery from "../img/icons/skills/jquery.svg";
import react from "../img/icons/skills/react.svg";
import node from "../img/icons/skills/node.js.svg";
import mongo from "../img/icons/skills/mongo.db.svg";

const Skills = () => {
    return (
        <section
            id='skills'
            className='skills'
        >
            <Link
                to='/'
                onClick={() => {}}
                style={{ paddingLeft: "60px", textDecoration: "none" }}
            >
                НА ГОЛОВНУ
            </Link>
            <div className='container'>
                <h2 className='title title_fs16 skills__title'>Навики</h2>
                <div className='title title_fs36 skills__subtitle'>
                    Що я використовую у своїй роботі
                </div>
                <div className='divider'></div>

                <div className='skills__items'>
                    <div className='skills__item'>
                        <div className='skills__item-img'>
                            <img
                                src={html}
                                alt='html5'
                            />
                        </div>
                        <h3 className='title title_fs14'>HTML5</h3>
                        <p>
                            Саме він створює каркас вашого сайту або програми, а
                            п'ята версія дозволить мені створювати більше
                            SEO-оптимізовану структуру вашого продукту
                        </p>
                    </div>
                    <div className='skills__item'>
                        <div className='skills__item-img'>
                            <img
                                src={css}
                                alt='css3'
                            />
                        </div>
                        <h3 className='title title_fs14'>CSS3</h3>
                        <p>
                            Ця мова стилів дозволяє мені створювати абсолютно
                            будь-який зовнішній вигляд вашого сайту або
                            програми. Все обмежується лише вашою фантазією!
                        </p>
                    </div>
                    <div className='skills__item'>
                        <div className='skills__item-img'>
                            <img
                                src={js}
                                alt='java script'
                            />
                        </div>
                        <h3 className='title title_fs14'>Java Script</h3>
                        <p>
                            Ця мова програмування дозволяє оживити все, що
                            завгодно: слайдери, вікна, підказки, вкладки,
                            отримання даних від сервера та багато іншого
                        </p>
                    </div>
                    <div className='skills__item'>
                        <div className='skills__item-img'>
                            <img
                                src={jquery}
                                alt='jquery'
                            />
                        </div>
                        <h3 className='title title_fs14'>Jquery</h3>
                        <p>
                            Бібліотека Jquery дозволить прискорити розробку. Без
                            необхідності інтегрувати у проект ми її не будемо,
                            але навик роботи з нею присутній
                        </p>
                    </div>
                    <div className='skills__item'>
                        <div className='skills__item-img'>
                            <img
                                src={react}
                                alt='React'
                            />
                        </div>
                        <h3 className='title title_fs14'>React</h3>
                        <p>
                            Ця бібліотека дозволяє створювати веб-додатки. Ми
                            можемо створити максимально інтерактивний продукт
                            саме під ваші цілі
                        </p>
                    </div>
                    <div className='skills__item'>
                        <div className='skills__item-img'>
                            <img
                                src={node}
                                alt='Node.js'
                            />
                        </div>
                        <h3 className='title title_fs14'>Node.js</h3>
                        <p>
                            Ця платформа дозволяє створювати бекенд для вашого
                            продукту - "мозки", які виконуватимуть дії, які
                            користувач не бачить
                        </p>
                    </div>
                    <div className='skills__item'>
                        <div className='skills__item-img'>
                            <img
                                src={mongo}
                                alt='Mongo.db'
                            />
                        </div>
                        <h3 className='title title_fs14'>Mongo.db</h3>
                        <p>
                            Це нереляційна база даних, яка зберігатиме дані
                            вашого сайту або програми
                        </p>
                    </div>
                </div>

                <div className='skills__ratings'>
                    <div className='skills__ratings-item'>
                        <div className='title title_fs14 skills__ratings-title'>
                            Створення сайтів
                        </div>
                        <div className='skills__ratings-counter'>100%</div>
                        <div className='skills__ratings-line'>
                            <span style={{ width: "100%" }}></span>
                        </div>
                    </div>
                    <div className='skills__ratings-item'>
                        <div className='title title_fs14 skills__ratings-title'>
                            Створення додатків
                        </div>
                        <div className='skills__ratings-counter'>85%</div>
                        <div className='skills__ratings-line'>
                            <span style={{ width: "85%" }}></span>
                        </div>
                    </div>
                    <div className='skills__ratings-item'>
                        <div className='title title_fs14 skills__ratings-title'>
                            Робота з даними
                        </div>
                        <div className='skills__ratings-counter'>90%</div>
                        <div className='skills__ratings-line'>
                            <span style={{ width: "90%" }}></span>
                        </div>
                    </div>
                    <div className='skills__ratings-item'>
                        <div className='title title_fs14 skills__ratings-title'>
                            Креативність
                        </div>
                        <div className='skills__ratings-counter'>75%</div>
                        <div className='skills__ratings-line'>
                            <span style={{ width: "75%" }}></span>
                        </div>
                    </div>
                    <div className='skills__ratings-item'>
                        <div className='title title_fs14 skills__ratings-title'>
                            Створення дизайна
                        </div>
                        <div className='skills__ratings-counter'>10%</div>
                        <div className='skills__ratings-line'>
                            <span style={{ width: "10%" }}></span>
                        </div>
                    </div>
                    <div className='skills__ratings-item'>
                        <div className='title title_fs14 skills__ratings-title'>
                            Soft skills
                        </div>
                        <div className='skills__ratings-counter'>95%</div>
                        <div className='skills__ratings-line'>
                            <span style={{ width: "95%" }}></span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
