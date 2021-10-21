import React, { Component } from "react";
import { Link } from "react-router-dom";
import IMAGES from "../asset/category_images.js";

class Specialists extends Component {
    render() {
        return (
            <>
                <h1 className="heading-font" id="categories">
                    Our Specialists
                </h1>
                <div className="container_cat container-cat">
                    <Link className="cat" to={{pathname: 'appointment/616581f5a26875241f57d0b1'}} >
                        <img alt="" src={IMAGES.Allergist} />
                        <div>
                            <div className="Link">
                                Allergist
                            </div>
                        </div>
                    </Link>

                    <Link className="cat" to={{pathname: 'appointment/616581aba26875241f57d0aa'}} >
                        <img alt="" src={IMAGES.Dentist} />
                        <div>
                            <div className="Link">
                                Dentist
                            </div>
                        </div>
                    </Link>
                    <Link className="cat" to={{pathname: 'appointment/616581d5a26875241f57d0ae'}} >
                        <img alt="" src={IMAGES.Otolaryngologist} />
                        <div>
                            <div className="Link">
                                Otolaryngologist 
                            </div>
                        </div>
                    </Link>
                    <Link className="cat" to={{pathname: 'appointment/616581fea26875241f57d0b2'}} >
                        <img alt="" src={IMAGES.HealthCheckUp} />
                        <div>
                            <div className="Link">
                                Health Check-Up
                            </div>
                        </div>
                    </Link>
                    <Link className="cat" to={{pathname: 'appointment/61657f60a26875241f57d0a7'}} >
                        <img alt="" src={IMAGES.Oncologist} />
                        <div>
                            <div className="Link">
                                Oncologist
                            </div>
                        </div>
                    </Link>
                    <Link className="cat" to={{pathname: 'appointment/616417d9e77980076f4abb28'}}>
                        <img alt="" src={IMAGES.Neurologist} />
                        <div>
                            <div  
                            className="Link">
                                Neurologist
                            </div>
                        </div>
                    </Link>
                    <Link className="cat" to={{pathname: 'appointment/616581e2a26875241f57d0af'}} >
                        <img alt="" src={IMAGES.Endocrinologist} />
                        <div>
                            <div className="Link">
                                Endocrinologist
                            </div>
                        </div>
                    </Link>
                    <Link className="cat" to={{pathname: 'appointment/61657db4a26875241f57d0a4'}} >
                        <img alt="" src={IMAGES.Nephrologist} />
                        <div>
                            <div className="Link">
                                Nephrologist
                            </div>
                        </div>
                    </Link>
                    <Link className="cat" to={{pathname: 'appointment/616581cca26875241f57d0ad'}} >
                        <img alt="" src={IMAGES.PlasticSurgeon} />
                        <div>
                            <div className="Link">
                                Plastic Surgeon
                            </div>
                        </div>
                    </Link>
                    <Link className="cat" to={{pathname: "/appointment/61657c92a26875241f57d0a3"}} >
                        <img alt="" src={IMAGES.Cardiologist} />
                        <div>
                            <div className="Link">
                                Cardiologist
                            </div>
                        </div>
                    </Link>
                    <Link className="cat" to={{pathname: 'appointment/6165819ba26875241f57d0a9'}} >
                        <img alt="" src={IMAGES.Gastroenterologist} />
                        <div>
                            <div className="Link">
                                Gastroenterologist
                            </div>
                        </div>
                    </Link>

                    <Link className="cat" to={{pathname: 'appointment/616581b4a26875241f57d0ab'}} >
                        <img alt="" src={IMAGES.LaparoscopicSurgeon} />
                        <div>
                            <div className="Link">
                                Laparoscopic Surgeon
                            </div>
                        </div>
                    </Link>

                    <Link className="cat" to={{pathname: 'appointment/61658190a26875241f57d0a8'}} >
                        <img alt="" src={IMAGES.Radiologist} />
                        <div>
                            <div className="Link">
                                Radiologist
                            </div>
                        </div>
                    </Link>
                    <Link className="cat" to={{pathname: 'appointment/616581c0a26875241f57d0ac'}} >
                        <img alt="" src={IMAGES.Dermatologist} />
                        <div>
                            <div className="Link">
                                Dermatologist
                            </div>
                        </div>
                    </Link>
                    <Link className="cat" to={{pathname: 'appointment/616581eaa26875241f57d0b0'}} >
                        <img alt="" src={IMAGES.Pediatrician} />
                        <div>
                            <div className="Link">
                                Pediatrician
                            </div>
                        </div>
                    </Link>
                </div>
            </>
        );
    }
}

export default Specialists;
