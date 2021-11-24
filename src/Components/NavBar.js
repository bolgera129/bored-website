import React,{useEffect,useState} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import Image from 'react-bootstrap/Image'
import publicUrl from "Utils/publicUrl"
import css from "../Components/NavBar.module.css"


export default function NavBar(props){

  var bgcolor = false;
  if (props.bg === "true"){
    bgcolor = false;
  }
  else{
    bgcolor = true;
  }
  
    const [scroll, setScroll] = useState(1)


    useEffect(() => {
      document.addEventListener("scroll", () => {
        const scrollCheck = window.scrollY < 50
        if (scrollCheck !== scroll) {
          setScroll(scrollCheck)
        }
      })

    })

    
    return(
      <div>
        <Navbar bg={ (scroll && bgcolor) ? "transparent" : "light"} fixed = "top" className = {css.navCont} collapseOnSelect expand="lg">
          <Navbar.Brand href="/">   <Image src={publicUrl((scroll && bgcolor) ? "cowboy.png" : "cowboy.png")} className = {css.logo}/> </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className = { css.toggler }/> 
          <Navbar.Collapse id = "basic-navbar-nav" className = {css.navbarContainer}>
            <Nav className = {css.navbarNav}>
              <div className = {(scroll && bgcolor) ? css.divNavBlack : css.divNavWhite}>
              <Nav.Item className = {(scroll && bgcolor) ? css.navItemBlack : css.navItemWhite}>
                <Nav.Link href="/homies"><strong className = {(scroll && bgcolor) ? css.textWhite : css.textBlack}> Homies </strong></Nav.Link>
              </Nav.Item>    
              </div>    
              <div className = {(scroll && bgcolor) ? css.divNavBlack : css.divNavWhite}>
              <Nav.Item className = {(scroll && bgcolor) ? css.navItemBlack : css.navItemWhite}>
                <Nav.Link  href="/destinations"><strong className = {(scroll && bgcolor) ? css.textWhite : css.textBlack}> Destinations </strong></Nav.Link>
              </Nav.Item>    
              </div>
              <div className = {(scroll && bgcolor) ? css.divNavBlack : css.divNavWhite}>
              <Nav.Item className = {(scroll && bgcolor) ? css.navItemBlack : css.navItemWhite}>
                <Nav.Link  href="/aftermath"><strong className = {(scroll && bgcolor) ? css.textWhite : css.textBlack}> Aftermath </strong></Nav.Link>
              </Nav.Item>    
              </div>
              <div className = {(scroll && bgcolor) ? css.divNavBlack : css.divNavWhite}>
              <Nav.Item className = {(scroll && bgcolor) ? css.navItemBlack : css.navItemWhite}>
                <Nav.Link  href="/fish"><strong className = {(scroll && bgcolor) ? css.textWhite : css.textBlack}> Fish </strong></Nav.Link>
              </Nav.Item>    
              </div>
            </Nav>
          </Navbar.Collapse>  
        </Navbar>
      </div>
    )

}