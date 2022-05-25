import {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from "@fortawesome/free-solid-svg-icons"

export default function Header() {
    let [classes, setClasses] = useState({
    menu: "hidden md:-2/6 md:flex flex-row justify-evenly font-passionOne font-bold text-xl",
    logo: "m-auto logo self-center md:w-2/12 md:m-0",
    initial: true  })
  
    const openMenu = () => {
        console.log(classes.intial)
        if(classes.initial == true) {
        setClasses({
            menu: "w-2/6 flex flex-col m-auto h-12/12 transition md:flex-row items-center md:m-0 justify-evenly font-passionOne font-bold text-xl z-10 bg-white",
            logo: "hidden m-auto logo self-center md:w-2/12 md:m-0 md:block",
            initial: false
        })
        } else {
        
        setClasses({
            menu: "hidden md:-2/6 md:flex flex-row justify-evenly font-passionOne font-bold text-xl",
            logo: "m-auto logo self-center md:w-2/12 md:m-0",
            initial: true
        })
        }
        
    }

    return (
      <section className="container mx-auto flex flex-row items-center justify-between">
          <div className={classes.logo}>
          <img src="/img/logo.svg" alt="company logo" className="w-full" />
          </div>
          <div className={classes.menu}>
          <a href=""><span className="font-passionOne mr-3">O que é NFT</span></a>
          <a href=""><span className="font-passionOne mr-3">Nosso trabalho</span></a>
          <a href=""><span className="font-passionOne"></span>contato</a>
          </div>
          <button className="flex md:hidden fixed right-2 "onClick={() => openMenu()}><FontAwesomeIcon className="text-xl" icon={faBars}/></button>
      </section>
    )
}

