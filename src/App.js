import { useState } from "react"

import Header from "./components/Header"
import Footer from "./components/Footer"
import Hero from "./components/Hero"

function SimpleTextForm() {
  const [displayText, setDisplayText] = useState("")

  const handleButtonClick = () => {
    setDisplayText(document.getElementById("textarea").value)
  }

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="form-group">
            <label htmlFor="textarea">Enter Text:</label>
            <textarea className="form-control" id="textarea" rows="4" cols="50"></textarea>
          </div>
          <button className="btn btn-primary" onClick={handleButtonClick}>
            Display Text
          </button>
          <h2>{displayText && <p>{displayText}</p>}</h2>
        </div>
      </div>
    </div>
  )
}

function App() {
  return (
    <div>
      <Header title="Simple React App" />
      <Hero />
      <SimpleTextForm />
      <Footer />
    </div>
  )
}

export default App
