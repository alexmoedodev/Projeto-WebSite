// 📦 React
import Image from "next/image";
import LogoTipo from "../../../../public/Logotipo.png";

// 🎨 Styles
import styles from "./ImageLogo.module.css";

export function ImageLogoCompany() {
  return (
    <>
      <div>
        <Image
          src={LogoTipo}
          alt="Imagem do logo tipo"
          priority
          className={styles.image__logotipo}
        />
      </div>
    </>
  );
}
