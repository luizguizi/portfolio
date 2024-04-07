import Linkedin from '../assets/linkein 2.png'
import Github from '../assets/github 2.png'
import Email from '../assets/image 1.png'

import { NavLink } from 'react-router-dom'



const Medias = () => {
  return (
    <div className='medias'>
        <NavLink to={'/'}>
        <div className='linkedin'>
        <img src={Linkedin} alt="" />
        </div>
        </NavLink>
        <div className='github'>
        <img  src={Github} alt="" />
        </div>
        <div className='email'>
        <img  src={Email} alt="" />
        </div>
    </div>
  )
}

export default Medias