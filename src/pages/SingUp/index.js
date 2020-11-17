import React from 'react'
import Logo from "../../img/Logo.png";

export default function SignUp() {
  return (
    <div>

      <img id="icone" src={Logo} alt='Logo' width="80%" />
      <img id="logo" src={Logo} alt='Logo' width="80%" />

      <div className="login-form">
        <form>
          <div>
            <input  placeholder="Nome completo" type="email" id="inputEmail" name="email"/>
          </div>

          <div>
            <input  placeholder="E-mail" type="password" id="inputPassword" name="password"/>
          </div>

          <div>
            <input  placeholder="Senha" type="email" id="inputEmail" name="email"/>
          </div>

          <div>
            <input  placeholder="Confirme a senha" type="password" id="inputPassword" name="password"/>
          </div>

          <button id="login" type="submit">Criar conta</button>
        </form>

      </div>

    </div>

  )
}