import Header from '../Header'
import './index.css'

const Home = () => (
  <div>
    <Header />
    <hr />
    <ul className="home-container">
      <li>
        <img
          className="home-img-mobile"
          src="https://assets.ccbp.in/frontend/react-js/home-sm-img.png "
          alt="home"
        />
      </li>
      <li>
        <img
          className="home-img-lappy"
          src="https://assets.ccbp.in/frontend/react-js/home-lg-img.png"
          alt="home"
        />
      </li>
    </ul>
  </div>
)
export default Home
