import styles from "./PromotionCard.module.css";

const PromotionCard = ({image, alt, titulo, texto, textoBotao, link}) => {
    return (
        <div className={`card text-bg-dark mb-3 ${styles.PromotionCardImage}`}>
            <h2 className={`${styles.PromotionTittle}`}>{titulo}</h2>
            <p className={`${styles.PromotionText}`}>{texto}</p>
            <img src={image} className={`card-img`} alt={alt} />
            <a href={link} className={`${styles.PromotionTextLink}`} target="_blank" hrefLang='pt-br' rel="noopener noreferrer">
                {textoBotao}
                <i className={`fa fa-whatsapp`}></i>
            </a>
        </div>
    );
};

export default PromotionCard;