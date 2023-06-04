import React from "react";

function Loja5() {
  const produtos = [
    {
      id: 1,
      nome: "Console de Videogame",
      imagem: "/img/console_videogame.jpg",
    },
    {
      id: 2,
      nome: "Teclado Mecânico Gamer",
      imagem: "/img/teclado_mecanico_gamer.jpg",
    },
    {
      id: 3,
      nome: "Mouse Gamer com DPI Ajustável",
      imagem: "/img/mouse_gamer.jpg",
    },
  ];

  return (
    <div>
      <h2>Loja 5</h2>
      <div>
        {produtos.map((produto) => (
          <div key={produto.id}>
            <img src={produto.imagem} alt={produto.nome} />
            <h3>{produto.nome}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Loja5;