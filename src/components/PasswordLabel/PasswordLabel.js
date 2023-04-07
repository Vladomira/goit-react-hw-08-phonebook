export function PasswordLabel({ passwordError }) {
  return (
    <p
      className={`${
        passwordError ? "form__password--error" : "form__password--normal"
      }`}
    >
      Please type minimum 7 characters (letters and numbers)
    </p>
  );
}
