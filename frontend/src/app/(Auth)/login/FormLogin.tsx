"use client";
//📦 React
import { useActionState, useState } from "react";
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

//🧩 Components
import { Button } from "@/components/ui/Button/Button";
import Input from "@/components/ui/Input/Input";

//🎨 Styles
import styles from "../styles.module.css";
import ImageLoginBg from "../../../../public/login.png";
import LogoTipo from "../../../../public/Logotipo.png";

// Utils
import { TITLE_BUTTON } from "@/utils/buttonTitles";
import { TITLE } from "@/utils/formTitles";

// services
import { api } from "@/services/api";
import { AuthAction } from "../_action/Auth";
import { SchemaAuth } from "../schemas/SchemaAuth";

//📋 typagem
type FormLoginProps = {
  email: string;
  password: string;
  remmember: boolean;
};

export function FormLogin() {
  const [user, setUser] = useState<FormLoginProps>({
    email: "",
    password: "",
    remmember: false,
  });


  const [showLinkRegister, setShowLinkRegister] = useState(true)
  const [showLoading, setShowLoading] = useState(true)


  // Veficar se ja existe algum registro de usuário no banco
  useEffect(() => {
    async function AlreadyUserRegistrad() {
      const response = await api.get("/users")
      try {
        const data = response.data.length
        if (data >= 1) {
          setShowLinkRegister(false)
        }
        return

      } catch (error) {
        console.error("Erro ao listar usuários:", error)
      } finally {
        setShowLoading(false)
      }

    }
    AlreadyUserRegistrad()

  }, [])


  const [ auth , formDataAuth] = useActionState(AuthAction, {} )
   



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

          <form action={formDataAuth} className={styles.form__login}>
            <div className={styles.content__form}>
              <div className={styles.title__form}>
                <Image
                  src={LogoTipo}
                  alt="Logo tipo da empresa desenvolvedora do sistema"
                  priority
                  />
                <p>Preencha suas credenciais para realizar login.</p>
              </div>
              <div className={styles.input__form}>
                <Input
                  widthStyles="w-full"
                  heigthStyles="h-md"
                  title={TITLE.TITLE_FIELDS_USER.USER_NAME}
                  placeholder="email@email.com"
                  required
                  type="email"
                  name="email"
                  value={user.email}
                  onChange={(e) =>
                    setUser((prev) => ({ ...prev, email: e.target.value }))
                  }
                />
                <Input
                  widthStyles="w-full"
                  heigthStyles="h-md"
                  title={TITLE.TITLE_FIELDS_USER.USER_PASSWORD}
                  placeholder="******"
                  required
                  type="password"
                  name="password"
                  value={user.password}
                  onChange={(e) =>
                    setUser((prev) => ({ ...prev, password: e.target.value }))
                  }
                  />
                <div className={styles.remember__forgot_password}>
                  <div className={styles.remember}>
                    <input
                      type="checkbox"
                      title={TITLE.TITLE_FIELDS_USER.REMMEMBER}
                      id="remember"
                      name="remember"
                      checked={user.remmember}
                      onChange={(e) =>
                        setUser((prev) => ({
                          ...prev,
                          remmember: e.target.checked,
                        }))
                      }
                      />
                    <label
                      htmlFor="remember"
                      title={TITLE.TITLE_FIELDS_USER.REMMEMBER}
                    >
                      Lembrar-me
                    </label>
                  </div>
                  <div className={styles.forgot_password}>
                    <Link
                      href={"/redefinir-senha"}
                      title={TITLE.TITLE_FIELDS_USER.FORGOT_PASSWORD}
                      >
                      Esqueceu senha?
                    </Link>
                  </div>
                </div>
                <Button
                  type="submit"
                  variant="violet"
                  widthStyles="w-full"
                  heigthStyles="h-md"
                  title={TITLE_BUTTON.ACCESS}
                >
                  Acessar
                </Button>
              </div>

              {!showLoading && showLinkRegister && (
                <div className={styles.footer__form}>
                  <label>Não possui uma conta? </label>
                  <Link
                    href={"/registrar-se"}
                    title={TITLE.TITLE_FIELDS_USER.REGISTER}>
                    Registrar-se
                  </Link>
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
 
    </>
  );
}
