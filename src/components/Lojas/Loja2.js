import React from "react";

function Loja2() {
  const produtos = [
    {
      id: 1,
      nome: "Jaqueta Inteligente",
      imagem: "/img/jaqueta_inteligente.jpg",
    },
    {
      id: 2,
      nome: "Calça Tecnológica",
      imagem: "/img/calca_tecnologica.jpg",
    },
    {
      id: 3,
      nome: "Tênis Hightech",
      imagem: "/img/tenis_hightech.jpg",
    },
  ];

  return (
    <div>
      <h2>Loja 2</h2>
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

export default Loja2;