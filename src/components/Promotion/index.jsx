import styles from './Promotion.module.css';
import PromotionCard from './PromotionCard';
import Premiacao from './PremiacaoCard/index';
import streamingTv from "../../assets/image/plans/tv.png";
import telefone from "../../assets/image/plans/voip.jpg";
import ipFixo from "../../assets/image/plans/ipfixo.jpg";
import ultraVelocidade from "../../assets/image/gallery/life03.png"

const Promotion = () => {
    return (
        <section className={`${styles.sectionPromotion}`}>
            <PromotionCard
                titulo={"Streaming TV"}
                texto={"Aproveite a novidade e contrate nosso serviço de canais de tv!"} 
                image={streamingTv}
                alt={"Serviço de canais pela internet"}
                textoBotao={"Confira nossa grade! "}
            />

            <PromotionCard
                titulo={"Telefonia"} 
                texto={"Realize ligações ilimitadas para todo o território brasileiro"}
                image={telefone}
                alt={"Serviço de telefonia pela internet"}
                textoBotao={"Falar com um atendente! "}
            />

            <PromotionCard
                titulo={"IP Fixo"}
                texto={"Para aqueles que buscam realizar tarefas mais elaboradas e acessos de fora da rede!"} 
                image={ipFixo}
                alt={"Serviço de ip fixo"}
                textoBotao={"Falar com um atendente! "}
            />

            <Premiacao/>

            <div className={styles.promotionImage}>
                <img src={ultraVelocidade} alt="Internet de ultravelocidade para você e sua família." className="card-image"/>
            </div>

        </section>
    )
}

export default Promotion;