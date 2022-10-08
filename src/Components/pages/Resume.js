import university from "../img/icons/experience/university.svg";
import course from "../img/icons/experience/courses.svg";
import developer from "../img/icons/experience/developer.svg";
import { Link } from "react-router-dom";

const Resume = () => {
    return (
        <section
            id='resume'
            className='resume'
        >
            <Link
                to='/'
                onClick={() => {}}
                style={{ paddingLeft: "60px", textDecoration: "none" }}
            >
                НА ГОЛОВНУ
            </Link>
            <div className='container'>
                <h2 className='title title_fs16 resume__title'>Досвід</h2>
                <div className='title title_fs36 resume__subtitle'>
                    Чим я буду корисним
                </div>
                <div className='divider'></div>
                <div className='resume__wrapper'>
                    <div className='resume__column'>
                        <h3 className='title title_fs20 resume__column-title'>
                            Освіта
                        </h3>
                        <ul>
                            <li>
                                <div className='resume__item'>
                                    <div className='resume__item-head'>
                                        <div className='resume__item-icon'>
                                            <img
                                                src={university}
                                                alt='university'
                                            />
                                        </div>
                                        <h4 className='title title_fs14'>
                                            ЧЮК Україна
                                        </h4>
                                        <div className='resume__item-location'>
                                            Диплом мл.спеціаліст | Чернігів
                                            (2003-2006)
                                        </div>
                                    </div>
                                    <div className='resume__item-body'>
                                        У 2006 році закінчив Чернігівський
                                        юридичний коледж Державної
                                        пенітенціарної служби України.
                                        Попрацювавши декілька років за фахом,
                                        звільнився, зрозумівши що це не моє.
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className='resume__item'>
                                    <div className='resume__item-head'>
                                        <div className='resume__item-icon'>
                                            <img
                                                src={course}
                                                alt='courses'
                                            />
                                        </div>
                                        <h4 className='title title_fs14'>
                                            Udemy
                                        </h4>
                                        <div className='resume__item-location'>
                                            Курси по Web-разробці, Javascript,
                                            React
                                        </div>
                                    </div>
                                    <div className='resume__item-body'>
                                        Після того як доля спонукала мене з
                                        родиною наразі перебувати у Польщі та
                                        спіткали деякі фінансові проблеми, я
                                        вирішив кардинально змінити своє життя
                                        так я дізнався про it-курси на udemy де
                                        почав вищепереліченні курси придбавати
                                        та займатися їх вивченням.
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className='resume__column'>
                        <h3 className='title title_fs20 resume__column-title'>
                            Досвід роботи
                        </h3>
                        <ul>
                            <li>
                                <div className='resume__item'>
                                    <div className='resume__item-head'>
                                        <div className='resume__item-icon'>
                                            <img
                                                src={developer}
                                                alt='developer'
                                            />
                                        </div>
                                        <h4 className='title title_fs14'>
                                            Front-End Developer
                                        </h4>
                                        <div className='resume__item-location'>
                                            Freelancer
                                        </div>
                                    </div>
                                    <div className='resume__item-body'>
                                        Роблю перші кроки на різних
                                        Freelanc-платформах Польщі, України є
                                        бажання підтягнувши свої skily і вийти
                                        на upWork
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Resume;
