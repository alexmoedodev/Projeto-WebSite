import Input from "@/components/ui/Input/Input";
import LayuotMain from "../components/LayoutMain";
import { TitlePage } from "../components/TitlePage";
import { ButtonsFooterActions } from "../components/ButtonsFooterAction";
import { TITLE } from "@/utils/formTitles";

export function FormSectionEditHero() {
  return (
    <>
      <LayuotMain>
        <form action="">
          <TitlePage titlePage="Editar sessão principal - HERO" label={true} />

          <div className="group__fields">
            <Input
              label="Nome"
              requiredField={true}
              heigthStyles="h-md"
              widthStyles="w-fit"
              maxLength={15}
              minLength={4}
              title={TITLE.OTHERS.TITLE_MIN_MAX_LENGTH("Nome" , 4 , 15)}
            />
            <Input
              label="Titulo"
               requiredField={true}
              heigthStyles="h-md"
              widthStyles="w-md"
              maxLength={36}
              minLength={4}
              title={TITLE.OTHERS.TITLE_MIN_MAX_LENGTH("Nome" , 4 , 36)}
            />
          </div>
          
          <div className="text__area">
            <label htmlFor="" className="required">Paragráfo - Max. 350 caractéries </label>
            <textarea 
            title={TITLE.OTHERS.TITLE_MIN_MAX_LENGTH("Paragrafo" , 4 , 350)}
             name="" 
             id="" 
             maxLength={350}>

            </textarea>
          </div>

          <ButtonsFooterActions 
          titleButtonSave="dados do Hero"
          titleButtonLinkCancel="e voltar"
          href="/editar-site"
          
          />
        </form>
      </LayuotMain>
    </>
  );
}
