import React from "react"

function Footer() {
  return (
    <footer className="footer bg-dark text-light py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>Section 1</h5>
            <ul className="list-unstyled">
              <li>Link 1</li>
              <li>Link 2</li>
              <li>Link 3</li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Section 2</h5>
            <ul className="list-unstyled">
              <li>Link 1</li>
              <li>Link 2</li>
              <li>Link 3</li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Section 3</h5>
            <ul className="list-unstyled">
              <li>Link 1</li>
              <li>Link 2</li>
              <li>Link 3</li>
            </ul>
          </div>
        </div>

        <hr className="mt-4" />
        <div className="row">
          <div className="col text-center">
            <p className="mt-3">© {new Date().getFullYear()} Your Company. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
