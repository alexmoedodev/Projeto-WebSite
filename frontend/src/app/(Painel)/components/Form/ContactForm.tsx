import Input from "@/components/ui/Input/Input";
import { TITLE } from "@/utils/formTitles";

type ContactFormProps = {
  data: {
    phone: string;
    phone2: string;
    email: string;
    site: string;
    whatsApp: string;
    instagran: string;
    facebook: string;
  };

  onChange: (newData: Partial<ContactFormProps["data"]>) => void;
};

export function ContactForm({ data, onChange }: ContactFormProps) {
  return (
    <>
      <div className="group__fields">
        <Input
          label="Telefone"
          title={TITLE.TITLE_FIELDS_CONTACT.PHONE}
          heigthStyles="h-md"
          widthStyles="w-fit"
          value={data.phone}
          onChange={(e) => onChange({ phone: e.target.value })}
        />
        <Input
          label="Telefone 2"
         title={TITLE.TITLE_FIELDS_CONTACT.PHONE}
          heigthStyles="h-md"
          widthStyles="w-fit"
          value={data.phone2}
          onChange={(e) => onChange({ phone2: e.target.value })}
        />
        <Input
          label="E-mail"
          title={TITLE.TITLE_FIELDS_CONTACT.EMAIL}
          heigthStyles="h-md"
          widthStyles="w-md"
          value={data.email}
          onChange={(e) => onChange({ email: e.target.value })}
        />
      </div>

      <div className="group__fields">
        <Input
          label="Site"
          title={TITLE.TITLE_FIELDS_CONTACT.SITE}
          heigthStyles="h-md"
          widthStyles="w-fit"
          value={data.site}
          onChange={(e) => onChange({ site: e.target.value })}
        />
        <Input
          label="WhatsApp"
          title={TITLE.TITLE_FIELDS_CONTACT.WHATSAPP}
          heigthStyles="h-md"
          widthStyles="w-fit"
          value={data.whatsApp}
          onChange={(e) => onChange({ whatsApp: e.target.value })}
        />
        <Input
          label="Instagran"
          title={TITLE.TITLE_FIELDS_CONTACT.INSTAGRAN}
          heigthStyles="h-md"
          widthStyles="w-fit"
          value={data.instagran}
          onChange={(e) => onChange({ instagran: e.target.value })}
        />
        <Input
          label="Facebook"
          title={TITLE.TITLE_FIELDS_CONTACT.FACEBOOK}
          heigthStyles="h-md"
          widthStyles="w-fit"
          value={data.facebook}
          onChange={(e) => onChange({ facebook: e.target.value })}
        />
      </div>
    </>
  );
}
