import { FormLogin } from "./FormLogin";

export const metadata = {
  title: "Login - Bem vindo",
  subdscription: "Preencha suas credenciais e realize o login.",
};

export default function Login() {
  return (
    <>
      <FormLogin />
    </>
  );
}
