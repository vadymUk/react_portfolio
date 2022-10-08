import { Link } from "react-router-dom";
import minuts from "../img/minuts.jpeg";
import development from "../img/icons/about_me/web_development.svg";
import mobile from "../img/icons/about_me/mobile_dev.svg";
import design from "../img/icons/about_me/design.svg";
const About = () => {
    return (
        <section
            id='about'
            className='about'
        >
            <Link
                to='/'
                onClick={() => {}}
                style={{ paddingLeft: "60px", textDecoration: "none" }}
            >
                НА ГОЛОВНУ
            </Link>
            <div className='container'>
                <div className='about__wrapper'>
                    <div className='about__photo'>
                        <img
                            src={minuts}
                            alt='my family'
                        />
                    </div>
                    <div className='about__descr'>
                        <h2 className='title title_fs16 about__title'>
                            Про мене
                        </h2>
                        <div className='title title_fs36 about__subtitle'>
                            Мене звати Вадим
                        </div>
                        <div className='divider'></div>
                        <p className='about__text'>
                            “СЛАВА УКРАЇНИ“! Коротко про себе, я сам з України.
                            Періодично займався підробітком у Польщі на різних
                            роботах, де і застала мене Російська агресія.
                            Боячись за свою родину, змушений був на тимасовий
                            період залишитися з родиною у Польщі. Фінансово було
                            тяжко, що спонукало мене у 38 років підвищити свою
                            ринкову цінність, а саме спробувати свої сили в
                            IT-сфері. Ось якось так моє життя перевернулося з
                            ног на голову.
                        </p>
                    </div>
                    <div className='about__skills'>
                        <div className='about__skills-item'>
                            <div className='about__skills-circle'>
                                <img
                                    src={development}
                                    alt='web-dev'
                                />
                            </div>
                            <div>
                                <div className='title title_fs14'>
                                    Web-разработка
                                </div>
                                <div className='about__skills-text'>
                                    Пройшов курси на Udemy нашого Українця Івана
                                    Петриченка ʼweb-devʼ, де здобув сучасні
                                    технології розробки web-сайтів (BEM,scss,
                                    sass, flex, grid, gulp...).
                                </div>
                            </div>
                        </div>
                        <div className='about__skills-item'>
                            <div className='about__skills-circle'>
                                <img
                                    src={mobile}
                                    alt='mob-dev'
                                />
                            </div>
                            <div>
                                <div className='title title_fs14'>
                                    Разработка приложений
                                </div>
                                <div className='about__skills-text'>
                                    Також ще пройшов курси на Udemy теж Івана
                                    Петриченка ʼjs,react,reduxʼ, де здобув
                                    сучасні технології розробки web-додатків
                                    (webpack, redux, toolkit...).
                                </div>
                            </div>
                        </div>
                        <div className='about__skills-item'>
                            <div className='about__skills-circle'>
                                <img
                                    src={design}
                                    alt='web-design'
                                />
                            </div>
                            <div>
                                <div className='title title_fs14'>
                                    UI/UX Design
                                </div>
                                <div className='about__skills-text'>
                                    Маю навики роботи з дизайном (avocode,
                                    figma...)
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default About;
