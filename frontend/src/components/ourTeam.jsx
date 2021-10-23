import React from "react";
import IMAGES2 from "../asset/team.js";
import "./ourTeam.css";

class OurTeam extends React.Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="column">
            <div className="card">
              <img src={IMAGES2.img1} style={{ width: "100%" }} />
              <div className="container">
                <h2>Jagdish Tilokani</h2>
                <p className="title"> Founder</p>
                <p>
                  It takes 20 years to build a reputation and five minutes to
                  ruin it. If you think about that, you’ll do things
                  differently.
                </p>
                <br></br>
                <br></br>
                <p>jagdishtilokani@example.com</p>
                <p>
                  <button className="button">Contact</button>
                </p>
              </div>
            </div>
          </div>

          <div className="column">
            <div className="card">
              <img src={IMAGES2.img2} style={{ width: "100%" }} />
              <div className="container">
                <h2>Harsh Thumar</h2>
                <p className="title"> CEO</p>
                <p>
                  To me, business isn’t about wearing suits or pleasing
                  stockholders. It’s about being true to yourself, your ideas
                  and focusing on the essentials.
                </p>
                <br></br>
                <p>harshthumar@example.com</p>
                <p>
                  <button className="button">Contact</button>
                </p>
              </div>
            </div>
          </div>

          <div className="column">
            <div className="card">
              <img src={IMAGES2.img3} style={{ width: "100%" }} />
              <div className="container">
                <h2>Janki Vaghasiya</h2>
                <p className="title">CFO</p>
                <p>
                  Your work is going to fill a large part of your life, and the
                  only way to be truly satisfied is to do what you believe is
                  great work.
                </p>
                <br></br>

                <p>jankivaghasiya@example.com</p>
                <p>
                  <button className="button">Contact</button>
                </p>
              </div>
            </div>
          </div>

          <div className="column">
            <div className="card">
              <img src={IMAGES2.img4} style={{ width: "100%" }} />
              <div className="container">
                <h2>Princy Gajera</h2>
                <p className="title">Director</p>
                <p>
                  You have to be very nimble and very open minded. Your success
                  is going to be very dependent on how you adapt.
                </p>

                <br></br>
                <br></br>
                <p>princygajera@example.com</p>
                <p>
                  <button className="button">Contact</button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default OurTeam;
