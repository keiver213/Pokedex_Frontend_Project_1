import { useState } from "react";
import { useNavigate } from "react-router-dom";
import pokedex_logo from "../assets/pokedex_logo.png";
import logo_pokemon from "../assets/logo_pokemon.png";
import InputField from "../components/inputField";
import Button from "../components/Button";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isValidPassword = password.length >= 6;

  const isFormValid = isValidEmail && isValidPassword;

  const handleLogin = () => {
    if (!isFormValid) return;
    navigate("/home");
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      
      <div className="absolute inset-0">
        <div className="w-full h-full bg-gray-300"></div>
        <div className="absolute inset-0 bg-red-500 clip-diagonal"></div>
      </div>
      <div className="relative z-10 flex flex-col items-center gap-5">

        <img src={logo_pokemon} className="w-[400px]" />

        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-xl p-8 w-[320px] text-white">
          
          <div className="flex justify-center mb-4">
            <img src={pokedex_logo} className="w-44" />
          </div>

          <InputField
            label="Email"
            type="email"
            placeholder="username@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={!isValidEmail && email ? "Email inválido" : ""}
          />

          <InputField
            label="Password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={!isValidPassword && password ? "Mínimo 6 caracteres" : ""}
          />

          <Button
            text="Continue"
            onClick={handleLogin}
            disabled={!isFormValid}
          />

          <p className="text-xs text-center mt-4">
            Don’t have an account yet?{" "}
            <span className="underline cursor-pointer">
              Register for free
            </span>
          </p>

        </div>
      </div>
    </div>
  );
};

export default Login;
