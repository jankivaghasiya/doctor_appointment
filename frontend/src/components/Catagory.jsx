import React, { Component } from "react";
import "../App.css";
import "./catagory.css";
import img from "../asset/slider_imgs/1.jpg"

class Catagory extends Component {
    render() {
        return (
            <>
            <img src={img} alt="1" width="100%" height="500px"/>
            <div className="container_cat container-cat" >
            <a href="#" className="cat">
                <img alt="" src={img}/>
                <p>Child Health</p>
            </a>
    
            <a href="#" className="cat">
                <img alt="" src={img}/>
                <p>Chroninc Health</p>
            </a>
    
            <a href="#" className="cat">
               <img alt="" src={img}/>
                <p>woman Health</p>
            </a>
    
    
            <a href="#" className="cat">
            <img alt="" src={img}/>
                <p>man Health</p>
            </a>
    
    
            <a href="#" className="cat">
            <img alt="" src={img}/>
                <p>mind Health</p>
            </a>

            <a href="#" className="cat">
            <img alt="" src={img}/>
                <p>Child Health</p>
            </a>

            <a href="#" className="cat">
            <img alt="" src={img}/>
                <p>Child Health</p>
            </a>

            <a href="#" className="cat">
            <img alt="" src={img}/>
                <p>Child Health</p>
            </a>

            <a href="#" className="cat">
            <img alt="" src={img}/>
                <p>Child Health</p>
            </a>

            <a href="#" className="cat">
            <img alt="" src={img}/>
                <p>Child Health</p>
            </a>

            <a href="#" className="cat">
            <img alt="" src={img}/>
                <p>Child Health</p>
            </a>

            <a href="#" className="cat">
            <img alt="" src={img}/>
                <p>Child Health</p>
            </a>
            <a href="#" className="cat">
            <img alt="" src={img}/>
                <p>Child Health</p>
            </a>
            <a href="#" className="cat">
            <img alt="" src={img}/>
                <p>Child Health</p>
            </a>
            <a href="#" className="cat">
            <img alt="" src={img}/>
                <p>Child Health</p>
            </a>
        </div>
    </>
        )
    }
}
 
export default Catagory;