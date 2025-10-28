"use client";
// 📦React
import { useParams } from "next/navigation";

// 🧩 Componentes
import { TitlePage } from "../../components/TitlePage";
import { Select } from "@/components/ui/Select/select";
import LayuotMain from "../../components/LayoutMain";
import Input from "@/components/ui/Input/Input";

// utils
import { TITLE } from "@/utils/formTitles";

//⚙ Services
import { products, ProductsProps } from "@/services/products";
import { useEffect, useState } from "react";
import { ButtonsFooterActions } from "../../components/ButtonsFooterAction";

export function FormPromotion() {
  const { id } = useParams();
  const isCreating = id === "novo";

  const [selectProduct, setSelectProduct] = useState<ProductsProps[]>(products);

  useEffect(() => {
    function handleProductActive() {
      const isActive = products.filter((item) => item.status);
      if (isActive) {
        setSelectProduct(isActive);
      }
    }
    handleProductActive();
  }, []);

  const [typeDiscont, setTypeDiscont] = useState(false);
  function handleTypeDiscont() {
    setTypeDiscont(!typeDiscont);
  }

  return (
    <>
      <LayuotMain>
        <TitlePage
          label={true}
          titlePage={isCreating ? "Nova promoção" : "Editar Promoção"}
        />

        <form action="">
          <div className="group__fields">
            <Select
              label="Selecione o Produto"
              requiredSelect={true}
              title={TITLE.PRODUCT.SELECT_PRODUCT_PROMOTION}
              heigthStyles="h-md"
              widthStyles="w-md"
              required
            >
              <option value="">Selecione o produto</option>
              {selectProduct &&
                selectProduct.map((product, index) => (
                  <>
                    <option value="" key={index}>
                      [{product.code}] - {product.name}
                    </option>
                  </>
                ))}
            </Select>

            <Select
              label="Tipo desconto"
              title={TITLE.PRODUCT.TYPE_DISCONT}
              requiredSelect={true}
              heigthStyles="h-md"
              widthStyles="w-fit"
              required
              onChange={handleTypeDiscont}
            >
              <option value="0">% - Porcentagem</option>
              <option value="1">R$ - Dinheiro</option>
            </Select>

            <Input
              label={typeDiscont ? "Dinheiro" : "Porcentagem"}
              requiredField={true}
              title={
                typeDiscont
                  ? `${TITLE.PRODUCT.VALUE_DISCONT_PRODUCT}`
                  : `${TITLE.PRODUCT.PORCENTAGEM_DISCONT_PRODUCT}`
              }
              placeholder={typeDiscont ? "R$ 0,00" : "% 0.00"}
              heigthStyles="h-md"
              widthStyles="w-fit"
              required
            />

              <Select
              label="Ativo"
              title={TITLE.OTHERS.STATUS}
              requiredSelect={true}
              heigthStyles="h-md"
              widthStyles="w-sm"
              required
            >
              <option value="1">Sim</option>
              <option value="0">Não</option>
            </Select>
          </div>
          

          <ButtonsFooterActions 
          titleButtonSave={isCreating ? "promoção" : "edição da promoção"}
          titleButtonLinkCancel="e voltar"
          href="/promocoes"        
          />
        </form>
      </LayuotMain>
    </>
  );
}
