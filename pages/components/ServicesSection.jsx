import { Container } from 'react-bootstrap'
import styles from '../../styles/ServicesSection.module.css'
import {FreeMode, Navigation} from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompass, faCompassDrafting, faJetFighter, faMap, faRocket, faScaleBalanced } from '@fortawesome/free-solid-svg-icons';
import { Divider } from 'react-materialize';

export default function ServicesSection() {
    return(
        <section className={styles.container} id="services-section">
            <Container>
                <h1 className={styles.title}>NOSSO TRABALHO</h1>
            </Container>
    
            <div className={styles.slidesBox}>
                <section className={styles.slide}>
                    <FontAwesomeIcon icon={faMap} className={styles.icon}/>
                    <h3 className={styles.slideTitle}>Rocket Strategy</h3>
                    <p className={styles.text}>
                        Participamos de todo o processo de criação do roadmap e definição dos objetivos e benefícios aos holders
                    </p>
                </section>
                <section className={styles.slide}>
                    <FontAwesomeIcon icon={faCompassDrafting} className={styles.icon}/>
                    <h3 className={styles.slideTitle}>NFT Design</h3>
                    <p className={styles.text}>
                        Desenvolvemos todo conceito da arte e design da coleção, usando as técnicas mais avançadas de programação
                    </p>
                </section>
                <section className={styles.slide}>
                    <FontAwesomeIcon icon={faJetFighter} className={styles.icon}/>
                    <h3 className={styles.slideTitle}>Launch</h3>
                    <p className={styles.text}>
                        Divulgação em todos os canais e criação de um portal exclusivo para as vendas
                    </p>
                </section>
                <section className={styles.slide}>
                    <FontAwesomeIcon icon={faRocket} className={styles.icon}/>
                    <h3 className={styles.slideTitle}>Scaling Up</h3>
                    <p className={styles.text}>
                        Aconpanhamento de todas as etapas do projeto e materialização dos benefícios aos holders
                    </p>
                </section>
            </div>
        </section>
    )
}