import { Link } from "react-router-dom"
import "../../../styles/index.css"

const Logo = () => {
  return (
    <div className="logo flex">
			<Link to="/">
      <img className="img-EDteam" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/EDteam-logo-fondo-blanco.svg/1200px-EDteam-logo-fondo-blanco.svg.png"  alt="Logo" />
			</Link>
    </div>
  )
}

export default Logo