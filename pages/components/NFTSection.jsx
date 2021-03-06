import styles from '../../styles/NFTSection.module.css';
import Atropos from 'atropos/react'
import { Container } from 'react-bootstrap';
import {motion} from 'framer-motion'

export default function OurJobSection() {
    return (
        <section className={styles.container} id="nft-section">
            <Container>
                <h1 className={styles.title}>PORQUE APOSTAR EM NFT ?</h1>
                <div className={styles.contentBox}>
                    <div className={styles.textSide}>
                        <p className={styles.destac}>Muito mais que uma arte</p>
                        <p className={styles.firstText}>
                            Digitalizada no blockchain - tecnologia mais avançada e segura para validar ou registrar uma transação.
                        </p>
                        <p className={styles.firstText}>
                            Uma nova forma para marcas monetizar a sua audiência, criar comunidades, e fidelizar seus clientes.
                        </p>
                        <p className={styles.firstText}>
                            Junte-se as marcas mais inovadoras do mundo e crie com a gente sua coleção exclusiva.
                        </p>

                    </div>
                    
                    <motion.img 
                        initial={{ scale: 0.5}}
                        whileInView={{ scale:1 }}
                        transition={{ duration: 1 }}
                        src="/img/token.svg" alt="" 
                    />
                </div>
            </Container>
        </section>
    )
}