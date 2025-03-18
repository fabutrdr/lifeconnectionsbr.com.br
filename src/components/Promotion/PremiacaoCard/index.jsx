import { useEffect, useState } from "react";
import styles from "./Premiacao.module.css";

const Premiacao = () => {
    const [premiacaoDimensao, setPremiacaoDimensao] = useState({
        width: 400,
        height: 200
    });

    const calcularDimensaoPremiacao = (width) => {
        if (width < 500) {
            return {width: 400, height: 200};
        } else if (width >= 501 && width < 1050) {
            return {width: 500, height: 250};
        } else {
            return {width: 800, height: 400};
        }
    }

    useEffect(() => {
        const observarDimensao = () => {
            setPremiacaoDimensao(calcularDimensaoPremiacao(window.innerWidth));
        };

        observarDimensao();
        window.addEventListener("resize", observarDimensao);

        return () => window.removeEventListener("resize", observarDimensao);
    }, []);

    return (
        <div>
            <div>
                <h2 className={styles.premiacaoText}>Premiações em Itariri!</h2>
                <div className={styles.premiacaoGrid}>
                    <a href='https://melhorplano.net/internet-banda-larga/sp/itariri#premio' title='Vencedor Melhor Velocidade Itariri 2025'><img src='https://cdn.melhorplano.net/cms/2025/01/24/67939ed8698ddselo-melhor-velocidade-municipal-2025.svg' alt='Vencedor Melhor Velocidade Itariri 2025' width={premiacaoDimensao.width} height={premiacaoDimensao.height}/></a>

                    <a href='https://melhorplano.net/internet-banda-larga/sp/itariri#premio' title='Vencedor Melhor Provedor Itariri 2025'><img src='https://cdn.melhorplano.net/cms/2025/01/24/67939e9cc2db3selo-melhor-provedor-municipal-2025.svg' alt='Vencedor Melhor Provedor Itariri 2025' width={premiacaoDimensao.width} height={premiacaoDimensao.height}/></a>

                    <a href='https://melhorplano.net/internet-banda-larga/sp/itariri#premio' title='Vencedor Maior Satisfação Itariri 2025'><img src='https://cdn.melhorplano.net/cms/2025/01/24/67939d22b3532selo-maior-satisfao-municipal-2025.svg' alt='Vencedor Maior Satisfação Itariri 2025' width={premiacaoDimensao.width} height={premiacaoDimensao.height}/></a>

                    <a href='https://melhorplano.net/internet-banda-larga/sp/itariri#premio' title='Vencedor Melhor Internet Gamer Itariri 2025'><img src='https://cdn.melhorplano.net/cms/2025/01/24/67939e201bef9selo-melhor-internet-gamer-municipal-2025.svg' alt='Vencedor Melhor Internet Gamer Itariri 2025' width={premiacaoDimensao.width} height={premiacaoDimensao.height}/></a>
                </div>
            </div>
            <div>
                <h2 className={styles.premiacaoText}>Premiações em Pedro de Toledo!</h2>
                <div className={styles.premiacaoGrid}>
                    <a href='https://melhorplano.net/internet-banda-larga/sp/pedro-de-toledo#premio' title='Vencedor Melhor Velocidade Pedro De Toledo 2025'><img src='https://cdn.melhorplano.net/cms/2025/01/24/67939ed8698ddselo-melhor-velocidade-municipal-2025.svg' alt='Vencedor Melhor Velocidade Pedro De Toledo 2025' width={premiacaoDimensao.width} height={premiacaoDimensao.height}/></a>

                    <a href='https://melhorplano.net/internet-banda-larga/sp/pedro-de-toledo#premio' title='Vencedor Melhor Provedor Pedro De Toledo 2025'><img src='https://cdn.melhorplano.net/cms/2025/01/24/67939e9cc2db3selo-melhor-provedor-municipal-2025.svg' alt='Vencedor Melhor Provedor Pedro De Toledo 2025' width={premiacaoDimensao.width} height={premiacaoDimensao.height}/></a>

                    <a href='https://melhorplano.net/internet-banda-larga/sp/pedro-de-toledo#premio' title='Vencedor Maior Satisfação Pedro De Toledo 2025'><img src='https://cdn.melhorplano.net/cms/2025/01/24/67939d22b3532selo-maior-satisfao-municipal-2025.svg' alt='Vencedor Maior Satisfação Pedro De Toledo 2025' width={premiacaoDimensao.width} height={premiacaoDimensao.height}/></a>

                    <a href='https://melhorplano.net/internet-banda-larga/sp/pedro-de-toledo#premio' title='Vencedor Melhor Internet Gamer Pedro De Toledo 2025'><img src='https://cdn.melhorplano.net/cms/2025/01/24/67939e201bef9selo-melhor-internet-gamer-municipal-2025.svg' alt='Vencedor Melhor Internet Gamer Pedro De Toledo 2025' width={premiacaoDimensao.width} height={premiacaoDimensao.height}/></a>
                </div>
            </div>
        </div>
    )
};

export default Premiacao;