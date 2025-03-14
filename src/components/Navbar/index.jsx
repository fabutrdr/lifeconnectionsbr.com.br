import styles from './Navbar.module.css';
import '../../assets/css/styles.css';

const Navbar = () => {
    return (
        <>
            {/* mobile */}

            <nav className={`navbar navbar-dark fixed-top d-md-none d-lg-none`} id="#inicio">
                <div className={`container-fluid`}>
                    <div className={`navbar-brand ${styles.logo}`}></div>
                    <button className={`navbar-toggler`} type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
                        <i className={`bi bi-list custom-icon`}></i>
                    </button>
                    <div className={`offcanvas offcanvas-end text-bg-dark`} tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                        <div className="offcanvas-header">
                            <h2 className={`offcanvas-title`} id="offcanvasDarkNavbarLabel"><span id="special-tt">Bem-</span>vindo!</h2>
                            <button type="button" className={`btn-close btn-close-white`} data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className={`offcanvas-body text-center`}>
                            <ul className={`navbar-nav justify-content-end flex-grow-1 pe-3 mb-2`}>
                                <li className={`nav-item`}>
                                    <a className={`nav-link`} aria-current="page" href="#carouselExampleCaptions">Início</a>
                                </li>

                                <li className={`nav-item`}>
                                    <a className={`nav-link`} href="#carouselExampleCaptions">Planos</a>
                                </li>

                                <li className={`nav-item`}>
                                    <a className={`nav-link`} href="#contato">Contato</a>
                                </li>
                            </ul>
                            <div className={`${styles.mainContainer}`}>
                                <div className={`${styles.upperContainer}`}>
                                    <a className={`${styles.assinante} text-center`} href="https://lifeconnectionsbrapp.com.br/central_assinante_web/login" target='_self'
                                     hrefLang='pt-br' rel="noopener noreferrer">Central do Assinante</a>  
                                </div>
                                <div className={`${styles.bottonContainer}`}>
                                    <div className={`${styles.mobileWhatsapp} ${styles.mobileSocial}`}>
                                        <a href="https://api.whatsapp.com/send?phone=558003334321&text=Ol%C3%A1%20,%20vi%20esse%20link%20no%20site!%20Quero%20saber%20mais.!" target="_blank" hrefLang='pt-br' rel="noopener noreferrer">
                                            <i className={`fa fa-whatsapp ${styles.iconWhite}`}></i>
                                        </a>
                                    </div>
                                    <div className={`${styles.mobileFacebook} ${styles.mobileSocial}`}>
                                        <a href='https://www.facebook.com/lifeconnectionsbr/' target='_blank' hrefLang='pt-br' rel="noopener noreferrer">
                                            <i className={`bi bi-facebook ${styles.iconWhite}`}></i>
                                        </a>
                                    </div>
                                    <div className={`${styles.mobileInstagram} ${styles.mobileSocial}`}>
                                        <a href="https://www.instagram.com/lifeconnectionsbr/" target='_blank' hrefLang='pt-br' rel="noopener noreferrer">
                                            <i className={`bi bi-instagram ${styles.iconWhite}`}></i>
                                        </a>
                                    </div>
                                    <div className={`${styles.mobileLinkedin} ${styles.mobileSocial}`}>
                                        <a href="https://www.linkedin.com/company/lifeconnectionsbr/" target='_blank' hrefLang='pt-br' rel="noopener noreferrer">
                                            <i className={`bi bi-linkedin ${styles.iconWhite}`}></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            {/* tablets */}

            <nav className={`navbar navbar-expand-lg bg-dark-tertiary ${styles.tabletNavbar} d-none d-lg-flex d-xxl-none`}>
                <div className={"container-fluid p-0"}>
                    <div className={`navbar-brand ${styles.logo}`}></div>
                    <div className={"collapse navbar-collapse m-4"} id="navbarNavDropdown">
                        <ul className={"navbar-nav gap-3"}>
                            <li className={"nav-item"}>
                                <a className={`nav-link`} aria-current="page" href="#carouselExampleCaptions">Início</a>
                            </li>
                            <li className={"nav-item"}>
                                <a className={`nav-link`} href="#carouselExampleCaptions">Planos</a>
                            </li>
                            <li className={"nav-item"}>
                                <a className={`nav-link`} href="#contato">Contato</a>
                            </li>
                            <li className={"nav-item dropdown"}>
                                <a className={"nav-link dropdown-toggle"} href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Social
                                </a>
                                <ul className={"dropdown-menu bg-black"}>
                                    <li className={`${styles.tabletWhatspp} mb-2`}>
                                        <a href="https://api.whatsapp.com/send?phone=558003334321&text=Ol%C3%A1%20,%20vi%20esse%20link%20no%20site!%20Quero%20saber%20mais.!" target="_blank" hrefLang='pt-br' rel="noopener noreferrer" className={`dropdown-item ${styles.tabletSocial}`}>
                                            <i className={`fa fa-whatsapp ${styles.iconWhite}`}></i>
                                            Whatsapp
                                        </a>
                                    </li>

                                    <li className={`${styles.tabletFacebook} mb-2`}>
                                        <a href='https://www.facebook.com/lifeconnectionsbr/' target='_blank' hrefLang='pt-br' rel="noopener noreferrer" className={`dropdown-item ${styles.tabletSocial}`}>
                                            <i className={`bi bi-facebook ${styles.iconWhite}`}></i>
                                            Facebook
                                        </a>
                                    </li>
                                        
                                    <li className={`${styles.tabletInstagram} mb-2`}>
                                        <a href="https://www.instagram.com/lifeconnectionsbr/" target='_blank' hrefLang='pt-br' rel="noopener noreferrer" className={`dropdown-item ${styles.tabletSocial}`}>
                                            <i className={`bi bi-instagram ${styles.iconWhite}`}></i>
                                            Instagram
                                        </a>
                                    </li>

                                    <li className={`${styles.tabletLinkedin}`}>
                                        <a href="https://www.linkedin.com/company/lifeconnectionsbr/" target='_blank' hrefLang='pt-br' rel="noopener noreferrer" className={`dropdown-item ${styles.tabletSocial}`}>
                                            <i className={`bi bi-linkedin ${styles.iconWhite}`}></i>
                                            LinkedIn
                                        </a>
                                    </li>

                                </ul>
                            </li>
                            <li className={"nav-item"}>
                                <a className={`${styles.assinante} text-center`} href="https://lifeconnectionsbrapp.com.br/central_assinante_web/login" target='_self' hrefLang='pt-br' rel='next'>
                                    Central do Assinante
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* desktop */}

            <nav className={`navbar navbar-expand-lg bg-dark-tertiary d-none d-lg-none d-xxl-flex fixed-top`}>
                <div className={`container-fluid`}>
                <div className={`navbar-brand ${styles.logo}`}></div>
                    <div className={`collapse navbar-collapse`} id="navbarNav">
                        <ul className={`navbar-nav ${styles.desktopList}`}>
                            <li className={`nav-item`}>
                                <a className={`nav-link`} aria-current="page" href="#">Início</a>
                            </li>
                            <li className={`nav-item`}>
                                <a className={`nav-link`} href="#">Planos</a>
                            </li>
                            <li className={`nav-item`}>
                                <a className={`nav-link`} href="#">Contato</a>
                            </li>

                            <li className={`nav-item ${styles.desktopNavItem}`}>
                                <a className={`nav-link ${styles.desktopIcon} ${styles.desktopWhatsapp}`} href="https://api.whatsapp.com/send?phone=558003334321&text=Ol%C3%A1,%20vi%20esse%20link%20no%20site!%20Quero%20saber%20mais.!" target="_blank" hrefLang='pt-br' rel="noopener noreferrer">
                                    <i className={`bi bi-whatsapp`}></i>
                                </a>
                            </li>

                            <li className={`nav-item ${styles.desktopNavItem}`}>
                                <a className={`nav-link ${styles.desktopIcon} ${styles.desktopFacebook}`} href="https://www.facebook.com/lifeconnectionsbr/" target='_blank' hrefLang='pt-br' rel="noopener noreferrer">
                                    <i className={`bi bi-facebook`}></i>
                                </a>
                            </li>

                            <li className={`nav-item ${styles.desktopNavItem}`}>
                                <a className={`nav-link ${styles.desktopIcon} ${styles.desktopInstagram}`} href="https://www.instagram.com/lifeconnectionsbr/" target='_blank' hrefLang='pt-br' rel="noopener noreferrer">
                                    <i className={`bi bi-instagram`}></i>
                                </a>
                            </li>

                            <li className={`nav-item ${styles.desktopNavItem}`}>
                                <a className={`nav-link ${styles.desktopIcon} ${styles.desktopLinkedin}`} href="https://www.linkedin.com/company/lifeconnectionsbr/" target='_blank' hrefLang='pt-br' rel="noopener noreferrer">
                                    <i className={`bi bi-linkedin`}></i>
                                </a>
                            </li>
                            <li className={`nav-item`}>
                                <a className={`${styles.assinante} text-center`} href="https://lifeconnectionsbrapp.com.br/central_assinante_web/login" target='_self' hrefLang='pt-br' rel='next'>
                                    Central do Assinante
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
        
    )
}

export default Navbar;