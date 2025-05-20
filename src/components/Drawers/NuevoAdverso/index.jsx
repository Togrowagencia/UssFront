import React, { useState } from "react";
import { Drawer } from "antd";

export const NuevoAdversoDrawer = ({ openAdversos, onCloseAdversos }) => {
  // Estado para la imagen
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [showOptions, setShowOptions] = useState(false);
  const [showOptions2, setShowOptions2] = useState(false);

  // Estado para los datos del formulario
  const [formData, setFormData] = useState({
    nombre: "",
    usuario: "",
    correo: "",
    contraseña: "",
    rol: "",
    estado: "",
  });

  const delitos = [
    { value: "Delito 1", label: "Delito 1" },
    { value: "Delito 2", label: "Delito 2" },
    { value: "Delito 3", label: "Delito 3" },
    { value: "Delito 4", label: "Delito 4" },
  ];

  const estados = [
    { value: "Activo", label: "Activo" },
    { value: "Inactivo", label: "Inactivo" },
  ];

  // Función para manejar la selección de archivo
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        alert("La imagen de perfil no debe exceder los 5MB");
        return;
      }
      if (!file.type.startsWith("image/")) {
        alert("El archivo debe ser una imagen");
        return;
      }
      setImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSelectRol = (rol) => {
    setFormData({
      ...formData,
      rol: rol.value,
    });
    setShowOptions(false);
  };

  const handleSelectEstado = (estado) => {
    setFormData({
      ...formData,
      estado: estado.value,
    });
    setShowOptions2(false);
  };

  const handleSubmit = () => {
    console.log("Datos del formulario:", formData);
    onCloseAdversos();
  };

  return (
    <Drawer
      rootClassName="custom-drawer"
      onClose={onCloseAdversos}
      open={openAdversos}
      headerStyle={{ display: "none" }}
    >
      <div className="w-full h-[5%] flex justify-between items-center">
        <div className="flex items-center gap-[2%] w-[90%]">
          <img src="/svg/sidebar/usuarios.svg" alt="" className="w-[2.9%]" />
          <h4 className="mostaza-suave">Crear/editar registro adverso</h4>
        </div>
        <div>
          <img
            src="/svg/drawers/cerrar.svg"
            className="cursor-pointer"
            onClick={onCloseAdversos}
          />
        </div>
      </div>

      <div className="h-[90%] flex flex-col px-[2%]">
        <div className="w-full flex items-center h-[10%] mt-3">
          <img
            src={imagePreview ? imagePreview : "/svg/drawers/logo.svg"}
            className={`rounded-full p-[3px]`}
          />

          <div className="rounded-full bg-mostaza-suave ml-[-4.5%] flex items-center justify-center w-[5%] h-[30%] mt-[-8%] cursor-pointer">
            <input
              type="file"
              id="file"
              className="hidden"
              onChange={handleFileChange}
            />
            <label htmlFor="file">
              <img
                src="/svg/drawers/camara.svg"
                className="w-[100%] h-[100%] flex items-center justify-center cursor-pointer"
              />
            </label>
          </div>

          <div className="flex flex-col ml-[10px] gap-2 justify-center w-[80%]">
            <h4 className="gris">{formData.nombre}</h4>
            <p className="textos gris-suave">{formData.usuario}</p>
          </div>
        </div>

        <div className="w-full h-[30%] flex flex-wrap items-start">

          <div className="flex border-b border-b-[#B0B0B0] w-[100%] h-[10%] items-center">
            <label htmlFor="" className="textos gris-claro w-[39%]">
              Nombre del candidato
            </label>
            <input
              type="text"
              name="nombre"
              className="textos gris w-[60%]"
              onChange={handleChange}
            />
          </div>

          <div className="flex border-b border-b-[#B0B0B0] w-[100%] h-[10%] items-center">
            <label htmlFor="" className="textos gris-claro w-[39%]">
              Cedula
            </label>
            <input
              type="text"
              name="cedula"
              className="textos gris w-[60%]"
              onChange={handleChange}
            />
          </div>

          <div className="flex border-b border-b-[#B0B0B0] w-[100%] h-[10%] items-center">
            <label htmlFor="" className="textos gris-claro w-[39%]">
              Nombre Empresa
            </label>
            <input
              type="text"
              name="empresa"
              className="textos gris w-[60%]"
              onChange={handleChange}
            />
          </div>

          <div className="flex border-b border-b-[#B0B0B0] w-[100%] h-[10%] items-center">
            <label htmlFor="" className="textos gris-claro w-[39%]">
              Calidad
            </label>
            <input
              type="text"
              name="calidad"
              className="textos gris w-[60%]"
              onChange={handleChange}
            />
          </div>

          <div className="flex border-b border-b-[#B0B0B0] w-[100%] h-[10%] items-center relative">
            <label htmlFor="" className="textos gris-claro w-[39%]">
              Delito
            </label>
            <div className="w-[60%] relative">
              <div
                className="textos gris cursor-pointer flex items-center justify-between"
                onClick={() => setShowOptions(!showOptions)}
              >
                <span>
                  {delitos.find((r) => r.value === formData.rol)?.label ||
                    null}
                </span>
                <img
                  src="/svg/drawers/flecha.svg"
                  className={`w-[2%] transition-transform duration-350 ${
                    showOptions ? "rotate-180" : ""
                  }`}
                />
              </div>
              {showOptions && (
                <div className="absolute top-full left-0 w-full bg-[#F5F5F5] sombra rounded-[10px] mt-[5%] z-10 py-[4%]">
                  {delitos.map((rol) => (
                    <div
                      key={rol.value}
                      className="textos gris px-[4%] cursor-pointer"
                      onClick={() => handleSelectRol(rol)}
                    >
                      <h4 className="gris hover:text-[#fff] hover:bg-[#d66a00] rounded-[5px] px-[6%] py-[4%]">
                        {rol.label}
                      </h4>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="flex border-b border-b-[#B0B0B0] w-[100%] h-[10%] items-center relative">
            <label htmlFor="" className="textos gris-claro w-[39%]">
              Estado
            </label>
            <div className="w-[60%] relative">
              <div
                className="textos gris cursor-pointer flex items-center justify-between"
                onClick={() => setShowOptions2(!showOptions2)}
              >
                <span className={`px-[4%] py-[2%] mb-[3%] rounded-[5px] ${formData.estado === "Activo" ? "bg-verde blanco" : formData.estado === "Inactivo" ? "bg-rojo blanco" : ""}`}>
                  {estados.find((r) => r.value === formData.estado)?.label}
                </span>
                <img
                  src="/svg/drawers/flecha.svg"
                  className={`w-[2%] transition-transform duration-350 ${
                    showOptions2 ? "rotate-180" : ""
                  }`}
                />
              </div>
              {showOptions2 && (
                <div className="absolute top-full left-0 w-full bg-[#F5F5F5] sombra rounded-[10px] mt-[5%] z-10 py-[4%]">
                  {estados.map((rol) => (
                    <div
                      key={rol.value}
                      className="textos gris px-[4%] cursor-pointer"
                      onClick={() => handleSelectEstado(rol)}
                    >
                      <h4 className="gris hover:text-[#fff] hover:bg-[#d66a00] rounded-[5px] px-[6%] py-[4%]">
                        {rol.label}
                      </h4>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="w-full absolute flex justify-end bottom-[5%] right-[5%] gap-[3%]">
            <button
              className="flex items-center textos blanco bg-mostaza-suave rounded-[5px] px-[3%] py-[1.5%] cursor-pointer"
              onClick={handleSubmit}
            >
              Confirmar
            </button>
            <button
              className="flex items-center textos blanco bg-gris rounded-[5px] px-[3%] py-[1.5%] cursor-pointer"
              onClick={onCloseAdversos}
            >
              Cancelar
            </button>
          </div>
        </div>
      </div>
    </Drawer>
  );
};

export default NuevoAdversoDrawer;
