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
            <br/><br/><br/>
            <h1>Our Specialists</h1>
            <div className="container_cat container-cat" id="categories">
            
            <a href="#" className="cat">
               <img alt="" src={img3}/>
                <p>Critical Care</p>
            </a>
            <a href="#" className="cat">
            <img alt="" src={img4}/>
                <p>Dental Surgery</p>
            </a>
            <a href="#" className="cat">
            <img alt="" src={img14}/>
                <p>Ear, Nose & Throat</p>
            </a>
            <a href="#" className="cat">
            <img alt="" src={img15}/>
                <p>Health Check-Up</p>
            </a>
            <a href="#" className="cat">
            <img alt="" src={img7}/>
                <p>Cancer-Oncology</p>
            </a>
            <a href="#" className="cat">
            <img alt="" src={img8}/>
                <p>Day Care</p>
            </a>
            <a href="#" className="cat">
            <img alt="" src={img9}/>
                <p>Endocrinology</p>
            </a>
            <a href="#" className="cat">
            <img alt="" src={img11}/>
                <p>Bariatric Surgery</p>
            </a>
            <a href="#" className="cat">
                <img alt="" src={img1}/>
                <p>Accident & Emergency Care</p>
            </a>
            <a href="#" className="cat">
                <img alt="" src={img2}/>
                <p>cardiothoracic Surgery</p>
            </a>
            <a href="#" className="cat">
            <img alt="" src={img5}/>
                <p>Gastroenterology Surgery</p>
            </a>
           
            <a href="#" className="cat">
            <img alt="" src={img10}/>
                <p>General & Laparoscopic Surgery</p>
            </a>
            
            <a href="#" className="cat">
            <img alt="" src={img12}/>
                <p>Clinical Nutrition & Dietetics</p>
            </a>
            <a href="#" className="cat">
            <img alt="" src={img13}/>
                <p>Dermatology & Cosmetology</p>
            </a>
            <a href="#" className="cat">
            <img alt="" src={img6}/>
                <p>Anesthesiology & Pain Management</p>
            </a>
            
        </div>
    </>
        )
    }
}
 
export default Catagory;