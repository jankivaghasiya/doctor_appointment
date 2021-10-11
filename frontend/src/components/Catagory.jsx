import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import "./styles.css";
import IMAGES from "../asset/category_images.js";
class Catagory extends Component {
  render() {
    return (
      <>
        <img
          src={require("../asset/slider_imgs/main.jpg").default}
          alt="1"
          width="100%"
          height="20%"
        />
        <h1 className="heading-font">Our Specialists</h1>
        <div className="container_cat container-cat" id="categories">
          <div className="cat">
            <img alt="" src={IMAGES.Allergist} />
            <div>
              <Link to="/" className="Link" className="Link">
                Allergist
              </Link>
            </div>
          </div>

          <div className="cat">
            <img alt="" src={IMAGES.Dentist} />
            <div>
              <Link to="/" className="Link">
                Dentist
              </Link>
            </div>
          </div>
          <div className="cat">
            <img alt="" src={IMAGES.Otolaryngologist} />
            <div>
              <Link to="/" className="Link">
                Otolaryngologist
              </Link>
            </div>
          </div>
          <div className="cat">
            <img alt="" src={IMAGES.HealthCheckUp} />
            <div>
              <Link to="/" className="Link">
                Health Check-Up
              </Link>
            </div>
          </div>
          <div className="cat">
            <img alt="" src={IMAGES.Oncologist} />
            <div>
              <Link to="/" className="Link">
                Oncologist
              </Link>
            </div>
          </div>
          <div className="cat">
            <img alt="" src={IMAGES.Neurologist} />
            <div>
              <Link to="/" className="Link">
                Neurologist
              </Link>
            </div>
          </div>
          <div className="cat">
            <img alt="" src={IMAGES.Endocrinologist} />
            <div>
              <Link to="/" className="Link">
                Endocrinologist
              </Link>
            </div>
          </div>
          <div className="cat">
            <img alt="" src={IMAGES.Nephrologist} />
            <div>
              <Link to="/" className="Link">
                Nephrologist
              </Link>
            </div>
          </div>
          <div className="cat">
            <img alt="" src={IMAGES.PlasticSurgeon} />
            <div>
              <Link to="/" className="Link">
                Plastic Surgeon
              </Link>
            </div>
          </div>
          <div className="cat">
            <img alt="" src={IMAGES.Cardiologist} />
            <div>
              <Link to="/" className="Link">
                Cardiologist
              </Link>
            </div>
          </div>
          <div className="cat">
            <img alt="" src={IMAGES.Gastroenterologist} />
            <div>
              <Link to="/" className="Link">
                Gastroenterologist
              </Link>
            </div>
          </div>

          <div className="cat">
            <img alt="" src={IMAGES.LaparoscopicSurgeon} />
            <div>
              <Link to="/" className="Link">
                Laparoscopic Surgeon
              </Link>
            </div>
          </div>

          <div className="cat">
            <img alt="" src={IMAGES.Radiologist} />
            <div>
              <Link to="/" className="Link">
                Radiologist
              </Link>
            </div>
          </div>
          <div className="cat">
            <img alt="" src={IMAGES.Dermatologist} />
            <div>
              <Link to="/" className="Link">
                Dermatologist
              </Link>
            </div>
          </div>
          <div className="cat">
            <img alt="" src={IMAGES.Pediatrician} />
            <div>
              <Link to="/" className="Link">
                Pediatrician
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Catagory;
