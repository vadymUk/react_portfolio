import { setActiveClass } from "../store/slice/portfolioSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const Promo = () => {
    const dispatch = useDispatch();

    return (
        <section className='promo'>
            <div
                className='hamburger'
                onClick={() => {
                    dispatch(setActiveClass());
                }}
            >
                <span></span>
                <span className='long'></span>
                <span></span>
            </div>
            <div className='container'>
                <div className='title title_fs16 promo__subtitle'>
                    Мене звати Вадим
                </div>
                <h1 className='title title_fs48 promo__title'>
                    Я frontend-розробник із України
                </h1>
                <div className='promo__btns'>
                    <Link
                        to='/portfolio'
                        className='promo__link'
                    >
                        Портфоліо
                    </Link>
                    <Link
                        to='/about'
                        className='promo__link'
                    >
                        Про мене
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Promo;
