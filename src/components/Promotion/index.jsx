import styles from './Promotion.module.css';
import PromotionCard from './PromotionCard';
import Premiacao from './PremiacaoCard/index';

const Promotion = () => {
    return (
        <section className={`${styles.sectionPromotion}`}>
            <PromotionCard
                titulo={"Streaming TV"}
                texto={"Aproveite a novidade e contrate nosso serviço de canais de tv!"} 
                image={"../../../public/images/plans/tv.png"}
                alt={"Serviço de canais pela internet"}
                textoBotao={"Confira nossa grade! "}
            />

            <PromotionCard
                titulo={"Telefonia"} 
                texto={"Realize ligações ilimitadas para todo o território brasileiro"}
                image={"../../../public/images/plans/voip.jpg"}
                alt={"Serviço de telefonia pela internet"}
                textoBotao={"Falar com um atendente! "}
            />

            <PromotionCard
                titulo={"IP Fixo"}
                texto={"Para aqueles que buscam realizar tarefas mais elaboradas e acessos de fora da rede!"} 
                image={"../../../public/images/plans/ipfixo.jpg"}
                alt={"Serviço de ip fixo"}
                textoBotao={"Falar com um atendente! "}
            />

            <Premiacao/>

            <div className={styles.promotionImage}>
                <img src="../../../public/images/gallery/life03.png" alt="Internet de ultravelocidade para você e sua família." className="card-image"/>
            </div>

            

        </section>
    )
}

export default Promotion;