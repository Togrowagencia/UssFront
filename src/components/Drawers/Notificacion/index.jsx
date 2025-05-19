import React from "react";
import { Drawer } from "antd";
import notificacionesAgrupadas from "@/components/Header/Notificacion/Data/Data";
import dayjs from "dayjs";

export const NotificacionDrawer = ({ open, onClose }) => {
  const hoy = dayjs().format("YYYY-MM-DD");
  const ayer = dayjs().subtract(1, "day").format("YYYY-MM-DD");

  return (
    <Drawer
      rootClassName="custom-drawer"
      onClose={onClose}
      open={open}
      headerStyle={{ display: "none" }}
    >
      <div className="w-full h-[5%] flex justify-between items-center">
        <div className="flex items-center gap-2">
          <h4 className="mostaza-suave">Notificaciones</h4>
        </div>
        <div>
          <img
            src="/svg/drawers/cerrar.svg"
            className="cursor-pointer"
            onClick={onClose}
          />
        </div>
      </div>
      <div className="h-[90%]">
        {Object.keys(notificacionesAgrupadas).map((fecha, index) => {
          let labelFecha = fecha;
          if (fecha === hoy) labelFecha = "Hoy";
          else if (fecha === ayer) labelFecha = "Ayer";
          return (
            <div key={index} className="my-[4%]">
              <h4 className="mostaza-suave m-[2%] ">{labelFecha}</h4>
              <div>
                {notificacionesAgrupadas[fecha].map((notificacion, idx) => (
                  <div
                    key={idx}
                    className=" border-b-1 border-[#C1C1C1] flex flex-col gap-[0.1rem] py-[1%]"
                  >
                    <p className="gris mx-[2%]">{notificacion.title}</p>
                    <p className="gris mx-[2%] textos-peques !font-[600]">
                      {notificacion.message}
                    </p>
                    <p className="gris mx-[2%] textos-peques mt-[1%]">
                      {notificacion.createdAt.slice(11, 16)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </Drawer>
  );
};

export default NotificacionDrawer;
