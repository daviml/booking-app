import React  from 'react';
import styles from './styles.css'
import Logo from '../../img/Logo.png'

const LoginForm = () => {}

export default function SignIn() {
  return (
    <div>

      <img id="icone" src={Logo} alt='Logo' width="80%" />
      <img id="logo" src={Logo} alt='Logo' width="80%" />

      <div className="login-form">
        <form>
            <div>
              <input  placeholder="E-mail" type="email" id="inputEmail" name="email"/>
            </div>

            <div>
              <input  placeholder="Senha" type="password" id="inputPassword" name="password"/>
            </div>

          <button id="login" type="submit">Login</button>
        </form>

        <p id="ou" >OU</p>

        <button id="cc" type="submit">Criar conta gratuita</button>

        <button id="cc" type="submit">Recuperar a minha senha</button>


      </div>

    </div>
  )
}