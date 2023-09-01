import React, { useEffect } from 'react'

const About = () => {

  useEffect(() => {

    const clickear = () => {

    }

    window.addEventListener("click", clickear)

    return () => {
      window.removeEventListener("click", clickear)
    }

  }, [])

  return (
    <div className="container">
      <h1 className="main-title">Nosotros</h1>
      <p>Componente "Nosotros"</p>
    </div>
  )
}

export default About