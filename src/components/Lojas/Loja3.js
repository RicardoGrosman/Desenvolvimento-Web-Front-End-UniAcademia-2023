import React from "react";

function Loja3() {
  const produtos = [
    {
      id: 1,
      nome: "Carro Elétrico Futurista",
      imagem: "/img/carro_eletrico_futurista.jpg",
    },
    {
      id: 2,
      nome: "Câmera Veicular Inteligente",
      imagem: "/img/camera_veicular_inteligente.jpg",
    },
    {
      id: 3,
      nome: "Pneu Autônomo",
      imagem: "/img/pneu_autonomo.jpg",
    },
  ];

  return (
    <div>
      <h2>Loja 3</h2>
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

export default Loja3;