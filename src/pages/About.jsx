import form1 from '../assets/form png 1.png'
import form2 from '../assets/icon curso 1.png'

const About = () => {
  return (
    <>
    <div className="content about">
        <h1>Luiz Guilherme Guizi</h1>
        <p>     24 anos, natural de Curitiba, Paraná. atualmente estou cursando 
            CST em Análise e desenvolvimento de sistemas, em paralelo estudo programação
             front-end, buscando sempre estar atualizado diante as tecnologias e boas práticas
              que situam ao front-end.</p>
              <div className="content">
                <div className="dados_formations">
                <div className="formation hr_vert">
                    <div className="formation_logo">
                        <img src={form1} alt="" />
                    </div>
                        <div>
                        <h3>Técnico em Mecatrônica</h3>
                        <p>SENAI, Curitiba, Paraná<br />
                        Janeiro/2019 a Dezembro/2020</p>
                        <h3>Análise e desenvolvimento de sistemas</h3>
                        <p>UNICruzeiro do Sul, Curitiba, Paraná<br />
                        Janeiro/2023 a Dezembro/2024</p>
                    </div>
                </div>
                <div className="formation">
                <div className="formation_logo">
                <img src={form2} alt="" />
                </div>
                <h3>React do Zero a Maestria</h3>
                        <p>Hora de codar, Udemy.<br />
                        março/2024</p>
                        <h3>Desenvolvedor full-stack</h3>
                        <p>Danki Code<br />
                        cursando</p>
                        <h3>Web Moderno</h3>
                        <p>Cod3r cursos, Udemy.<br />
                        cursando</p>
                      
                </div>
                </div>
                
              </div>
              <button>Currículo</button>
    </div>
    
    </>
  )
}

export default About