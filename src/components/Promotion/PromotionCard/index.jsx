import styles from "./PromotionCard.module.css";

const PromotionCard = ({image, alt, titulo, texto, textoBotao}) => {
    return (
        <div className={`card text-bg-dark mb-3 ${styles.PromotionCardImage}`}>
            <h2 className={`${styles.PromotionTittle}`}>{titulo}</h2>
            <p className={`${styles.PromotionText}`}>{texto}</p>
            <img src={image} className={`card-img`} alt={alt} />
            <a href='https://api.whatsapp.com/send?phone=558003334321&text=Ol%C3%A1,%20gostaria%20de%20conhecer%20o%20serviço%20de%20canais!' className={`${styles.PromotionTextLink}`} target="_blank" hrefLang='pt-br' rel="noopener noreferrer">
                {textoBotao}
                <i className={`fa fa-whatsapp`}></i>
            </a>
        </div>
    );
};

export default PromotionCard;