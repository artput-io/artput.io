import styles from '../../styles/ArtputSection.module.css'
import Atropos from 'atropos/react'
import { Container } from 'react-bootstrap'
import Image from 'next/image'

export default function ArtputSection() {

    const text = `Nossa missão é ajudar marcas a levar suas experiências para o outro universo, gerando alto impacto e ganhos significativos. Trabalhamos para você vender seus projetos e entregar benefícios aos seus clientes, sem gastar fortunas em anúncios. 

Junte-se ao nosso time, e vamos criar uma nova experiência disruptiva no mundo das NFT´s e revolucionar o relacionamento com seus clientes.`
    return (
       <section className={styles.container} id="artput-section">
           <Container>
                <h1 className={styles.title}>PORQUE A ARTPUT </h1>
                <div className={styles.contentBox}>
                    <div className={styles.imageBox}>
                        <img src="https://www.artput.io/static/media/violinist.f0627dc066a4a131358e.png" alt="" />
                    </div>
                    <div className={styles.textBox}>
                        <p className={styles.text}>
                            Nossa missão é ajudar marcas a levar suas experiências para o outro universo, gerando alto impacto e ganhos significativos.
                            <br/> Trabalhamos para você vender seus projetos e entregar benefícios aos seus clientes, sem gastar fortunas em anúncios. 
                            <br />
                            Junte-se ao nosso time, e vamos criar uma nova experiência disruptiva no mundo das NFT´s e revolucionar o relacionamento com seus clientes.
                        </p>
                    </div>
                </div>
           </Container>
       </section>
    )
}