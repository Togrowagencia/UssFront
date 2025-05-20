import { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { disconnectSocket } from '@/settings/socket.js';
import useAuth from '@/lib/hooks/useAuth';
/*Routes*/
import Login from '@/pages/login';
import Usuarios  from '@/pages/Usuarios';
import Dashboard from '@/pages/Dashboard';
import Seleccion from '@/pages/Seleccion';
import Empresas from '@/pages/Empresas';
import EstudiosSeguridad from '@/pages/EstudiosSeguridad';
import GestionAdversos from '@/pages/GestionAdversos';
import GestionPoligrafia from '@/pages/GestionPoligrafia';
import GestionVisitas from '@/pages/GestionVisitas';
import Envio from '@/pages/Envio';
import Restablecer from '@/pages/Restablecer';
/*End::Routes*/

/*Routes Protection*/
const ProtectedRoute = ({ children }) => {
  const auth = useAuth();

  if (auth === null) return <Navigate to="/" />;
  return children;
};
/*End::Routes Protection*/

function App() {
  const location = useLocation();
  const auth = useAuth();

  useEffect(() => {
    if (!auth) return;

    const handleDisconnect = () => {
      disconnectSocket();
    };

    window.addEventListener('beforeunload', handleDisconnect);

    return () => {
      window.removeEventListener('beforeunload', handleDisconnect);
      handleDisconnect();
    };
  }, [auth, location.pathname]);

  return (
    <>
      <Routes>

        <Route path="/" element={<Login />} />
        <Route path="/envio" element={<Envio />} />
        <Route path="/restablecer" element={<Restablecer />} />
        <Route path="/usuarios" element={<Usuarios />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/seleccion" element={<Seleccion />} />
        <Route path="/empresas" element={<Empresas />} />
        <Route path="/estudios-seguridad" element={<EstudiosSeguridad />} />
        <Route path="/gestion-adversos" element={<GestionAdversos />} />
        <Route path="/gestion-poligrafia" element={<GestionPoligrafia />} />
        <Route path="/gestion-visitas" element={<GestionVisitas />} />

        /**404 */
        <Route path="*" element={<Navigate to="/" />} />

      </Routes>
    </>
  )
}

export default App
