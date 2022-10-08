import { Link } from "react-router-dom";

const Price = () => {
    return (
        <section
            id='prices'
            className='prices'
        >
            <Link
                to='/'
                onClick={() => {}}
                style={{ paddingLeft: "60px", textDecoration: "none" }}
            >
                НА ГОЛОВНУ
            </Link>
            <div className='container'>
                <h2 className='title title_fs16 prices__title'>Прайс-лист</h2>
                <div className='divider'></div>
                <div className='prices__wrapper'>
                    <div className='prices__item'>
                        <h3 className='title title_fs14 prices__item-title'>
                            Landing-page
                        </h3>
                        <div className='title title_fs14 prices__item-price'>
                            за домовленістю
                        </div>
                        <div className='prices__item-descr'>
                            Односторінковий сайт для презентації
                            послуг/товарів/...
                        </div>
                    </div>
                    <div className='prices__item'>
                        <h3 className='title title_fs14 prices__item-title'>
                            Web-додаток
                        </h3>
                        <div className='title title_fs14 prices__item-price'>
                            за домовленістю
                        </div>
                        <div className='prices__item-descr'>
                            Додаток усередині браузера для кращого комфорту
                        </div>
                    </div>
                    <div className='prices__item'>
                        <h3 className='title title_fs14 prices__item-title'>
                            Корпоративний сайт
                        </h3>
                        <div className='title title_fs14 prices__item-price'>
                            за домовленістю
                        </div>
                        <div className='prices__item-descr'>
                            Сайт для вашого бізнесу чи компанії
                        </div>
                    </div>
                    <div className='prices__item'>
                        <h3 className='title title_fs14 prices__item-title'>
                            Android/IOS Додаток
                        </h3>
                        <div className='title title_fs14 prices__item-price'>
                            за домовленістю
                        </div>
                        <div className='prices__item-descr'>
                            Додаток для смартфона будь-якої ОС
                        </div>
                    </div>
                    <div className='prices__item'>
                        <h3 className='title title_fs14 prices__item-title'>
                            Інтернет магазин
                        </h3>
                        <div className='title title_fs14 prices__item-price'>
                            за домовленістю
                        </div>
                        <div className='prices__item-descr'>
                            Інструмент для вашого продажу в мережі
                        </div>
                    </div>
                    <div className='prices__item'>
                        <h3 className='title title_fs14 prices__item-title'>
                            Дизайн
                        </h3>
                        <div className='title title_fs14 prices__item-price'>
                            Індивідуально
                        </div>
                        <div className='prices__item-descr'>
                            Створимо дизайн для вашого сайту/додатку...
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Price;
