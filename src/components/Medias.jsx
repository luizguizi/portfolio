import Linkedin from '../assets/linkein 2.png'
import Github from '../assets/github 2.png'
import Email from '../assets/image 1.png'

import { NavLink } from 'react-router-dom'



const Medias = () => {
  return (
    <div className='medias'>
        <div className='linkedin rotacionar'>
        <a target='_blank' href="https://www.linkedin.com/in/luizguizi/"><img  src={Linkedin} alt="" /></a>
        </div>
        <div className='github'>
        <a href="https://github.com/luizguizi" target='_blank'><img  src={Github} alt="" /></a>
        </div>
        <div className='email'>
        <a href=""><img  src={Email} alt="" /></a>
        </div>
    </div>
  )
}

export default Medias