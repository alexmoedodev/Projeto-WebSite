"use client";

// 📦 React
import { redirect } from "next/navigation";

// 🧩Componentes
import { StatusTable } from "@/components/ui/StatusTable";
import { RecordsCouts } from "../components/RecordsCount";
import { Button } from "@/components/ui/Button/Button";
import { Select } from "@/components/ui/Select/select";
import { TitlePage } from "../components/TitlePage";
import LayuotMain from "../components/LayoutMain";
import Input from "@/components/ui/Input/Input";

// ⚙ Services
import { WhyChooseService } from "@/services/whyChoose";
import { TITLE_BUTTON } from "@/utils/buttonTitles";
import { TITLE } from "@/utils/formTitles";

export function TableSectionWhyChooseComponents() {
  function handleCreateWhyChoose() {
    redirect("/sessao-why-choose/novo-card");
  }

  return (
    <>
      <LayuotMain>
        <TitlePage label={false} titlePage="Cards - porque nos escolher" />

        <Button
          title={TITLE_BUTTON.NEW_O("card")}
          variant="new"
          icon={true}
          onClick={handleCreateWhyChoose}
        >
          Novo Card
        </Button>

        <div className="group__fields">
          <Input
            label="Pesquisar"
            title={TITLE.OTHERS.SEARCH("card" , 2)}
            heigthStyles="h-md"
            widthStyles="w-md"
          />

          <Select
            label="Ativo"
            requiredSelect={true}
            title={TITLE.OTHERS.FILTER_STATUS("cards")}
            widthStyles="w-fit"
            heigthStyles="h-md"
          >
            <option value="all">Todos</option>
            <option value="1">Ativo</option>
            <option value="0">Inativo</option>
          </Select>
        </div>

        <RecordsCouts
          totalRecords={WhyChooseService.length}
          totalFiltereds={WhyChooseService.length}
        />

        <table>
          <thead>
            <tr>
              <th>Ações</th>
              <th>#</th>
              <th>Icone</th>
              <th>Titulo</th>
              <th>Detalhes</th>
              <th>Ativo</th>
              <th>Data do cadastro</th>
            </tr>
          </thead>

          <tbody>
            {WhyChooseService &&
              WhyChooseService.map((item, index) => (
                <tr key={index}>
                  <td data-label="Ações">
                    <span className="btns__actions__table">
                      <Button
                        title={TITLE_BUTTON.EDIT(`Card ${item.name}`)}
                        variant="edit"
                        icon={true}
                      />
                      <Button
                        title={TITLE_BUTTON.DELETE(`Card ${item.name}`)}
                        variant="delete"
                        icon={true}
                      />
                    </span>
                  </td>
                  <td data-label="Codigo">{item.code}</td>
                  <td data-label="Icone">{item.icon}</td>
                  <td data-label="Titulo">{item.name}</td>
                  <td data-label="Detalhes">{item.details}</td>
                  <td data-label="Ativo">
                    <StatusTable icon={item.status} />
                  </td>
                  <td data-label="Data do cadastro">{item.createdAt}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </LayuotMain>
    </>
  );
}
