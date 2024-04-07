import send from "../assets/2099189 1.png"
import { NavLink } from "react-router-dom"


const ContactButton = () => {
  return (
    <>
    <NavLink to={'/contato'}>
   <div className="content button_ctt">
       
        <button >Contato <img src={send} alt="" /> </button>
        
    </div>
    </NavLink>
    </>
  )
}

export default ContactButton