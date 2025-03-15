import styles from "./CardTablet.module.css";

const TabletCard = ({price, image, alt, validador}) => {
    return (
        <div className={`card mb-5 ${styles.cardTabletSize} ${styles.CardTablet}`}>
            <img src={image} className="card-img-top" alt={alt} />
            <div className={`card-body`}>
                <h5 className={`card-title ${styles.CardTabletTitle}`}>{price}</h5>
            </div>
            <ul className={`list-group list-group-flush`}>
                <li className={`list-group-item ${styles.CardTabletText}`}>
                    <i className={`bi bi-router-fill`}></i>
                    - Roteador em comodato
                </li>
                <li className={`list-group-item ${styles.CardTabletText}`}>
                    <i className={`bi bi-wifi`}></i>
                    - Wi-fi Premium
                </li>
                <li className={`list-group-item ${styles.CardTabletText}`}>
                    <i className={`bi bi-headset`}></i>
                    - Assistência Pro
                </li>
                <li className={`list-group-item ${validador? '' : 'd-none'} ${styles.CardTabletText}`}>
                    <i className={`bi bi-tv-fill`}></i>
                    - Canais de TV
                </li>
            </ul>
            <div className={`card-body text-center`}>
                <a href="https://api.whatsapp.com/send?phone=558003334321&text=Ol%C3%A1%20,%20vi%20esse%20link%20no%20site!%20Quero%20saber%20mais.!" className={`${styles.CardTabletLink}`} target="_blank" rel="noopener noreferrer">Contrate agora!</a>
            </div>
        </div>
    );
}

export default TabletCard;