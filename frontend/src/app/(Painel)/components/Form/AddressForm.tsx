import Input from "@/components/ui/Input/Input";
import { Select } from "@/components/ui/Select/select";
import { TITLE } from "@/utils/formTitles";

type AddressFormProps = {
  data: {
    cep: string;
    address: string;
    number: string;
    complement: string;
    neighborhood: string;
    city: string;
    uf: string;
  };

  onChange: (newData: Partial<AddressFormProps["data"]>) => void;
  onBlurSearchCep: ()=> void 

};

export function AddressForm({ data, onChange , onBlurSearchCep }: AddressFormProps) {

 

  return (
    <>
      <div className="group__fields">
        <Input
          label="Cep"
          requiredField={true}
          title={TITLE.TITLE_FIELDS_ADDRESS.CEP}
          heigthStyles="h-md"
          widthStyles="w-fit"
          required
          minLength={8}
          maxLength={8}
          onBlur={onBlurSearchCep}
          value={data.cep}
          onChange={(e) => onChange({ cep: e.target.value })}
        />
        <Input
          label="Endereço"
          requiredField={true}
          title={TITLE.TITLE_FIELDS_ADDRESS.ADDRESS}
          heigthStyles="h-md"
          widthStyles="w-lg"
          required
          value={data.address}
          onChange={(e) => onChange({ address: e.target.value })}
        />
        <Input
          label="Nº"
          requiredField={true}
          title={TITLE.TITLE_FIELDS_ADDRESS.NUMBER}
          heigthStyles="h-md"
          widthStyles="w-sm"
          required
          value={data.number}
          onChange={(e) => onChange({ number: e.target.value })}
        />
      </div>
      <div className="group__fields">
        <Input
          label="Complemento"
          title={TITLE.TITLE_FIELDS_ADDRESS.COMPLEMENT}
          heigthStyles="h-md"
          widthStyles="w-md"
          value={data.complement}
          onChange={(e) => onChange({ complement: e.target.value })}
        />
        <Input
          label="Bairro"
          requiredField={true}
          title={TITLE.TITLE_FIELDS_ADDRESS.NEIGHBORHOOD}
          heigthStyles="h-md"
          widthStyles="w-md"
          required
          value={data.neighborhood}
          onChange={(e) => onChange({ neighborhood: e.target.value })}
        />
        <Input
          label="Cidade"
          requiredField={true}
          title={TITLE.TITLE_FIELDS_ADDRESS.CITY}
          heigthStyles="h-md"
          widthStyles="w-fit"
          required
          value={data.city}
          onChange={(e) => onChange({ city: e.target.value })}
        />
        <Select
          label="UF"
          requiredSelect={true}
          title={TITLE.TITLE_FIELDS_ADDRESS.UF}
          heigthStyles="h-md"
          widthStyles="w-fit"
          required
          value={data.uf}
          onChange={(e) => onChange({ uf: e.target.value })}
        >
          <option value="">Selecione um estado</option>{" "}
          <option value="AC">Acre</option>
          <option value="AL">Alagoas</option> <option value="AP">Amapá</option>
          <option value="AM">Amazonas</option> <option value="BA">Bahia</option>
          <option value="CE">Ceará</option>{" "}
          <option value="DF">Distrito Federal</option>{" "}
          <option value="ES">Espírito Santo</option>{" "}
          <option value="GO">Goiás</option>
          <option value="MA">Maranhão</option>{" "}
          <option value="MT">Mato Grosso</option>{" "}
          <option value="MS">Mato Grosso do Sul</option>{" "}
          <option value="MG">Minas Gerais</option>{" "}
          <option value="PA">Pará</option>
          <option value="PB">Paraíba</option> <option value="PR">Paraná</option>{" "}
          <option value="PE">Pernambuco</option>{" "}
          <option value="PI">Piauí</option>{" "}
          <option value="RJ">Rio de Janeiro</option>{" "}
          <option value="RN">Rio Grande do Norte</option>{" "}
          <option value="RS">Rio Grande do Sul</option>{" "}
          <option value="RO">Rondônia</option>{" "}
          <option value="RR">Roraima</option>{" "}
          <option value="SC">Santa Catarina</option>{" "}
          <option value="SP">São Paulo</option>{" "}
          <option value="SE">Sergipe</option>{" "}
          <option value="TO">Tocantins</option>
        </Select>
      </div>
    </>
  );
}
