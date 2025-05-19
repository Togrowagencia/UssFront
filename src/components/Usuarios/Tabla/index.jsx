import React from 'react';
import { usuariosData } from './Data';

const Tabla = () => {
  return (
    <div className="w-full flex justify-center items-center my-[1.7%]">
      <table className=" w-full border-collapse ">
        <thead className="text-left ">
          <tr className="">
                <th>Foto</th>
                <th>Nombre</th>
                <th>Usuario</th>
                <th>Correo</th>
                <th>Rol</th>
                <th>Editar/Eliminar</th>
            </tr>
        </thead>
        <tbody> 
          {usuariosData.map((usuario, index) => (
            <tr key={usuario.id} className={index % 2 === 0 ? "bg-[#333]" : ""}>
              <td className={index % 2 === 0 ? "py-2 pr-2 pl-5 textos blanco" : "py-6 pr-2 pl-5 textos blanco"}>
                <img 
                  src="/svg/usuarios/foto.svg"
                  alt={usuario.nombre}
                  className="w-10 h-10 rounded-full object-cover"
                />
              </td>
              <td className={index % 2 === 0 ? "py-2 pr-2 pl-5 textos blanco" : "py-6 pr-2 pl-5 textos blanco"}>{usuario.nombre}</td>
              <td className={index % 2 === 0 ? "py-2 pr-2 pl-5 textos blanco" : "py-6 pr-2 pl-5 textos blanco"}>{usuario.usuario}</td>
              <td className={index % 2 === 0 ? "py-2 pr-2 pl-5 textos blanco" : "py-6 pr-2 pl-5 textos blanco"}>{usuario.correo}</td>
              <td className={index % 2 === 0 ? "py-2 pr-2 pl-5 textos blanco" : "py-6 pr-2 pl-5 textos blanco"}>{usuario.rol}</td>
              <td className="flex gap-4 justify-center items-center">
                <button> <img src="/svg/usuarios/editar.svg" alt="Editar" className="w-4 h-4 cursor-pointer" /> </button>
                <button> <img src="/svg/usuarios/eliminar.svg" alt="Eliminar" className="w-4 h-4 cursor-pointer" /> </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Tabla;