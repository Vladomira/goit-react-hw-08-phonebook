import { toast } from "react-toastify";

export const isPasswordError = (value, setError, error) => {
  if (value.length > 7) setError(false);
  else if (value.length < 7) {
    setError(true);
    error && toast.error("Please type minimum 7 characters");
  }
};
