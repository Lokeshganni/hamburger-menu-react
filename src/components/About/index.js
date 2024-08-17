import Header from '../Header'
import './index.css'

const About = () => (
  <div>
    <Header />
    <hr />
    <ul className="home-container">
      <li>
        <img
          className="home-img-mobile"
          src="https://assets.ccbp.in/frontend/react-js/about-sm-img.png "
          alt="about"
        />
      </li>
      <li>
        <img
          className="home-img-lappy"
          src="https://assets.ccbp.in/frontend/react-js/about-lg-img.png"
          alt="about"
        />
      </li>
    </ul>
  </div>
)
export default About
