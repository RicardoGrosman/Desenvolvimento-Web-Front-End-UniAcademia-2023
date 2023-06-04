import React from "react";

function Loja4() {
  const produtos = [
    {
      id: 1,
      nome: "Smartphone Avançado",
      imagem: "/img/smartphone_avancado.jpg",
    },
    {
      id: 2,
      nome: "Fones de Ouvido Bluetooth",
      imagem: "/img/fones_ouvido_bluetooth.jpg",
    },
    {
      id: 3,
      nome: "Carregador sem Fio",
      imagem: "/img/carregador_sem_fio.jpg",
    },
  ];

  return (
    <div>
      <h2>Loja 4</h2>
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

export default Loja4;