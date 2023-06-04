import React from "react";

function Loja1() {
  const produtos = [
    {
      id: 1,
      nome: "Óculos Futurista",
      imagem: "/img/oculos_futurista.jpg",
    },
    {
      id: 2,
      nome: "Relógio Inteligente",
      imagem: "/img/relogio_inteligente.jpg",
    },
    {
      id: 3,
      nome: "Tênis Tecnológico",
      imagem: "/img/tenis_tecnologico.jpg",
    },
  ];

  return (
    <div>
      <h2>Loja 1</h2>
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

export default Loja1;