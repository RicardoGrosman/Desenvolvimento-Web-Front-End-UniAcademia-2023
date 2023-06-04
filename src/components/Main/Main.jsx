// Importando o React e alguns componentes do 'reactstrap'
import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import "./Main.css";

// Criando um componente funcional chamado 'Main'
const Main = () => {
  // Retorna o JSX (HTML) do componente
  return (
    <main>
      {/* 'Container' é um componente do 'reactstrap' para alinhar e centralizar o conteúdo */}
      <Container>
        {/* 'Row' e 'Col' são componentes do 'reactstrap' para criar um layout responsivo baseado em grid */}
        <Row>
          <Col className="text-center">
            {/* Exibe o título da seção "Conheça nossas lojas" */}
            <h2 className="shopping-center-title">Conheça nossas lojas</h2>
          </Col>
        </Row>
        <Row>
          <Col>
            {/* Cria duas linhas de lojas, cada uma com três colunas (lojas) */}
            <Row>
              {/* 'md="4"' define a largura das colunas para 4/12 (1/3) da largura total no breakpoint 'md' */}
              <Col md="4" className="text-center">
                {/* 'Link' é usado para navegar entre páginas sem recarregar */}
                <Link to="/loja1">
                  {/* 'empty-image-square' é uma classe CSS para criar uma área vazia com proporção 1:1 */}
                  <div className="empty-image-square"></div>
                </Link>
              </Col>
              {/* 'md="4"' define a largura das colunas para 4/12 (1/3) da largura total no breakpoint 'md' */}
              <Col md="4" className="text-center">
                {/* 'Link' é usado para navegar entre páginas sem recarregar */}
                <Link to="/loja4">
                  {/* 'empty-image-square' é uma classe CSS para criar uma área vazia com proporção 1:1 */}
                  <div className="empty-image-square"></div>
                </Link>
              </Col>
              <Col md="4" className="text-center">
                <Link to="/loja5">
                  <div className="empty-image-square"></div>
                </Link>
              </Col>
              <Col md="4" className="text-center">
                <Link to="/loja6">
                  <div className="empty-image-square"></div>
                </Link>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

// Exporta o componente 'Main' para ser utilizado em outros arquivos
export default Main;