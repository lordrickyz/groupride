import React from "react";
import '../../stylesheets/footer_pages/technology.scss'

class Technology extends React.Component {
    render() {
        return (
          <div id="footer-background">
            <section className="tech">
              <h2 className="tech-title">Technology</h2>
              <ul>
                <li>Backend: MongoDB / Express</li>
                <li>Frontend: React / Node.js</li>
                <li>Libraries/APIs: TBA (Google Maps API)</li>
              </ul>
              <h2 className="tech-title">Technical Challenges</h2>
              <p className="tech-text">
                Using Google's Map API to locate created events based on their
                set location. The ideal case would be that the map would be able
                to search events within the radius of the user's location and
                show live updates for event creation. The app will be able to
                use globally, as limitations would be interface languages
                support.
              </p>
            </section>
          </div>
        );
    }
}

export default Technology;
