import styles from '../../styles/ArtputSection.module.css'
import Atropos from 'atropos/react'
import { Container } from 'react-bootstrap'
import { motion } from "framer-motion"

export default function ArtputSection() {    
        

    return (
       <section className={styles.container} id="artput-section">
           <Container>
                <h1 className={styles.title}>A ARTPUT </h1>
                <div className={styles.contentBox}>
                    <div className={styles.imageBox}>
                        <motion.img 
                            initial={{ scale: 0.5}}
                            whileInView={{ scale:1.5 }}
                            transition={{ duration: 0.5 }}
                            src="/img/whyArtput.svg" alt="" 
                        />
                    </div>
                    <div className={styles.textBox}>
                        <p className={styles.text}>
                            Nossa missão é ajudar marcas a levar suas experiências para o outro universo, gerando alto impacto e ganhos significativos.
                        </p>
                        <p className={styles.text}>                             
                            Trabalhamos para você vender seus projetos e entregar benefícios aos seus clientes, sem gastar fortunas em anúncios. 
                        </p>
                        <p className={styles.text}>
                            Venha conosco criar uma nova experiência disruptiva no mundo das NFT´s e revolucionar o relacionamento com seus clientes.
                        </p>
                    </div>
                </div>
           </Container>
       </section>
    )
}