import { useEffect, useState } from "react";
import styles from "./Map.module.css";

const Map = ({endereco, localizacao}) => {

    const [dimensoes, setDimensoes] = useState({
        width: 400,
        height: 350
    });

    const calcularDimensoes = (width) => {
        if (width < 500) {
            return {width: 400, height: 350};
        } else if (width >= 501 && width < 1050) {
            return {width: 800, height: 500};
        } else {
            return {width: 1500, height: 750};
        }
    };

    useEffect(() => {
        const observarRedimensionamento = () => {
            setDimensoes(calcularDimensoes(window.innerWidth));
        };

        observarRedimensionamento();
        window.addEventListener("resize", observarRedimensionamento);

        return () => window.removeEventListener("resize", observarRedimensionamento);
    }, []);

    return (
        <div className={`d-flex flex-column justify-content-center gap-2 mb-4 ${styles.contatoMap}`}>
            <p> 
                <i className={`bi bi-geo-alt-fill`}></i>
                {endereco}
            </p>
            <iframe 
                src={localizacao} 
                width={dimensoes.width}
                height={dimensoes.height}
                allowFullScreen="" 
                loading="lazy" referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
    );
};

export default Map;