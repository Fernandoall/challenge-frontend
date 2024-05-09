import React from "react";
import { useQuery } from "react-query";
import Skeleton from "react-loading-skeleton";

const ShopPage: React.FC = () => {
  const { isLoading, error, data } = useQuery("products", fetchProducts);

  if (isLoading) {
    // Retorna o skeleton enquanto os dados estão sendo carregados
    return (
      <div>
        <Skeleton height={50} width={300} />
        <Skeleton height={50} width={300} />
        <Skeleton height={50} width={300} />
      </div>
    );
  }

  if (error) return <div>Erro ao carregar os produtos..</div>;

  return (
    <div>
      <h1>Loja</h1>
      {/* Renderize os produtos aqui */}
    </div>
  );
};

async function fetchProducts() {
  const response = await fetch("URL_DA_API_DE_PRODUTOS");
  const data = await response.json();
  return data;
}

export default ShopPage;
