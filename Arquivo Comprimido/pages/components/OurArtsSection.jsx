import styles from '../../styles/OurArtsSection.module.css'
import 'swiper/css/autoplay'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'

import {FreeMode, Navigation} from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Container } from 'react-bootstrap'

const OurArtsSection = () => (
    <section className={styles.container} id="our-arts-section">
        <h1 className={styles.title}>VEJA NOSSAS ARTES</h1>

        <Swiper
            modules={[FreeMode, Navigation]}
            slidesPerView={'auto'} 
            spaceBetween={10}
            autoplay={true}
            loop={true}
            freeMode={false}
            navigation
            className={styles.slider}
        >
            <SwiperSlide className={styles.slide}>
                <section className={styles.slideItem}>
                    <img src="https://previews.123rf.com/images/hatza/hatza1312/hatza131200275/24579290-cartoon-space-pattern.jpg" alt="" className={styles.sliderItem} />
                </section>
            </SwiperSlide>   
            <SwiperSlide className={styles.slide}>
                <section className={styles.slideItem}>
                    <img src="https://previews.123rf.com/images/hatza/hatza1312/hatza131200275/24579290-cartoon-space-pattern.jpg" alt="" className={styles.sliderItem} />
                </section>
            </SwiperSlide>   
            <SwiperSlide className={styles.slide}>
                <section className={styles.slideItem}>
                    <img src="https://previews.123rf.com/images/hatza/hatza1312/hatza131200275/24579290-cartoon-space-pattern.jpg" alt="" className={styles.sliderItem} />
                </section>
            </SwiperSlide>   
            <SwiperSlide className={styles.slide}>
                <section className={styles.slideItem}>
                    <img src="https://previews.123rf.com/images/hatza/hatza1312/hatza131200275/24579290-cartoon-space-pattern.jpg" alt="" className={styles.sliderItem} />
                </section>
            </SwiperSlide>            
        </Swiper>
        <Container>
            <p className={styles.textBox}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
        </Container>
        
    </section>
)

export default OurArtsSection;