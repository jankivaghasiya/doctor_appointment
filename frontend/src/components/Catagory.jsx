import React, { Component } from "react";
import "../App.css";
import "./catagory.css";
import img from "../asset/slider_imgs/1.1.jpg"
import img1 from "../asset/slider_imgs/1.jpg"
import img2 from "../asset/slider_imgs/2.jpg"
import img3 from "../asset/slider_imgs/3.jpg"
import img4 from "../asset/slider_imgs/4.jpg"
import img5 from "../asset/slider_imgs/5.jpg"
import img6 from "../asset/slider_imgs/6.jpg"
import img7 from "../asset/slider_imgs/7.jpg"
import img8 from "../asset/slider_imgs/8.jpg"
import img9 from "../asset/slider_imgs/9.jpg"
import img10 from "../asset/slider_imgs/10.jpg"
import img11 from "../asset/slider_imgs/11.jpg"
import img12 from "../asset/slider_imgs/12.jpg"
import img13 from "../asset/slider_imgs/13.jpg"
import img14 from "../asset/slider_imgs/14.jpg"
import img15 from "../asset/slider_imgs/15.jpg"

class Catagory extends Component {
    render() {
        return (
            <>
            <img src={img} alt="1" width="100%" height="20%"/>
            <br/>            <br/><br/>
            <h1 className="heading-font">Our Specialists</h1>
            
            <div className="container_cat container-cat" id="categories">

            <a href="#" className="cat">
               <img alt="" src={img1}/>
                <p>Allergist</p>
            </a>
            <a href="#" className="cat">
            <img alt="" src={img4}/>
                <p>Dentiest</p>
            </a>
            <a href="#" className="cat">
            <img alt="" src={img14}/>
                <p>Otolaryngologist</p>
            </a>
            <a href="#" className="cat">
            <img alt="" src={img15}/>
                <p>Health Check-Up</p>
            </a>
            <a href="#" className="cat">
            <img alt="" src={img7}/>
                <p>Oncologist</p>
            </a>
            <a href="#" className="cat">
            <img alt="" src={img3}/>
                <p>Neurologist</p>
            </a>
            <a href="#" className="cat">
            <img alt="" src={img9}/>
                <p>Endocrinologist</p>
            </a>
            <a href="#" className="cat">
            <img alt="" src={img11}/>
                <p>Nephrologist</p>
            </a>
            <a href="#" className="cat">
                <img alt="" src={img8}/>
                <p>Plastic Surgeon</p>
            </a>
            <a href="#" className="cat">
                <img alt="" src={img2}/>
                <p>Cardiologist</p>
            </a>
            <a href="#" className="cat">
            <img alt="" src={img5}/>
                <p>Gastroenterologist</p>
            </a>
           
            <a href="#" className="cat">
            <img alt="" src={img10}/>
                <p>Laparoscopic Surgeon</p>
            </a>
            
            <a href="#" className="cat">
            <img alt="" src={img12}/>
                <p>Radiologist</p>
            </a>
            <a href="#" className="cat">
            <img alt="" src={img13}/>
                <p>Dermatologist</p>
            </a>
            <a href="#" className="cat">
            <img alt="" src={img6}/>
                <p>Pediatrician</p>
            </a>
            
        </div>
    </>
        )
    }
}
 
export default Catagory;