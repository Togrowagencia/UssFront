import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full h-screen flex bg-[url('/images/fondo-login.png')] bg-cover bg-center">
      <div className="w-[98%] h-[98%] flex">
        <div className="w-[50%] h-full m-[1%]">
          <img
            src="/images/Login.png"
            className="w-full h-[95.4vh] object-[right]"
            alt="Panel izquierdo"
          />
        </div>
        <div className="w-[50%] flex flex-col justify-center items-center m-[1%]">
          <img src="/images/logo.png" className="pt-[14%] pb-[4%]" alt="Logo" />
          <div className="w-[60%]">
            <h2 className="negro my-[1%] justify-center flex">
              Bienvenido nuevamente
            </h2>
            <p className="textos-bold gris text-center justify-center my-[2%] flex w-full">
              Ingresa a tu cuenta y continúa aprovechando nuestras herramientas
              financieras para operar con éxito.
            </p>
          </div>

          <form className="w-[60%] h-[40%]">
            <div className="border-b border-[#6B6B6B] flex gap-[2%] mt-[5%] pb-[1%]">
              <img src="/svg/user.svg" alt="" className="w-[4.8%]" />
              <input
                type="text"
                placeholder="Usuario o Correo electrónico"
                className="textos-bold negro"
              />
            </div>
            <div className="border-b border-[#6B6B6B] flex gap-[2%] mt-[5%] pb-[1%]">
              <img src="/svg/password.svg" alt="" className="w-[5.2%]" />
              <input
                type="password"
                placeholder="Contraseña"
                className="textos-bold negro"
              />
            </div>

            <div className="flex justify-between w-full mt-[2%]">
              <div className="flex gap-1 items-center">
                <input
                  type="checkbox"
                  id="rememberme"
                  className="appearance-none w-[1.05rem] h-[1.05rem] rounded-[5px] border-[1px] border-[#D9D9D9] bg-transparent checked:bg-[#d66a00] checked:border-[#D9D9D9] cursor-pointer relative"
                />
                <label htmlFor="rememberme" className="textos gris">
                  Recordar datos de usuario
                </label>
              </div>
              <a
                onClick={() => {
                  navigate("/envio");
                }}
                className="textos mostaza cursor-pointer"
              >
                ¿Olvido su contraseña?
              </a>
            </div>

            <button
              onClick={() => {
                navigate("/dashboard");
              }}
              type="submit"
              className="w-full text-center bg-mostaza-suave textos blanco-suave my-[6%] py-[3%] rounded-[5px] cursor-pointer"
            >
              Ingresar
            </button>
          </form>

          <div className="w-[55%] h-full flex justify-between items-end">
            <a className="textos gris flex items-center w-[65%]">
              Términos y Condiciones
            </a>
            <a
              href=""
              className="textos gris w-[35%] flex items-center justify-end"
            >
              Contactanos
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
