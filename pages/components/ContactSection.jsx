import { Container, Form, Button } from 'react-bootstrap';
import styles from '../../styles/ContactSection.module.css';

export default function ContactSection() {

    return (
        <section className={styles.contactSection} id="contact-section">
            <Container>
                <h1 className={styles.title}>FALE CONOSCO</h1>
                <div className={styles.contentBox}>
                    <div className={styles.formBox}> 
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicName">
                                <Form.Label>Nome</Form.Label>
                                <Form.Control type="text" placeholder="Digite seu nome:" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Digite seu email:" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formPhone">
                                <Form.Label>Telefone</Form.Label>
                                <Form.Control type="text" placeholder="Digite seu telefone:" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicName">
                                <Form.Label>Empresa</Form.Label>
                                <Form.Control type="text" placeholder="Digite sua empresa:" />
                            </Form.Group>
                            <Button variant="primary" className={styles.sendButton}>
                                Submit
                            </Button>
                        </Form>            
                    </div>
                    <div className={styles.imgBox}>
                        <img src="img/relaunch.svg" alt="" />
                    </div>
                </div>
            </Container>
        </section>
    )
}