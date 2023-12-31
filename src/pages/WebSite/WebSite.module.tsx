import { AboutTitle, Container } from "./WebSite. module";

const WebSite = () => {
  return (
    <>
      <Container>
        <AboutTitle>Projeto WebSite</AboutTitle>
        <h3>FEITO COM REACT + NODEJS + MYSQL</h3>
        <p>
          O Objetivo desse projeto foi fazer uma simulação de um site real.{" "}
        </p>
        <p>
          Para eu fazer com que ele se tornasse algo real, eu precisei
          primeiramente definir o que ele ia ser.
        </p>

        <p>
          Através da rota <b>/home</b> é possível visualizar a página onde está
          sendo consumindo a api dos assuntos em alta dos EUA.
        </p>
        <h3>O QUE É O PROJETO? </h3>
        <p>
          O Projeto se trata de um WebSite com Cadastro e Autenticação de Login.
        </p>
        <p>
          Todo registro que é feito no Cadastro é enviado diretamente para o meu
          database MYSQL.
        </p>
        <p></p>

        <h3>DOCKER</h3>
        <p>
          Utilizei o <strong>NGINX</strong> para fazer com que rodasse o{" "}
          <strong>Frontend</strong> da minha aplicação.
        </p>
        <p>
          Atualmente se encontra rodando na porta{" "}
          <strong>http://localhost:3000</strong>
        </p>

        <h3>COMO RODAR NO DOCKER</h3>
        <p>docker build -t aleclimadev/website .</p>
        <p>docker run -it --rm -p 3000:3000 aleclimadev/website</p>

        <h3>COMO RODAR DE FORMA TRADICIONAL</h3>
        <p>git clone https://github.com/AlecLimaDev/WebSite-FullStack.git</p>
        <p>
          Baixa as dependências através do <b>npm install or yarn add</b>
        </p>
        <p>
          Em seguida, rode o projeto através do <b>npm run dev</b> ou{" "}
          <strong>yarn dev</strong>
        </p>
      </Container>
    </>
  );
};

export default WebSite;
