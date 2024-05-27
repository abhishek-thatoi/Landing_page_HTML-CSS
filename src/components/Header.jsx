import React from 'react'
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";                          // imported for HashLink(>npm i react-router-hash-link)
import "../styles/header.scss";

export const Header = () => {
  return (
    <nav className="head">
        <h1>Techytar.</h1>
        <main>
            <HashLink to={"/#home"}>Home</HashLink>      
            {/* HashLink offers to render page without refreshing(like ft. <Link></Link>)                 
            as well as scroll to desired section onclick(like ft. <a></a>)*/}
            <HashLink to={"/#brands"}>Brands</HashLink>
            <Link to={"/services"}>Services</Link>
            <Link to={"/contact"}>Contact</Link>
            <HashLink to={"/#about"}>About</HashLink>
            {/* NOTE dont forget to give the exact id to <div></div>s as mentionedin the corresponding links(#about-> id about) */}
        </main>
    </nav>
  )
}
