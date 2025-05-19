import React, { useState } from "react";
import { NotificacionDrawer } from "@/components/Drawers/Notificacion";

export const Notificacion = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <img
        src="/svg/header/notificacion.svg"
        className="cursor-pointer"
        onClick={showDrawer}
      />
      <NotificacionDrawer open={open} onClose={onClose} />
    </>
  );
};

export default Notificacion;
