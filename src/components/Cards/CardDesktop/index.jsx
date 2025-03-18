import styles from "./CardDesktop.module.css";

const DesktopCard = ({price, image, alt, maior}) => {
    return (
        <div className={`card mb-3 ${styles.Cards}`}>
            <div className={`row g-0`}>
                <div className={`col-md-4`}>
                    <img src={image} className={`img-fluid rounded-start`} alt={alt} />
                </div>
                <div className={`col-md-8`}>
                    <div className={`card-body`}>
                        <h5 className={`card-title fs-2`}>{price}</h5>
                        <ul className={`${styles.desktopCardList}`}>
                            <li>
                                Roteador em comodato -
                                <i className={`bi bi-router-fill`}></i>
                            </li>

                            <li>
                                Wi-fi Premium -
                                <i className={`bi bi-wifi`}></i>
                            </li>

                            <li>
                                Assitência Pro -
                                <i className={`bi bi-headset`}></i>
                            </li>

                            <li>
                                Instalação Grátis - <small>consultar bairro</small>
                            </li>

                            <li className={`${maior? 'd-flex' : 'd-none' }`}>
                                Canais de TV -
                                <i className={`bi bi-tv-fill`}></i>    
                            </li>
                        </ul>
                        <a href="#" className={`${styles.contratar}`} target="_self" rel="noopener noreferrer">
                        <i className={`bi bi-whatsapp`}></i>
                        Eu quero contratar!</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DesktopCard;