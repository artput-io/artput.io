import styles from '../styles/NFTSection.module.css'
import Atropos from 'atropos/react'
export default function NFTSection() {
    return (
       <section className={styles.container}>
            <div className={styles.main}>
                <Atropos
                    className={styles.main}
                    shadow={false}
                    activeOffset={40}
                    scaleChildren
                >
                    <h1 className={styles.sectionTitle} data-atropos-offset="-10" ><span className="atropos-scale" data-atropos-offset="15">O que é NFT</span></h1>
                    <div className={styles.imageBox} data-atropos-offset="10" >
                        <img src="https://www.artput.io/static/media/violinist.f0627dc066a4a131358e.png" alt="nft" className={styles.image}/>
                    </div>    
                </Atropos>  
            </div>
            <div className={styles.textBox}>
                <Atropos
                    shadow={false}
                    alwaysActive={true}
                    commonOrigin={false}
                    activeOffset={40}
                    scaleChildren
                >
                    <p className={styles.text} data-atropos-offset="-5">
                        <span data-atropos-offset="5" className="atropos-scale">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</span>
                    </p>
                </Atropos>
            </div>     
       </section>
    )
}