export const Login = () => {
  return (
    <div className="flex flex-row min-h-screen w-screen">
      {/* Columna 1: Imagen */}
      <div className="w-1/2 flex justify-center items-center p-6">
        <picture>
          <source srcSet="/images/Login.png" type="image/svg+xml" />
          <img
            src="/images/Login.png"
            alt="Login"
            className="max-w-full h-auto object-contain"
          />
        </picture>
      </div>

      {/* Columna 2: Formulario */}
      <div className="w-1/2 flex justify-center items-center ">
        <div className="w-full max-w-[80%] rounded-lg shadow">
          <div className="flex justify-center items-center w-full h-full">
            <picture>
              <source srcSet="/images/logo.png" type="image/svg+xml" />
              <img
                src="/images/logo.png"
                alt="Login"
                className="max-w-full h-auto object-contain "
              />
            </picture>
          </div>
          <h1 className="text-2xl font-bold mb-4 text-center">
            Bienvenido nuevamente
          </h1>
          <p className="text-center mx-[5%]">
            Ingresa a tu cuenta y continua aprovechando nuestras herramientas
            financieras para operar con éxito.
          </p>
          <form className="space-y-4">
            <div className="max-w-sm m-[4%]">
              <div className="relative">
                {/* Icono SVG a la izquierda */}
                <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none ">
                  <img src="/svg/user.svg" alt="" className="w-[60%] h-[60%]" />
                </div>

                <input
                  type="email"
                  className="peer py-2 sm:py-3 ps-[4%] pe-3 block w-full bg-transparent border-b-1 border-gray-200 text-sm focus:border-primary focus:ring-0 disabled:opacity-50 disabled:pointer-events-none dark:border-neutral-500 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:border-neutral-400"
                  placeholder="Usuario o Correo electrónico"
                />
              </div>
            </div>

            <div className="max-w-sm mt-[4%] mx-[4%]">
              <div className="relative">
                {/* Icono SVG a la izquierda */}
                <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none">
                  <img
                    src="/svg/password.svg"
                    alt=""
                    className="w-[60%] h-[60%] "
                  />
                </div>

                <input
                  type="password"
                  className="peer py-2 sm:py-3 ps-[4%] pe-3 block w-full bg-transparent border-b-1 border-gray-200 text-sm focus:border-primary focus:ring-0 disabled:opacity-50 disabled:pointer-events-none dark:border-neutral-500 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:border-neutral-400"
                  placeholder="Contraseña"
                />
              </div>
            </div>
            <div className="flex items-center justify-between ml-[4%] my-[2%]">
              {/* Check + Label */}
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  className="h-3 w-3 text-blue-600 border-gray-300 rounded  "
                />
                <span className="text-[70%] text-gray-700">
                  Recordar datos de usuario
                </span>
              </label>

              {/* Enlace de recuperación */}
              <p className="text-[70%]  text-primary hover:underline cursor-pointer">
                ¿Olvidó su contraseña?
              </p>
            </div>

            <button class="bg-primary text-white font-bold rounded-[5px] border-primary w-[96%] mx-[4%] py-[1.5%]  hover:bg-primary/85 transition duration-300 ease-in-out">
              Ingresar
            </button>
          </form>

          <div className="fixed bottom-[1%] w-[40%] flex justify-between ">
            <p className="text-[70%] text-gray-600 ml-[4%]">Términos y condiciones</p>
            <p className="text-[70%] text-blue-600 hover:underline cursor-pointer">
              Contáctanos
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
