import styles from "./Register.module.css";

import { useState, useEffect } from "react";

function Register() {
  return (
    <div>
      <h1>Cadastre-se para postar</h1>
      <p>Crie seu usuario e compartilhe suas histórias</p>
      <form>
        <label>
          <span>Nome:</span>
          <input
            type="text"
            name="displayName"
            required
            placeholder="Nome do usuário"
          />
        </label>
        <label>
          <span>E-mail:</span>
          <input
            type="email"
            name="email"
            required
            placeholder="E-mail do usuário"
          />
        </label>
        <label>
          <span>Senha:</span>
          <input
            type="password"
            name="password"
            required
            placeholder="Insira a sua senha"
          />
        </label>
        <label>
          <span>Confirmação de Senha:</span>
          <input
            type="password"
            name="comfirmPassword"
            required
            placeholder="Confirme a sua senha"
          />
        </label>
        <button className="btn">Cadastrar</button>
      </form>
    </div>
  );
}

export default Register;