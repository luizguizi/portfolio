import Medias from "../components/Medias"
import profileimg from '../assets/profile 1.png'
import ContactButton from "../components/ContactButton"


const Home = () => {
  return (
   <>
        <div className="datas">
        <div className="content info_home">
            <h2>Olá, eu sou Luiz Guilherme</h2>
            <span>Frontend Developer</span>
            <p>Estudante de ADS, apaixonado por tecnologia e 
                disposto a encarar desafios que agreguem a 
                minha carreira.</p>
        </div>
        <div className="profile_img">
            <img src={profileimg} alt="" />
        </div>
       
        </div>
        <br />
        <div className="container button">
        <ContactButton />
        </div>
    </>
  )
}
export default Home