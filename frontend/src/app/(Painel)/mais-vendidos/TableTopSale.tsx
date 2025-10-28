"use client";

// 📦 React
import { redirect } from "next/navigation";

// 🧩Components
import { RecordsCouts } from "../components/RecordsCount";
import { Button } from "@/components/ui/Button/Button";
import { Select } from "@/components/ui/Select/select";
import { TitlePage } from "../components/TitlePage";
import LayuotMain from "../components/LayoutMain";
import Input from "@/components/ui/Input/Input";

//Utils
import { TITLE_BUTTON } from "@/utils/buttonTitles";
import { TITLE } from "@/utils/formTitles";

// ⚙ Services
import { products, ProductsProps } from "@/services/products";
import { useEffect, useState } from "react";
import Image from "next/image";
import { StatusTable } from "@/components/ui/StatusTable";

export function TableTopSaleComponent() {
  const [filterProductTopSale, setFilterProductTopSale] =
    useState<ProductsProps[]>(products);
  // Responsablie to list all product topSale
  useEffect(() => {
    function handleFilterProductTopSale() {
      const topSale = products.filter((item) => item.topSale);

      if (topSale) {
        setFilterProductTopSale(topSale);
      }
    }
    handleFilterProductTopSale();
  }, []);

  // Redirect if press button add more one product
  function handleNewProductTopSale() {
    redirect("/mais-vendidos/adicionar-novo");
  }

  return (
    <>
      <LayuotMain>
        <TitlePage label={false} titlePage="Mais vendidos" />

        <Button
          variant="new"
          icon={true}
          title={TITLE_BUTTON.NEW_O("produto mais vendido")}
          onClick={handleNewProductTopSale}
        >
          Adicionar produto
        </Button>

        <div className="group__fields">
          <Input
            label="Pequisar"
            title={TITLE.OTHERS.SEARCH("produto", 2)}
            heigthStyles="h-md"
            widthStyles="w-md"
          />

          <Select
            label="Ativo"
            title={TITLE.OTHERS.FILTER_STATUS(
              "produto da lista dos mais vendidos"
            )}
            heigthStyles="h-md"
            widthStyles="w-sm"
          >
            <option value="">Todos</option>
            <option value="">Ativo</option>
            <option value="">Inativo</option>
          </Select>
        </div>

        <RecordsCouts
          totalRecords={filterProductTopSale.length}
          totalFiltereds={filterProductTopSale.length}
        />

        <table>
          <thead>
            <tr>
              <th>Ações</th>
              <th>#</th>
              <th>Foto</th>
              <th>Produto</th>
              <th>Ativo</th>
              <th>Data do Cadastro</th>
            </tr>
          </thead>

          <tbody>
            {filterProductTopSale &&
              filterProductTopSale.map((product, index) => (
                <tr key={index}>
                  <td data-label="">
                    <span className="btns__actions__table">
                      <Button
                        variant="edit"
                        icon={true}
                        title={TITLE_BUTTON.EDIT(`produto ${product.name}`)}
                      />
                      <Button
                        variant="delete"
                        icon={true}
                        title={TITLE_BUTTON.DELETE(`produto ${product.name}`)}
                      />
                    </span>
                  </td>
                  <td data-label="">{product.code}</td>
                  <td data-label="">
                    <Image
                      src={product.img}
                      alt={product.name}
                      width={40}
                      height={40}
                    />
                  </td>
                  <td data-label="">{product.name}</td>
                  <td data-label="">
                    <StatusTable icon={product.status} />
                  </td>
                  <td data-label="">{new Date().toLocaleString("pt-BR" , {
                    dateStyle:"short",
                    timeStyle:"short"
                  })}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </LayuotMain>
    </>
  );
}
