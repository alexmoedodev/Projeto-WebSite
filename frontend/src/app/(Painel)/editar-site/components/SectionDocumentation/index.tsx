// 📦React
import Link from "next/link";
import Image, { StaticImageData } from "next/image";

// 🎨 Styles
import styles from "./sectionDocumentation.module.css";

type SectionDocumentationProps = {
  image: StaticImageData | string ;
  href: string;
};

export function SectionDocumentation({
  image,
  href,
}: SectionDocumentationProps) {
  return (
    <>
      <div className={styles.container__documentation}>
        <div className={styles.container__image}>
          <Image src={image} alt="Imagem ilustrativa da seção do site." />
        </div>
        <Link
         title= "Click aqui! Você será redirecionado para editar essa seção so seu site."
         href={href}>Editar seção do site.</Link>
        
        
      </div>
    </>
  );
}
