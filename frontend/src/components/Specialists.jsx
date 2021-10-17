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
                    <div className="cat">
                        <img alt="" src={IMAGES.Allergist} />
                        <div>
                            <Link to={{pathname: 'appointment/616581f5a26875241f57d0b1'}} className="Link">
                                Allergist
                            </Link>
                        </div>
                    </div>

                    <div className="cat">
                        <img alt="" src={IMAGES.Dentist} />
                        <div>
                            <Link to={{pathname: 'appointment/616581aba26875241f57d0aa'}} className="Link">
                                Dentist
                            </Link>
                        </div>
                    </div>
                    <div className="cat">
                        <img alt="" src={IMAGES.Otolaryngologist} />
                        <div>
                            <Link to={{pathname: 'appointment/616581d5a26875241f57d0ae'}} className="Link">
                                Otolaryngologist 
                            </Link>
                        </div>
                    </div>
                    <div className="cat">
                        <img alt="" src={IMAGES.HealthCheckUp} />
                        <div>
                            <Link to={{pathname: 'appointment/616581fea26875241f57d0b2'}} className="Link">
                                Health Check-Up
                            </Link>
                        </div>
                    </div>
                    <div className="cat">
                        <img alt="" src={IMAGES.Oncologist} />
                        <div>
                            <Link to={{pathname: 'appointment/61657f60a26875241f57d0a7'}} className="Link">
                                Oncologist
                            </Link>
                        </div>
                    </div>
                    <div className="cat">
                        <img alt="" src={IMAGES.Neurologist} />
                        <div>
                            <Link to={{pathname: 'appointment/616417d9e77980076f4abb28'}} 
                            className="Link">
                                Neurologist
                            </Link>
                        </div>
                    </div>
                    <div className="cat">
                        <img alt="" src={IMAGES.Endocrinologist} />
                        <div>
                            <Link to={{pathname: 'appointment/616581e2a26875241f57d0af'}} className="Link">
                                Endocrinologist
                            </Link>
                        </div>
                    </div>
                    <div className="cat">
                        <img alt="" src={IMAGES.Nephrologist} />
                        <div>
                            <Link to={{pathname: 'appointment/61657db4a26875241f57d0a4'}} className="Link">
                                Nephrologist
                            </Link>
                        </div>
                    </div>
                    <div className="cat">
                        <img alt="" src={IMAGES.PlasticSurgeon} />
                        <div>
                            <Link to={{pathname: 'appointment/616581cca26875241f57d0ad'}} className="Link">
                                Plastic Surgeon
                            </Link>
                        </div>
                    </div>
                    <div className="cat">
                        <img alt="" src={IMAGES.Cardiologist} />
                        <div>
                            <Link to={{pathname: "/appointment/61657c92a26875241f57d0a3"}} className="Link">
                                Cardiologist
                            </Link>
                        </div>
                    </div>
                    <div className="cat">
                        <img alt="" src={IMAGES.Gastroenterologist} />
                        <div>
                            <Link to={{pathname: 'appointment/6165819ba26875241f57d0a9'}} className="Link">
                                Gastroenterologist
                            </Link>
                        </div>
                    </div>

                    <div className="cat">
                        <img alt="" src={IMAGES.LaparoscopicSurgeon} />
                        <div>
                            <Link to={{pathname: 'appointment/616581b4a26875241f57d0ab'}} className="Link">
                                Laparoscopic Surgeon
                            </Link>
                        </div>
                    </div>

                    <div className="cat">
                        <img alt="" src={IMAGES.Radiologist} />
                        <div>
                            <Link to={{pathname: 'appointment/61658190a26875241f57d0a8'}} className="Link">
                                Radiologist
                            </Link>
                        </div>
                    </div>
                    <div className="cat">
                        <img alt="" src={IMAGES.Dermatologist} />
                        <div>
                            <Link to={{pathname: 'appointment/616581c0a26875241f57d0ac'}} className="Link">
                                Dermatologist
                            </Link>
                        </div>
                    </div>
                    <div className="cat">
                        <img alt="" src={IMAGES.Pediatrician} />
                        <div>
                            <Link to={{pathname: 'appointment/616581eaa26875241f57d0b0'}} className="Link">
                                Pediatrician
                            </Link>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Specialists;
