
import Input from "@/components/ui/Input/Input";
import { Select } from "@/components/ui/Select/select";
import { TITLE } from "@/utils/formTitles";



type DocumentFormProps = {
  data: {
    documentType: "CNPJ" | "CPF"
    document: string;
    resgistrationStatus: string
    companySize: string
    rg: string;
    socialRasion: string;
    nameFantasy: string;

  };

  onChange: (newData: Partial<DocumentFormProps["data"]>) => void;
  onBlurCnpj: () => Promise<void> | undefined
};

export function DocumentForm({ data, onChange, onBlurCnpj }: DocumentFormProps) {

  const typeCompany = data.documentType === "CNPJ";



  return (
    <>
      <div className="group__fields container">
        <Select
          label="Tipo"
          requiredSelect={true}
          title={TITLE.TITLE_FIELDS_COMPANY.TYPE_COMPANY}
          heigthStyles="h-md"
          widthStyles="w-fit"
          required
          value={data.documentType}
          name="documentType"
          onChange={(e) =>
            onChange({ documentType: e.target.value as "CNPJ" | "CPF" })
          }
        >
          <option value="CNPJ">CNPJ</option>
          <option value="CPF">CPF</option>
        </Select>

        <Input
          label={typeCompany ? "CNPJ" : "CPF"}
          requiredField={true}
          title={
            typeCompany
              ? TITLE.TITLE_FIELDS_COMPANY.DOCUMENT_CNPJ
              : TITLE.TITLE_FIELDS_COMPANY.DOCUMENT_CPF
          }
          heigthStyles="h-md"
          widthStyles="w-fit"
          required
          minLength={typeCompany ? 14 : 11}
          maxLength={typeCompany ? 14 : 11}
          value={data.document}
          onBlur={typeCompany ? onBlurCnpj : undefined}
          name="document"
          onChange={(e) => onChange({ document: e.target.value })}
        />

        {typeCompany && (
          <>
            <Input
              label={"Situação cadastral"}
              title={"Situação cadastral da empresa"}
              widthStyles="w-fit"
              heigthStyles="h-md"
              readOnly
              className="realonly"
              value={data.resgistrationStatus}
              name="resgistrationStatus"
              onChange={(e) => onChange({ resgistrationStatus: e.target.value })}
            />
            <Input
              label={"Porte"}
              title={"Porte da empresa"}
              widthStyles="w-fit"
              heigthStyles="h-md"
              readOnly
              className="realonly"
              value={data.companySize}
              name="companySize"
              onChange={(e) => onChange({ companySize: e.target.value })}
            />

          </>
        )}


      </div>

      <div className="group__fields">

        {!typeCompany && (

          <Input
            label={"RG"}
            requiredField={!typeCompany}
            title={
              typeCompany
                ? TITLE.TITLE_FIELDS_COMPANY.STATE_REGISTRATION
                : TITLE.TITLE_FIELDS_COMPANY.DOCUMENT_RG
            }
            widthStyles="w-fit"
            heigthStyles="h-md"
            value={data.rg}
            name="ieORrg"
            onChange={(e) => onChange({ rg: e.target.value })}
          />
        )}


        <Input
          label={typeCompany ? "Razão Social" : "Nome Completo"}
          requiredField={true}
          title={
            typeCompany
              ? TITLE.TITLE_FIELDS_COMPANY.SOCIAL_RASION
              : TITLE.TITLE_FIELDS_COMPANY.NAME_USUÁRIO
          }
          widthStyles="w-md"
          heigthStyles="h-md"
          required
          value={data.socialRasion}
          name="socialRasion"
          onChange={(e) => onChange({ socialRasion: e.target.value })}
        />
        <Input
          label="Nome Fantasia"
          title={TITLE.TITLE_FIELDS_COMPANY.NAME_FANTASY}
          widthStyles="w-md"
          heigthStyles="h-md"
          value={data.nameFantasy}
          name="nameFantasy"
          onChange={(e) => onChange({ nameFantasy: e.target.value })}
        />
      </div>
    </>
  );
}
