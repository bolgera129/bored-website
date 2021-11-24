import React from "react"
import NavBar from "./NavBar"
import css from "./Home.module.css"
import useWindowDimensions from "../Utils/windowDimensions"
import "./Billy_Ohio.ttf"
// import CrossfadeImage from 'react-crossfade-image'
import LazyLoad from 'react-lazyload';
import {Image} from "react-bootstrap"

import 'antd/dist/antd.css';



export default function Home(props){


    const { height, width } = useWindowDimensions();
    console.log(width)

    var image;
    if (width > 786){
        image = 'front.jpeg'
    }
    else{
        console.log(true)
        image = 'front-iphone.jpeg'
    }

    console.log(image)
    

    return(
        <div className = {css.mainCont}>
            <NavBar bg = "false"/>  
        <div>
        <img width = {width} height = {height} className = {css.screen} alt = ''/>
            <LazyLoad height = {height} width = {width} once>
                <Image src = {image} alt = "homepage" height = {height} width = {width}/>
            </LazyLoad>
           <div className = {css.overlay} style = {{width: '100%', height: '100%', left:'0px',top: '0px'}}>
                <div className = {css.overlayTitle}>
                    Aloha Bitches
                </div>
           </div>
        </div>
    </div>
    )
}