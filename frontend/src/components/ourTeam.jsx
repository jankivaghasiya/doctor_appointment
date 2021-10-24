import React from "react";
import IMAGES2 from "../asset/team.js";

class OurTeam extends React.Component {
    render() {
        return (
            <div className="our-team">
                <h1 className="heading-font" id="categories">
                    Our Team
                </h1>
                <div className="row">
                    <div className="card">
                        <img src={IMAGES2.img1} alt="" />
                        <div className="team-member">
                            <h2>Jagdish Tilokani</h2>
                            <p className="title"> Founder</p>
                            <p>
                                It takes 20 years to build a reputation and five
                                minutes to ruin it. If you think about that,
                                you’ll do things differently.
                            </p>
                            <p className="member-email">
                                jagdishtilokani@example.com
                            </p>
                        </div>
                    </div>

                    <div className="card">
                        <img src={IMAGES2.img2} alt="" />
                        <div className="team-member">
                            <h2>Harsh Thumar</h2>
                            <p className="title"> CEO</p>
                            <p>
                                To me, business isn’t about wearing suits or
                                pleasing stockholders. It’s about being true to
                                yourself, your ideas and focusing on the
                                essentials.
                            </p>
                            <p className="member-email">
                                harshthumar@example.com
                            </p>
                        </div>
                    </div>

                    <div className="card">
                        <img src={IMAGES2.img3} alt="" />
                        <div className="team-member">
                            <h2>Janki Vaghasiya</h2>
                            <p className="title">CFO</p>
                            <p>
                                Your work is going to fill a large part of your
                                life, and the only way to be truly satisfied is
                                to do what you believe is great work.
                            </p>
                            <p className="member-email">
                                jankivaghasiya@example.com
                            </p>
                        </div>
                    </div>

                    <div className="card">
                        <img src={IMAGES2.img4} alt="" />
                        <div className="team-member">
                            <h2>Princy Gajera</h2>
                            <p className="title">Director</p>
                            <p>
                                You have to be very nimble and very open minded.
                                Your success is going to be very dependent on
                                how you adapt.
                            </p>
                            <p className="member-email">
                                princygajera@example.com
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default OurTeam;
