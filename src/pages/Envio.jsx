import React from "react";
import { useNavigate } from "react-router-dom";

const Envio = () => {
  const navigate = useNavigate();

  return (
    <div className="w-screen h-screen flex justify-center items-center fondo-bg">
      <div className='w-[99%] h-[97vh] rounded-[35px] bg-[url("/images/fondo-envio.png")] bg-center bg-cover bg-no-repeat flex flex-col justify-center items-center relative'>
        <div className="w-[45%] h-[50%] bg-blanco rounded-[35px] flex items-center lp:h-[38vh]">
          <div className="h-full flex flex-col justify-center items-start gap-[0%]">
            <img src="/images/logo.png" alt="Logo" className="w-[22%] px-[10%]" />
            <h3 className="gris flex text-start mb-[3%] mt-[5%] px-[10%]">
            Recupera tu contraseña
            </h3>
            <p className="textos gris-suave flex text-start px-[10%]">
            Escribe tu correo electrónico y te llegará un enlace para que recuperes tu acceso a la plataforma
            </p>

            <form className="w-[75%] h-[20%] flex flex-col justify-center items-center px-[10%] my-[4%]">
              <div className="flex w-full mt-[2%] border-b py-[1.5%] gap-[1%]">
                <img
                  src="/svg/correo.svg"
                  alt=""
                  className="mx-[2%] w-[7%]"
                />
                <input
                  type="email"
                  className="inputs-login h4 blanco"
                  placeholder="Correo electrónico"
                />
              </div>

              <button
                onClick={() => {
                  navigate("/restablecer");
                }}
                type="submit"
                className="w-full text-center bg-mostaza-suave textos blanco my-[4%] py-[3%] rounded-[5px] hover:bg-[#d66a00] transition-colors cursor-pointer duration-300"
              >
                <h4 className="blanco">
                Recuperar contraseña
                </h4>
              </button>
            </form>
          </div>

          <div className="w-[45%] h-[50%] rounded-[35px] flex-col flex items-center lp:h-[38vh]">
            <div className="h-[80%] flex flex-col justify-center items-center gap-5 relative">
              <img src="/images/imagen-envio.png" alt="Logo" className="absolute bottom-0" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Envio;
