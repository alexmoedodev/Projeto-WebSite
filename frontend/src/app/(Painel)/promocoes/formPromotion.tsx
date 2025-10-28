"use client";

// 📦 React
import Image from "next/image";
// 🧩 Componentes
import { Select } from "@/components/ui/Select/select";
import { Button } from "@/components/ui/Button/Button";
import { TitlePage } from "../components/TitlePage";
import LayuotMain from "../components/LayoutMain";
import Input from "@/components/ui/Input/Input";

// utils
import { TITLE_BUTTON } from "@/utils/buttonTitles";
import { TITLE } from "@/utils/formTitles";

// ⚙ Services
import { products, ProductsProps } from "@/services/products";
import { StatusTable } from "@/components/ui/StatusTable";
import { useEffect, useState } from "react";
import { redirect } from "next/navigation";

export function TablePromotion() {
  const [filterProduct, setFilterProduct] = useState<ProductsProps[]>(products);

  useEffect(() => {
    function handleFilterProduct() {
      const off = products.filter((item) => item.off);
      if (off) {
        setFilterProduct(off);
      }
    }
    handleFilterProduct();
  }, []);


  function handleCreatePromotion(){
    redirect("/promocoes/novo")
  }

  return (
    <>
      <LayuotMain>
        <TitlePage label={false} titlePage="Promoções" />

        <Button
          variant="new"
          icon={true}
          title={TITLE_BUTTON.NEW_A("promoção")}
          onClick={handleCreatePromotion}

        >
          Nova Promoção
        </Button>
        <div className="group__fields">
          <Input
            label="Pesquisar"
            title={TITLE.OTHERS.SEARCH("promoção", 2)}
            heigthStyles="h-md"
            widthStyles="w-md"
          />

          <Select
            label="Ativo"
            title={TITLE.OTHERS.FILTER_STATUS("promoções")}
            heigthStyles="h-md"
            widthStyles="w-fit"
          >
            <option value="all">Todos</option>
            <option value="1">Ativo</option>
            <option value="0">Inativo</option>
          </Select>
        </div>

        <table>
          <thead>
            <tr>
              <th>Ações</th>
              <th>#</th>
              <th>Foto</th>
              <th>Produto</th>
              <th>Desconto</th>
              <th>Ativo</th>
              <th>Data da Criação</th>
            </tr>
          </thead>
          <tbody>
            {filterProduct &&
              filterProduct.map((product, index) => (
                <tr key={index}>
                  <td data-label="Ações">
                    <span className="btns__actions__table">
                      <Button
                        variant="edit"
                        icon={true}
                        title={TITLE_BUTTON.EDIT(`promoção do produto ${product.name}`)}
                      />
                      <Button
                        variant="delete"
                        icon={true}
                        title={TITLE_BUTTON.DELETE(`promoção ${product.name}`)}
                      />
                    </span>
                  </td>
                  <td data-label="#">{product.code}</td>
                  <td data-label="Foto">
                    <Image
                      src={product.img}
                      alt={product.name}
                      width={40}
                      height={50}
                    />
                  </td>
                  <td data-label="Produto">{product.name}</td>
                  <td data-label="Desconto">{product.off}</td>
                  <td data-label="Ativo">
                    {<StatusTable icon={product.status} />}
                  </td>
                  <td data-label="Data da Criação">13-10-2025 16:04</td>
                </tr>
              ))}
           
          </tbody>
        </table>
      </LayuotMain>
    </>
  );
}
