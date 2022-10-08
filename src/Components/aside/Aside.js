import { FaFacebook, FaInstagram, FaGithub } from "react-icons/fa";
import { IconContext } from "react-icons";
const Aside = () => {
    return (
        <>
            <IconContext.Provider
                value={{
                    color: "black",
                    size: "25px",
                    title: "social networks",
                }}
            >
                <aside className='sidepanel'>
                    <a
                        href='https://www.facebook.com/profile.php?id=100022711672107'
                        target='_blank'
                        className='sidepanel__link'
                        rel='noreferrer'
                    >
                        <FaFacebook />
                    </a>
                    <a
                        href='https://www.instagram.com/vadymtsytsiura/'
                        target='_blank'
                        className='sidepanel__link'
                        rel='noreferrer'
                    >
                        <FaInstagram />
                    </a>
                    <a
                        href='https://github.com/vadymUk?tab=overview&from=2021-11-01&to=2021-11-30'
                        target='_blank'
                        className='sidepanel__link'
                        rel='noreferrer'
                    >
                        <FaGithub />
                    </a>
                    <div className='sidepanel__divider'></div>
                    <div className='sidepanel__text'>
                        <span>Соціальні мережі</span>
                    </div>
                </aside>
            </IconContext.Provider>
        </>
    );
};

export default Aside;
