import facebook from "../img/icons/social/Facebook1.svg";
import telegram from "../img/icons/social/telegram.svg";
import instagram from "../img/icons/social/instagram.svg";
import custle from "../img/custle.jpeg";
import { useState } from "react";
import { useSendFormMutation } from "../sendForm/sendForm";
import { Link } from "react-router-dom";

const Contacts = () => {
    const [sendForm, { isLoading, isSuccess, isError }] = useSendFormMutation();

    const [addName, setAddName] = useState("");
    const [addMail, setAddMail] = useState("");
    const [addText, setAddText] = useState("");
    const [addStyle, setAddStyle] = useState("");

    const spiner = () => {
        if (isLoading) {
            return <div>Loading...</div>;
        }
    };

    const error = () => {
        if (isError) {
            return (
                <div style={{ color: "red" }}>
                    Помилка відправки. Перевірте стан підключення інтернету.
                </div>
            );
        }
    };

    const success = () => {
        if (isSuccess) {
            return <div className={addStyle}>Дані успішно відправленні!</div>;
        }
    };

    const hiddenSuccessMasage = () => {
        if (addStyle === "") {
            setAddStyle("active");
        }
    };

    const handlerSendForm = async () => {
        if (addName && addMail && addText) {
            await sendForm({
                name: addName,
                mail: addMail,
                text: addText,
            }).unwrap();
        }
        setAddName("");
        setAddMail("");
        setAddText("");
        setTimeout(hiddenSuccessMasage, 4000);
    };

    return (
        <section
            id='contacts'
            className='contacts'
        >
            <Link
                to='/'
                onClick={() => {}}
                style={{ paddingLeft: "60px" }}
            >
                НА ГОЛОВНУ
            </Link>
            <div className='container'>
                <div className='contacts__wrapper'>
                    <div className='contacts__photo'>
                        <img
                            src={custle}
                            alt='custle'
                        />
                    </div>
                    <div className='contacts__descr'>
                        <h2 className='titile title_fs16 contacts__title'>
                            Контакти
                        </h2>
                        <div className='titile title_fs36 contacts__subtitle'>
                            Зв'яжіться зі мною
                        </div>
                        <div className='divider'></div>
                        <div className='title title_fs14 contacts__text'>
                            Будь-яким зручним для вас способом:
                        </div>
                        <div className='contacts__social'>
                            <a
                                href='https://www.facebook.com/profile.php?id=100022711672107'
                                className='contacts__link'
                                target='_blank'
                                rel='noreferrer'
                            >
                                <img
                                    src={facebook}
                                    alt='facebook'
                                />
                            </a>
                            <a
                                href='https://t.me/Vadya_83'
                                className='contacts__link'
                                target='_blank'
                                rel='noreferrer'
                            >
                                <img
                                    src={telegram}
                                    alt='telegram'
                                />
                            </a>
                            <a
                                href='https://www.instagram.com/vadymtsytsiura/'
                                className='contacts__link'
                                target='_blank'
                                rel='noreferrer'
                            >
                                <img
                                    src={instagram}
                                    alt='instagram'
                                />
                            </a>
                            <a
                                href='tel:+4576222842'
                                className='contacts__tell'
                            >
                                <span>Мій тел:</span> +4576222842
                            </a>
                        </div>
                        <div className='title title_fs14 contacts__text'>
                            Або залиште ваші дані і я сам вам напишу:
                        </div>
                        <form
                            action='#'
                            className='contacts__form'
                            onSubmit={(e) => {
                                e.preventDefault();
                            }}
                        >
                            <div className='contacts__input'>
                                <input
                                    required
                                    name='name'
                                    id='name'
                                    type='text'
                                    value={addName}
                                    onChange={(e) => setAddName(e.target.value)}
                                />
                                <label htmlFor='name'>Ваше імя</label>
                            </div>
                            <div className='contacts__input'>
                                <input
                                    required
                                    name='email'
                                    id='email'
                                    type='email'
                                    value={addMail}
                                    onChange={(e) => setAddMail(e.target.value)}
                                />
                                <label htmlFor='email'>Ваша пошта</label>
                            </div>
                            <div className='contacts__textarea'>
                                <textarea
                                    name='text'
                                    id='text'
                                    value={addText}
                                    onChange={(e) => setAddText(e.target.value)}
                                ></textarea>
                                <label htmlFor='text'>Ваше повідомлення</label>
                            </div>

                            {spiner()}
                            {error()}
                            {success()}

                            <div className='contacts__triggers'>
                                <button
                                    className='contacts__btn btn'
                                    onClick={handlerSendForm}
                                >
                                    Надіслати повідомлення
                                </button>
                                <div className='contacts__policy'>
                                    <input
                                        required
                                        type='checkbox'
                                    />
                                    <span>
                                        Я згоден(на) з
                                        <a href='https://finacademy.net/politika-konfidencialnosli-ukraina'>
                                            {" "}
                                            політикою конфіденційності
                                        </a>
                                    </span>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contacts;
