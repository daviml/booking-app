import React from 'react'
import Logo from "../../img/Logo.png";

export default function RecoverPassword() {
  return (
    <div>

      <img id="icone" src={Logo} alt='Logo' width="80%" />
      <img id="logo" src={Logo} alt='Logo' width="80%" />

      <div className="login-form">
        <form>
          <p id="ou">Para iniciar o processo de redefinição de senha:</p>
          <p id="ou">Digite seu E-Mail e confime logo após</p>
            <div>
            <input  placeholder="E-mail" type="password" id="inputPassword" name="password"/>
          </div>

          <div>
            <input  placeholder="Confirme o E-mail" type="email" id="inputEmail" name="email"/>
          </div>

          <button id="login" type="submit">Enviar</button>
        </form>

      </div>

    </div>

  )
}