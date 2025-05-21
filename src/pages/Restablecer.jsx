import React, { useState } from "react";
import { Link } from "react-router-dom";
import "@/components/Restablecer/styles.css";
const Restablecer = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [conditions, setConditions] = useState({
    lengthValid: false,
    numberValid: false,
    specialValid: false,
    coincide: false,
  });

  const [activeCount, setActiveCount] = useState(0);
  const [leavingCount, setLeavingCount] = useState(0);

  const togglePassword = () => setShowPassword((prev) => !prev);

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    const lengthValid = newPassword.length >= 8;
    const numberValid = /\d/.test(newPassword);
    const specialValid = /[!@#$%^&*(),.?":{}|<>]/.test(newPassword);
    const coincide = newPassword === password2;

    setConditions((prev) => ({
      ...prev,
      lengthValid,
      numberValid,
      specialValid,
      coincide,
    }));

    const newCount =
      Number(lengthValid) + Number(numberValid) + Number(specialValid);

    if (newCount < activeCount) {
      setLeavingCount(activeCount - newCount);
      setTimeout(() => setLeavingCount(0), 400);
    }
    setActiveCount(newCount);
  };

  const handlePasswordChange2 = (e) => {
    const newPassword2 = e.target.value;
    setPassword2(newPassword2);
    const coincide = newPassword2 === password;
    setConditions((prev) => ({ ...prev, coincide }));
  };

  const getSVG = (type) =>
    type === "check" ? (
      <img src="\svg\login\correcto.svg" alt="" />
    ) : type === "error" ? (
      <img src="\svg\login\incorrecto.svg" alt="" />
    ) : null;

  const getSVGinput = (type) =>
    type === "check" ? (
      <img src="\svg\login\passv.svg" alt="" className="w-[4%]" />
    ) : type === "error" ? (
      <img src="\svg\login\pass.svg" alt="" className="w-[4%]" />
    ) : null;

  const getColor = () => {
    if (activeCount === 3) return "bg-verde verde";
    if (activeCount === 2) return "bg-mostaza-suave mostaza-suave";
    if (activeCount === 1) return "bg-rojo-suave rojo-suave";
    if (activeCount === 0) return "bg-rojo rojo";
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="w-[97%] h-[95.5vh] rounded-[35px] bg-[url('/images/fondo-restablecer.png')] bg-center bg-cover bg-no-repeat flex flex-col justify-center items-center relative">
        <div className="w-[37.6%] h-[71%] lp:h-[55vh] lpm:h-[50vh] bg-blanco rounded-[35px] flex flex-col justify-center items-center px-[3.5%] py-[2.5%]">
          <div className="flex flex-col justify-center items-center gap-[8%] w-full h-[20%]">
            <h2 className="negro text-center">Restablecer Contraseña</h2>
            <p className="textos-bold gris-suave text-center">
              Tu contraseña será enviada a tu correo una vez sea reestablecida
            </p>
          </div>

          <div className="w-full h-[90%] flex flex-col justify-center items-start gap-[4%]">
            <form className="w-full h-full flex flex-col justify-start mt-[5%] gap-[2%]">
              <h4 className="negro">Contraseña Nueva</h4>
              <div className="border-b border-b-[#B5B5B5] w-full h-[11%] pl-[10px] flex flex-row justify-between items-center">
                {conditions.lengthValid &&
                conditions.numberValid &&
                conditions.specialValid
                  ? getSVGinput("check")
                  : getSVGinput("error")}
                <input
                  type={showPassword ? "text" : "password"}
                  className="textos gris w-[85%] flex pl-[1%]"
                  name="password"
                  value={password}
                  onChange={handlePasswordChange}
                />
                <img
                  src="\svg\login\eye.svg"
                  alt=""
                  onClick={togglePassword}
                  className="cursor-pointer mx-[4%] flex justify-center items-center"
                />
              </div>

              <div className="mb-[10px] flex gap-[1.1%]">
                {/* Barras activas */}
                {[...Array(activeCount)].map((_, i) => (
                  <div
                    key={`active-${i}`}
                    className={`${getColor()} custom-confirm h-[0.6vh] rounded-full`}
                  />
                ))}

                {/* Barras salientes */}
                {[...Array(leavingCount)].map((_, i) => (
                  <div
                    key={`leaving-${i}`}
                    className={`${getColor()} custom-confirm shrink h-[0.6vh] rounded-full`}
                  />
                ))}
              </div>

              <div>
                <p
                  className={`p-reset textos salmon ${
                    conditions.lengthValid ? "valid" : "invalid"
                  }`}
                >
                  {conditions.lengthValid ? getSVG("check") : getSVG("error")} 8
                  caracteres
                </p>
                <p
                  className={`p-reset textos salmon ${
                    conditions.numberValid ? "valid" : "invalid"
                  }`}
                >
                  {conditions.numberValid ? getSVG("check") : getSVG("error")}{" "}
                  Debe contener al menos un numero
                </p>
                <p
                  className={`p-reset textos salmon ${
                    conditions.specialValid ? "valid" : "invalid"
                  }`}
                >
                  {conditions.specialValid ? getSVG("check") : getSVG("error")}{" "}
                  Debe contener al menos un caracter especial
                </p>
              </div>

              <h4 className="negro mt-[3%]">Confirma tu contraseña</h4>
              <div className="border-b border-b-[#B5B5B5] w-full h-[11%] pl-[10px] mb-[10px] flex flex-row justify-between items-center">
                {conditions.coincide
                  ? getSVGinput("check")
                  : getSVGinput("error")}
                <input
                  type={showPassword ? "text" : "password"}
                  className="textos gris w-[85%] flex pl-[1%]"
                  name="password2"
                  value={password2}
                  onChange={handlePasswordChange2}
                />
                <img
                  src="\svg\login\eye.svg"
                  alt=""
                  onClick={togglePassword}
                  className="cursor-pointer mx-[4%] flex justify-center items-center"
                />
              </div>
              <div>
                <p
                  className={`p-reset textos ${
                    conditions.coincide ? "valid" : "invalid"
                  }`}
                >
                  {conditions.coincide ? getSVG("check") : getSVG("error")} La
                  contraseña coincide
                </p>
              </div>

              <div className="flex items-center justify-start gap-[2%] w-full mt-[7%]">
                <button className="py-[2.2%] gris hover:text-[#fff] px-[8%] bg-mostaza-suave text-center textos blanco mt-5 rounded-[5px] hover:bg-[#d66a00] transition-colors duration-300 cursor-pointer">
                  <h4>Restablecer contraseña</h4>
                </button>
                <Link
                  to="/"
                  className=" py-[2%] gris hover:text-[#fff] px-[8%] border border-[#4f4f4f] text-center mt-5 rounded-[5px] hover:bg-[#4f4f4f] transition-colors duration-300 cursor-pointer"
                >
                  <h4>Cancelar</h4>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Restablecer;
