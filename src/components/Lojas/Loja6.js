import React from "react";

function Loja6() {
  const produtos = [
    {
      id: 1,
      nome: "Sistema de Energia Solar",
      imagem: "/img/sistema_energia_solar.jpg",
    },
    {
      id: 2,
      nome: "Estação de Reciclagem Inteligente",
      imagem: "/img/estacao_reciclagem_inteligente.jpg",
    },
    {
      id: 3,
      nome: "Bicicleta Elétrica",
      imagem: "/img/bicicleta_eletrica.jpg",
    },
  ];

  return (
    <div>
      <h2>Loja 6</h2>
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

export default Loja6;