import styles from './Contato.module.css';
import Map from './Map/index';

const Contato = () => {
    
    return (
        <section className={`${styles.sectionContato}`}>
            <div className={`${styles.contatoChild}`}>
                <h2 className={`${styles.titleWhere}`}>Onde nos achar?</h2>
            </div>
            <div className={`${styles.contatoChild}`}>
                <Map 
                    endereco={"Rua do Comércio, n°119, Loja 03, Centro - Itariri/SP"}
                    localizacao={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d283.81684019314156!2d-47.17557271218319!3d-24.289171563242412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cfe1b5484723ab%3A0x6a15f287d3d6bd5b!2sR.%20do%20Com%C3%A9rcio%2C%20113%20-%20Centro%2C%20Itariri%20-%20SP%2C%2011760-000!5e1!3m2!1spt-BR!2sbr!4v1720185900421!5m2!1spt-BR!2sbr"}
                />

                <Map 
                    endereco={"Av. São José, n°75, Centro - Pedro de Toledo/SP"}
                    localizacao={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d437.74826100322093!2d-47.23321624467839!3d-24.276737366707522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cfe329253bfb25%3A0x877bf4e7951172a8!2sLifeconnections!5e1!3m2!1spt-BR!2sbr!4v1720185633012!5m2!1spt-BR!2sbr"}
                />
            </div>
            <div className={`${styles.contatoChild}`}>
                <h2 className={`${styles.descritivoTitulo}`}>Life Connections</h2>
                <p className={`${styles.descritivoTexto}`}>Bruno Paes Pedro-ME é uma empresa de telecomunicações inscrita no CNPJ 16.703.429/0001-85 com licença SCM da Anatel.</p>
            </div>
        </section>
    )
}

export default Contato;