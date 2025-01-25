import { Link } from 'react-router-dom'
import OptionApp from '../sections-quiz/listOptionsQuiz'

const Navbar = () => {
  return (
    <>
      <nav className="navbar bg-light fixed-top">
        <div className="container-fluid">
          <div className="bg-hero-pattern bg-clip-text">
            <h3 className="text-lg text-transparent">SMARTQUIZ</h3>
          </div>
          <button
            className="navbar-toggler "
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
          >
            <span className="fa fa-bars text-black"></span>
          </button>
          <div
            className="offcanvas offcanvas-end"
            tabIndex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <div className="bg-hero-pattern bg-clip-text">
                <h5
                  className="offcanvas-title text-transparent"
                  id="offcanvasNavbarLabel"
                >
                  SMARTQUIZ
                </h5>
              </div>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="flex navbar-nav justify-content-end flex-grow-1 pe-3 gap-4 ">
                {OptionApp.map((optionQuiz, index) => (
                  <li
                    className="nav-item bg-hero-pattern bg-clip-text normal-case"
                    key={index}
                  >
                    <Link
                      className=" text-transparent"
                      to={`/quiz-catégories/${optionQuiz.nomUrl}`}
                    >
                      {optionQuiz.description}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
