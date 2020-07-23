import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Login.css";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button } from "reactstrap";

function LoginScreen() {
  return (
    <Container>
      <Row>
        <Col xl="3" lg="4" md="5" sm="6" className="esquerdo">
          <img
            className="logo"
            src="https://static.wixstatic.com/media/fea6b2_9df96136ab194d7784dd3f09839ae245~mv2.png/v1/fill/w_206,h_66,al_c,q_85,usm_0.66_1.00_0.01/logo-horizontal.webp"
          ></img>
          <span className="acessar">acessar</span>
          <div className="fundo-input">
            <svg
              width="1.2em"
              height="1.2em"
              viewBox="0 0 16 16"
              class="bi bi-envelope"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383l-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z"
              />
            </svg>
            <input type="text" placeholder="Login"></input>
          </div>
          <div className="fundo-input">
            <svg
              width="1.2em"
              height="1.2em"
              viewBox="0 0 16 16"
              class="bi bi-lock"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M11.5 8h-7a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1zm-7-1a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-7zm0-3a3.5 3.5 0 1 1 7 0v3h-1V4a2.5 2.5 0 0 0-5 0v3h-1V4z"
              />
            </svg>
            <input type="text" placeholder="Senha"></input>
          </div>
          <Link className="href-botao" to="/users">
            {" "}
            <Button className="btn-entrar">ENTRAR</Button>
          </Link>
          <span className="esq-senha">Esqueci a senha</span>
          <div className="linha"> </div>
          <span className="esta-dif">Esta tendo dificuldades?</span>
          <Button className="btn-ajuda">AJUDA</Button>
        </Col>
        <Col xl="9" lg="8" md="7" sm="6" className="direita">
          <div className="filtro">
            {" "}
            <div className="txt-ben">Mais do que benefícios</div>
            <div className="txt-lorem">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              vitae mauris sed purus ultricies tincidunt vitae eu libero.
              Maecenas euismod arcu a dolor tincidunt.
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default LoginScreen;
