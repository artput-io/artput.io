import styles from '../../styles/Header.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import {useState} from 'react';
import { Navbar, Nav, Container, Offcanvas, Button } from 'react-bootstrap'
import Image from 'next/image';
import logo from '../../public/img/logo.svg'
export default function Header() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <section className={styles.container}>
            <Navbar className={styles.desktopMenu}>
                <Container>
                    <Navbar.Brand href="#home" className={styles.menuLogo}>
                        <Image src={logo} />
                    </Navbar.Brand>
                    <Nav className={styles.menu}>
                        <Nav.Link href="#home-section">Home</Nav.Link>
                        <Nav.Link href="#artput-section">A Artput</Nav.Link>
                        <Nav.Link href="#nft-section">NFT</Nav.Link>
                        <Nav.Link href="#arts-section">Nossas Artes</Nav.Link>
                        <Nav.Link href="#services-section">Serviços</Nav.Link>
                        <Nav.Link href="#contact-section">Contato</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <div className={styles.mobileHeader}>
                <Image src={logo} />
                <div className={styles.menuSide}>
                    <Button variant="" className={styles.menuIcon} onClick={handleShow}>
                        <FontAwesomeIcon icon={faBars}/>
                    </Button>
                    <Offcanvas show={show} onHide={handleClose} className={styles.offCanvas}>
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title>Artput</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Navbar>
                                <Container>
                                    <Nav className={styles.menuCollapsed}>
                                        <Nav.Link href="#home-section">Home</Nav.Link>
                                        <Nav.Link href="#artput-section">A Artput</Nav.Link>
                                        <Nav.Link href="#nft-section">NFT</Nav.Link>
                                        <Nav.Link href="#arts-section">Nossas Artes</Nav.Link>
                                        <Nav.Link href="#services-section">Serviços</Nav.Link>
                                        <Nav.Link href="#contact-section">Contato</Nav.Link>
                                    </Nav>
                                </Container>
                            </Navbar>
                        </Offcanvas.Body>
                    </Offcanvas>
                </div>
            </div>
            
        </section>
    )
}

