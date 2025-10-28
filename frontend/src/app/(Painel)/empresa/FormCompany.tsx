"use client";

//📦 React
import {  useState } from "react";

// 🧩 Componentes
import { ButtonsFooterActions } from "../components/ButtonsFooterAction";
import { DocumentForm } from "../components/Form/DocumentForm";
import { AddressForm } from "../components/Form/AddressForm";
import { ContactForm } from "../components/Form/ContactForm";
import { TitlePage } from "../components/TitlePage";
import LayuotMain from "../components/LayoutMain";


// Utils
import { apiCnpj } from "@/services/apiCnpj";
import { fetchCep } from "@/utils/fetchCep";


type DocumentFormData = {
  documentType: "CPF" | "CNPJ"
  document: string;
  resgistrationStatus: string
  companySize: string
  rg: string;
  socialRasion: string;
  nameFantasy: string;

};

type AddressFormData = {
  cep: string;
  address: string;
  number: string;
  complement: string;
  neighborhood: string;
  city: string;
  uf: string;
};

type ContactFormData = {
  phone: string;
  phone2: string;
  email: string;
  site: string;
  whatsApp: string;
  instagran: string;
  facebook: string;
};

type FormData = {
  document: DocumentFormData;
  address: AddressFormData;
  contact: ContactFormData;
};

export function FormCompany() {
  const [formData, setFormData] = useState<FormData>({
    document: {
      documentType: "CNPJ",
      document: "",
      resgistrationStatus: "",
      companySize: "",
      rg: "",
      socialRasion: "",
      nameFantasy: "",
    },

    address: {
      cep: "",
      address: "",
      number: "",
      complement: "",
      neighborhood: "",
      city: "",
      uf: "",
    },

    contact: {
      phone: "",
      phone2: "",
      email: "",
      site: "",
      whatsApp: "",
      instagran: "",
      facebook: "",
    },
  });


  async function handleDocumentCompany() {
    const cnpj = formData.document.document
    if (!cnpj) {
      alert("Opss!, não foi digitado nenhum valor no campo CNPJ para realizar a busca. Para realizar a busca automatica dos dados por favor preencha os 14 digitos do CNPJ")
      return
    }

    const response = await fetch(`${apiCnpj}${cnpj}`)
    const data = await response.json()

    if (data.message) {
      alert(data.message)
    }
    setFormData((prev) => ({
      ...prev, // mantém todo o resto do formulário igual
      document: {
        ...prev.document,// mantém os outros campos de documento
        socialRasion: data.razao_social || "",
        nameFantasy: data.nome_fantasia || "",
        resgistrationStatus: data.descricao_situacao_cadastral || "",
        companySize: data.porte || "",

      },

      address: {
        ...prev.address,
        cep: data.cep || "",
        address: data.logradouro || "",
        number: data.numero || "",
        neighborhood: data.bairro || "",
        city: data.municipio || "",
        complement: data.complemento || "",
        uf: data.uf || ""
      },

      contact: {
        ...prev.contact,
        email: data.email || "",
        phone: data.ddd_telefone_1 || "",
        phone2: data.ddd_telefne_2 || "",

      }
    }))

  }



  async function handleCep() {
    const cep = formData.address.cep
    const data = await fetchCep(cep)
    console.log(cep)
    console.log(data)

    if(!data){
      alert("CEP inválido ou não encontrado.")
      return
    }

    setFormData((prev) => ({
      ...prev,
      address: {
        ...prev.address,
        ...data
      }

    }))

  }




  return (
    <>
      <LayuotMain>
        <TitlePage titlePage="EMPRESA" label={true} />
        <form action={"/"}>
          <DocumentForm
            data={formData.document}
            onChange={(newData) => {
              if (newData.documentType && newData.documentType !== formData.document.documentType) {
                console.log(formData.document.documentType)
                // tipo mudou -> limpar campos
                setFormData((prev) => ({
                  ...prev,
                  document: {
                    documentType: newData.documentType || "CNPJ", // force to not be undefine
                    document: "",
                    resgistrationStatus: "",
                    companySize: "",
                    rg: "",
                    socialRasion: "",
                    nameFantasy: "",
                  },
                  address: {
                    cep: "",
                    address: "",
                    number: "",
                    complement: "",
                    neighborhood: "",
                    city: "",
                    uf: "",
                  },

                  contact: {
                    phone: "",
                    phone2: "",
                    email: "",
                    site: "",
                    whatsApp: "",
                    instagran: "",
                    facebook: "",
                  },
                }));
              } else {
                // apenas atualiza o que mudou
                setFormData((prev) => ({
                  ...prev,
                  document: { ...prev.document, ...newData },
                }));
              }
            }}
            onBlurCnpj={handleDocumentCompany}
          />

          <AddressForm
            data={formData.address}
            onChange={(newData) => {



              setFormData((prev) => ({
                ...prev,
                address: { ...prev.address, ...newData },
              }))
            }
            }

            onBlurSearchCep={handleCep}
          />
          <ContactForm
            data={formData.contact}
            onChange={(newData) => {
              setFormData((prev) => ({
                ...prev,
                contact: { ...prev.contact, ...newData },
              }))
            }
            }
          />

          <ButtonsFooterActions
            titleButtonSave="Empresa"
            titleButtonLinkCancel="e voltar"
            href="/dashboard"
          />
        </form>
      </LayuotMain>
    </>
  );
}
