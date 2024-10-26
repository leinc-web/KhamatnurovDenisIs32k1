import React, { useState } from 'react';

function Login() {
  const [isRegistering, setIsRegistering] = useState(false);

  return (
    <div className="login-container">
      <h2>{isRegistering ? "Регистрация" : "Вход"}</h2>
      <form>
        <label>
          Email:
          <input type="email" name="email" required />
        </label>
        <label>
          Пароль:
          <input type="password" name="password" required />
        </label>
        {isRegistering && (
          <label>
            Подтвердите пароль:
            <input type="password" name="confirmPassword" required />
          </label>
        )}
        <button type="submit">{isRegistering ? "Зарегистрироваться" : "Войти"}</button>
      </form>
      <button onClick={() => setIsRegistering(!isRegistering)}>
        {isRegistering ? "Уже есть аккаунт? Войти" : "Нет аккаунта? Зарегистрироваться"}
      </button>
    </div>
  );
}

export default Login;
