"use client";
//📦 React
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

//🧩 Components
import { Button } from "@/components/ui/Button/Button";
import Input from "@/components/ui/Input/Input";

//🎨 Styles
import styles from "../styles.module.css";
import ImageLoginBg from "../../../../public/newsletter.png";
import LogoTipo from "../../../../public/Logotipo.png";
import { TITLE } from "@/utils/formTitles";
import { TITLE_BUTTON } from "@/utils/buttonTitles";

//📋 typagem
type FormLoginProps = {
  email: string;
};

export function FormForgotPassword() {
  const [user, setUser] = useState<FormLoginProps>({
    email: "",
  });

  return (
    <>
      <div className={styles.login__container}>
        <div className={styles.login__card}>
          <div className={styles.login__image__bg}>
            <Image
              src={ImageLoginBg}
              alt="Imagem de background do card"
              priority
            />
          </div>

          <form action="" className={styles.form__login}>
            <div className={styles.content__form}>
              <div className={styles.title__form}>
                <Image
                  src={LogoTipo}
                  alt="Logo tipo da empresa desenvolvedora do sistema"
                  priority
                />
                <p>
                  Informe o e-mail cadastrado no sistema. Ao clicar em{" "}
                  <strong>Redefinir</strong>, uma nova senha será enviada para
                  esse endereço.
                </p>
                <p>
                  <strong>Atenção:</strong> use o mesmo e-mail registrado no
                  sistema.
                </p>
              </div>
              <div className={styles.input__form}>
                <Input
                  widthStyles="w-full"
                  heigthStyles="h-md"
                  title={TITLE.TITLE_FIELDS_USER.USER_EMAIL}
                  placeholder="email@email.com"
                  required
                  type="email"
                  name="email"
                  value={user.email}
                  onChange={(e) =>
                    setUser((prev) => ({ ...prev, email: e.target.value }))
                  }
                />

                <Button
                  type="submit"
                  variant="violet"
                  widthStyles="w-full"
                  heigthStyles="h-md"
                  title={TITLE_BUTTON.RESET_PASSWORD}
                >
                  Redefinir Senha
                </Button>
              </div>
              <div className={styles.footer__form}>
                <label>Lembrou sua senha?</label>
                <Link href={"/login"} title="Click aqui e para fazer login.">
                  Login
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
