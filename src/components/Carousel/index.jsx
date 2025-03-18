import DesktopCard from '../Cards/CardDesktop';
import MobileCard from '../Cards/CardMobile';
import TabletCard from '../Cards/CardTablet';
import styles from './Carousel.module.css';

import imageUnlimited from "../../assets/image/plans/unlimited.jpeg";
import image400 from "../../assets/image/plans/400mb.jpeg";
import image600 from "../../assets/image/plans/600mb.jpeg";
import image800 from "../../assets/image/plans/800mb.jpeg";

const Carousel = () => {
    return (
        <>

            {/* mobile */}

            <section id="carouselExampleCaptions" className={`carousel slide ${styles.sectionCarousel} d-md-none d-lg-none`} data-bs-ride="carousel">
                <div className={`carousel-indicators`}>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className={`active`} aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
                </div>
                <div className={`carousel-inner `}>

                    <MobileCard 
                        price={"R$149,90"}
                        image={imageUnlimited}
                        isActive={"active"}
                        alt={"Imagem representando o plano sem limites!"}
                        validador={true}
                    />

                    <MobileCard 
                        price={"R$79,90"}
                        image={image400}
                        alt={"Imagem representando o plano de 400mb."}
                    />

                    <MobileCard 
                        price={"R$99,90"}
                        image={image600}
                        alt={"Imagem representando o plano de 600mb."}
                    />

                    <MobileCard 
                        price={"R$139,90"}
                        image={image800}
                        alt={"Imagem representando o plano de 800mb."}
                        validador={true}
                    />                    
                </div>
                <button className={`carousel-control-prev`} type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className={`carousel-control-prev-icon`} aria-hidden="true"></span>
                    <span className={`visually-hidden`}>Previous</span>
                </button>
                <button className={`carousel-control-next`} type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className={`carousel-control-next-icon`} aria-hidden="true"></span>
                    <span className={`visually-hidden`}>Next</span>
                </button>
            </section>

            {/* tablet */}

            <section className={`${styles.sectionCarouselTablet} mt-5 d-none d-lg-flex d-xxl-none`}>

                <TabletCard 
                    price={"R$79,90"}
                    image={"../../../public/images/plans/400mb.jpeg"}
                    alt={"Imagem representando o plano de 400mb."}
                />

                <TabletCard 
                    price={"R$99,90"}
                    image={"../../../public/images/plans/600mb.jpeg"} 
                    alt={"Imagem representando o plano de 600mb."}
                />

                <TabletCard 
                    price={"R$139,90"}
                    image={"./../../public/images/plans/800mb.jpeg"}
                    alt={"Imagem representando o plano de 800mb."}
                    validador={true}
                />

                <TabletCard 
                    price={"R$149,90"}
                    image={"../../../public/images/plans/unlimited.jpeg"}
                    alt={"Imagem representando o plano sem limites!"}
                    validador={true}
                />
            </section>

            {/* desktop */}

            <section className={`${styles.sectionCarouselDesktop} mt-5 d-none d-lg-none d-xxl-flex`}>
                <DesktopCard
                    price={"R$79,90"}
                    image={"../../../public/images/plans/400mb.jpeg"}
                    alt={"Imagem representando o plano de 400mb."}
                />
                <DesktopCard
                    price={"R$99,90"}
                    image={"../../../public/images/plans/600mb.jpeg"}
                    alt={"Imagem representando o plano de 600mb."}
                />
                <DesktopCard 
                    price={"R$139,90"}
                    image={"./../../public/images/plans/800mb.jpeg"}
                    alt={"Imagem representando o plano de 800mb."}
                    maior={true}
                />
                <DesktopCard 
                    price={"R$149,90"}
                    image={"../../../public/images/plans/unlimited.jpeg"}
                    alt={"Imagem representando o plano sem limites."}
                    maior={true}
                />
                
            </section>
        </>
    )
}

export default Carousel;