import { Container } from 'react-bootstrap'
import styles from '../../styles/ServicesSection.module.css'
import {FreeMode, Navigation} from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompass, faCompassDrafting, faJetFighter, faRocket, faScaleBalanced } from '@fortawesome/free-solid-svg-icons';
import { Divider } from 'react-materialize';

export default function ServicesSection() {
    return(
        <section className={styles.container}>
            <Container>
                <h1 className={styles.title}>FAZEMOS COM VOCÊ</h1>
            </Container>
    
            <div>
                <Swiper
                    modules={[FreeMode, Navigation]}
                    slidesPerView={'auto'} 
                    spaceBetween={10}
                    autoplay={true}
                    loop={false}
                    freeMode={true}
                    navigation
                    className={styles.slider}
                >
                    <SwiperSlide className={styles.slideBlock}>
                        <section className={styles.slide}>
                            <FontAwesomeIcon icon={faJetFighter} className={styles.icon}/>
                            <h3 className={styles.slideTitle}>Rocket Strategy</h3>
                            <p className={styles.text}>
                                Criamos com a sua marca um roadmap pautado em objetivos e benefícios aos holders
                            </p>
                        </section>
                    </SwiperSlide>
                    <span className={styles.divider}></span>
                    <SwiperSlide className={styles.slideBlock}>
                        <section className={styles.slide}>
                            <FontAwesomeIcon icon={faCompassDrafting} className={styles.icon}/>
                            <h3 className={styles.slideTitle}>NFT Design</h3>
                            <p className={styles.text}>
                                Fazemos todo conceito da arte e design da coleção, usando as técnicas mais avançadas de programação
                            </p>
                        </section>
                    </SwiperSlide>
                    <SwiperSlide className={styles.slideBlock}>
                        <section className={styles.slide}>
                            <FontAwesomeIcon icon={faRocket} className={styles.icon}/>
                            <h3 className={styles.slideTitle}>Launch</h3>
                            <p className={styles.text}>
                                Criação de um canal exclusivo de vendas e listagem na open sea
                            </p>
                        </section>
                    </SwiperSlide>
                    <SwiperSlide className={styles.slideBlock}>
                        <section className={styles.slide}>
                            <FontAwesomeIcon icon={faScaleBalanced} className={styles.icon}/>
                            <h3 className={styles.slideTitle}>Scaling Up</h3>
                            <p className={styles.text}>
                                Materialização dos benefícios aos holders e acompanhamento do projeto
                            </p>
                        </section>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    )
}