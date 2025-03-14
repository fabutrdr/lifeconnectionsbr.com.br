import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={`${styles.rodape}`}>
            <div className={`d-flex justify-content-center gap-2`}>
                <i className={`bi bi-envelope`}></i>
                <p>contato@lifeconnectionsbr.com.br</p>
            </div>
            <div className={`d-flex justify-content-center gap-2`}>
                <i className={`bi bi-whatsapp`}></i>
                <p>0800 333 4321 | (13) 4042-1455</p>
                <i className={`bi bi-telephone-fill`}></i>
            </div>
            
            <p>Copyright &copy; Todos os direitos reservados à Life Connections.</p>
            <p>Desenvolvido por <a className={`text-black`} href="https://www.linkedin.com/in/viniciussouzaduarte?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer" hrefLang='pt-br'>Vinicius Duarte</a></p>
        </footer>
    )
}

export default Footer;