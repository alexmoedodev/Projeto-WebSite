"use client";

//📦 React
import { useEffect, useState } from "react";

// 🧩 Components
import { ButtonsFooterActions } from "../../components/ButtonsFooterAction";
import { Select } from "@/components/ui/Select/select";
import { TitlePage } from "../../components/TitlePage";
import { Button } from "@/components/ui/Button/Button";
import LayuotMain from "../../components/LayoutMain";

// Utils
import { TITLE } from "@/utils/formTitles";

// Services
import { products, ProductsProps } from "@/services/products";
import { TITLE_BUTTON } from "@/utils/buttonTitles";
import Image from "next/image";

export function FormTopSale() {
  // 👉 Produtos que já estão na tabela
  const [selectProductTable, setSelectProductTable] = useState<ProductsProps[]>(
    []
  );

  // 👉 Valor selecionado no select (id)
  const [inputSelectProdut, setInputSelectProduct] = useState("");

  // 👉 Lista filtrada (apenas produtos que podem virar topSale)
  const [filterProducts, setFilterProducts] =
    useState<ProductsProps[]>(products);

  // 🔹 Filtrar apenas produtos ativos e que não são topSale
  useEffect(() => {
    function handleFilterProductNotTopSale() {
      const notTopSale = products.filter(
        (item) => !item.topSale && item.status
      );
      if (notTopSale) {
        setFilterProducts(notTopSale);
      }
    }

    handleFilterProductNotTopSale();
  }, []);



// Selecionar o produto pelo id
  function handleSelectedProduct(id: string) {
    if (!id) {
      return;
    }
    
    const productSelected = products.find((item) => item.id === id);

    if (!productSelected) {
      alert("Produto não encontrado.");
      return;
    }
    const alreadyExists = selectProductTable.find(
      (itemId) => itemId.id === productSelected.id
    );

    if (alreadyExists) {
      alert("Esse produto já está adicionado a tabela.");
      setInputSelectProduct("")
      return;
    }
    setSelectProductTable((prev) => [...prev, productSelected]);
    setInputSelectProduct("");
  }

  return (
    <>
      <LayuotMain>
        <TitlePage label={true} titlePage="Adicionar Mais vendido" />
        <div className="group__fields">
          <Select
            label="Selecione o Produto"
            requiredSelect={true}
            title={TITLE.PRODUCT.SELECT_PRODUCT_TOP_SALE}
            heigthStyles="h-md"
            widthStyles="w-md"
            value={inputSelectProdut}
            onChange={(e) => setInputSelectProduct(e.target.value)}
          >
            <option value="">Selecione o produto </option>
            {filterProducts.map((product, index) => (
              <option key={index} value={product.id} id={product.id}>
                [{product.code}] - {product.name}
              </option>
            ))}
          </Select>

          <Button
            variant="violet"
            onClick={() => handleSelectedProduct(inputSelectProdut)}
          >
            Adicionar
          </Button>
        </div>

        <form action="">
          <hr style={{ margin: "20px auto" }} />
          <table>
            <thead>
              <tr>
                <th>Remover</th>
                <th>#</th>
                <th>Foto</th>
                <th>Produto</th>
                <th>Avaliações</th>
                <th>Data do Cadastro</th>
              </tr>
            </thead>
            <tbody>
              {selectProductTable.map((item, index) => (
                <tr key={index}>
                  <td data-label="Ações">
                    <span className="btns__actions__table">
                      <Button
                        variant="delete"
                        icon={true}
                        title={TITLE_BUTTON.DELETE(item.name)}
                      />
                    </span>
                  </td>
                  <td data-label="#">{item.code}</td>
                  <td data-label="Foto">
                    <Image
                      src={item.img}
                      alt={item.name}
                      width={40}
                      height={40}
                    />
                  </td>
                  <td data-label="Produto">{item.name}</td>
                  <td data-label="Avaliações">{item.stars}</td>
                  <td data-label="Data do Cadastro">
                    {new Date().toLocaleString("pt-BR", {
                      dateStyle: "short",
                      timeStyle: "short",
                    })}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <ButtonsFooterActions
            titleButtonSave="novo produto a lista de mais vendidos"
            titleButtonLinkCancel="e voltar"
            href="/mais-vendidos"
          />
        </form>
      </LayuotMain>
    </>
  );
}
