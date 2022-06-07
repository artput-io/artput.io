import styles from '../../styles/NFTSection.module.css';
import Atropos from 'atropos/react'
import { Container } from 'react-bootstrap';
export default function OurJobSection() {
    return (
        <section className={styles.container}>
            <Container>
                <h1 className={styles.title}>PORQUE APOSTAR EM NFT ?</h1>
                <div className={styles.contentBox}>
                    <p className={styles.firstText}>
                        <span>Muito mais que uma arte.</span>
                        Uma nova forma para marcas monetizar a sua audiência, criar comunidades, e fidelizar seus clientes. 
                        Junte as marcas mais inovadoras do mundo e crie com a gente sua coleção exclusiva de NFT´s na tecnologia de blockchain
                    </p>
                    <img src="/img/token.svg" alt="" />
                </div>
            </Container>
        </section>
    )
}