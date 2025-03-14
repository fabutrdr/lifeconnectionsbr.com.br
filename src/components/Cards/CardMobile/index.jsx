import styles from "./CardMobile.module.css";

const MobileCard = ({price, image, isActive, alt, validador}) => {
    return (
        <div className={`carousel-item ${styles.carouselItem} ${isActive? "active" : ''}`}>
            <div className={`card ${styles.Card} ${styles.neon}`}>
                <img src={image} className={`card-img-top ${styles.ImgFixed}`} alt={alt} />
                <div className={`card-body`}>
                    <h5 className={`${styles.cardTitle}`}>{price}</h5>
                </div>
                <ul className={`list-group list-group-flush`}>
                    <li className={`list-group-item ${styles.listGroupItem}`}>
                        <i className={`bi bi-router-fill`}></i>
                        - Roteador em comodato
                    </li>
                    <li className={`list-group-item ${styles.listGroupItem}`}>
                        <i className={`bi bi-wifi`}></i>
                        - Wi-fi Premium
                    </li>
                    <li className={`list-group-item ${styles.listGroupItem}`}>
                        <i className={`bi bi-headset`}></i>
                        - Assistência Pro
                    </li>
                    <li className={`list-group-item ${styles.listGroupItem} ${validador? '' : 'd-none'}`}>
                        <i className={`bi bi-tv-fill`}></i>
                        - Canais de TV</li>
                    <li className={`list-group-item ${styles.listGroupItem}`}>Instalação Grátis <sup>*consultar bairro*</sup></li>
                </ul>
                <div className={`card-body text-center`}>
                    <a href="https://api.whatsapp.com/send?phone=558003334321&text=Ol%C3%A1%20,%20vi%20esse%20link%20no%20site!%20Quero%20saber%20mais.!" className={`${styles.cardLink}`} target="_self" rel="noopener noreferrer">Contrate agora!</a>
                </div>
            </div>
        </div>
    );
};

export default MobileCard;