import React, { useState } from "react";
/* Data */
import { empresas } from "./Data/Empresas";
import { ciudades } from "./Data/Ciudad";
import { estadosCiviles } from "./Data/EstadoCivil";
import { lugaresExpedicion } from "./Data/LugarExpedicion";
import { lugaresNacimiento } from "./Data/LugarNacimiento";
import { tipoVehiculo } from "./Data/TipoVehiculo";
import { tipoSangre } from "./Data/TipoSangre";
import { rh } from "./Data/RH";
/* Components */
import Select from "@/components/inputs/Selects";
import Input from "@/components/inputs/Inputs";
import FechaInput from "@/components/inputs/Fecha";

const Empresas = () => {
  const [empresaSeleccionada, setEmpresaSeleccionada] = useState("");
  const [ciudadSeleccionada, setCiudadSeleccionada] = useState("");
  const [personaAtiende, setPersonaAtiende] = useState("");
  const [parentesco, setParentesco] = useState("");
  const [nombreCompleto, setNombreCompleto] = useState("");
  const [estadoCivilSeleccionado, setEstadoCivilSeleccionado] = useState("");
  const [cedula, setCedula] = useState("");
  const [fechaExpedicion, setFechaExpedicion] = useState("");
  const [lugarExpedicionSeleccionado, setLugarExpedicionSeleccionado] =
    useState("");
  const [fechaNacimiento, setFechaNacimiento] = useState("");
  const [lugarNacimientoSeleccionado, setLugarNacimientoSeleccionado] =
    useState("");
  const [libretaMilitar, setLibretaMilitar] = useState("");
  const [claseLibretaMilitar, setClaseLibretaMilitar] = useState("");
  const [cedulaMilitar, setCedulaMilitar] = useState("");
  const [porteArmaNumero, setPorteArmaNumero] = useState("");
  const [claseArma, setClaseArma] = useState("");
  const [direccionResidencia, setDireccionResidencia] = useState("");
  const [barrio, setBarrio] = useState("");
  const [estrato, setEstrato] = useState("");
  const [zona, setZona] = useState("");
  const [telefonoContacto, setTelefonoContacto] = useState("");
  const [antecedentesProcuraduria, setAntecedentesProcuraduria] = useState("");
  const [consultaAntecedentes, setConsultaAntecedentes] = useState("");
  const [fechaExpedicionConsulta, setFechaExpedicionConsulta] = useState("");
  const [numeroPasaporte, setNumeroPasaporte] = useState("");
  const [visaNumero, setVisaNumero] = useState("");
  const [licenciaConduccion, setLicenciaConduccion] = useState("");
  const [tipoVehiculoSeleccionado, setTipoVehiculoSeleccionado] = useState("");
  const [fondoPensiones, setFondoPensiones] = useState("");
  const [eps, setEps] = useState("");
  const [tipoSangreSeleccionado, setTipoSangreSeleccionado] = useState("");
  const [rhSeleccionado, setRhSeleccionado] = useState("");

  return (
    <div className="flex flex-wrap w-[100%] gap-[2.6%] min-h-[84%]">
      {/* Primera linea */}
      <Select
        titulo="Empresas"
        placeholder="Selecciona una empresa"
        opciones={empresas}
        valorSeleccionado={empresaSeleccionada}
        onChange={setEmpresaSeleccionada}
        className="w-[22.7%]"
        required
      />
      <Select
        titulo="Ciudad"
        placeholder="Selecciona una ciudad"
        opciones={ciudades}
        valorSeleccionado={ciudadSeleccionada}
        onChange={setCiudadSeleccionada}
        className="w-[22.7%]"
        required
      />
      <Input
        titulo="Persona que atiende la visita"
        placeholder="Escribir persona que atiende la visita"
        valor={personaAtiende}
        onChange={setPersonaAtiende}
        className="w-[22.7%]"
        required
      />
      <Input
        titulo="Parentesco"
        placeholder="Escribir parentesco"
        valor={parentesco}
        onChange={setParentesco}
        className="w-[22.7%]"
        required
      />
      {/* Segunda linea */}
      <Input
        titulo="Nombre Completo"
        placeholder="Escribir nombre completo"
        valor={nombreCompleto}
        onChange={setNombreCompleto}
        className="w-[22.7%]"
        required
      />
      <Select
        titulo="Estado Civil"
        placeholder="Selecciona un estado civil"
        opciones={estadosCiviles}
        valorSeleccionado={estadoCivilSeleccionado}
        onChange={setEstadoCivilSeleccionado}
        className="w-[22.7%]"
        required
      />
      <Input
        titulo="Cédula"
        placeholder="Escribir cédula"
        valor={cedula}
        onChange={setCedula}
        className="w-[22.7%]"
        required
      />
      <FechaInput
        titulo="Fecha de Expedición"
        valor={fechaExpedicion}
        onChange={setFechaExpedicion}
        className="w-[22.7%]"
        required
      />
      {/* Tercera linea */}
      <Select
        titulo="Lugar de Expedición"
        placeholder="Selecciona un lugar de expedición"
        opciones={lugaresExpedicion}
        valorSeleccionado={lugarExpedicionSeleccionado}
        onChange={setLugarExpedicionSeleccionado}
        className="w-[22.7%]"
        required
      />
      <FechaInput
        titulo="Fecha de Nacimiento"
        valor={fechaNacimiento}
        onChange={setFechaNacimiento}
        className="w-[22.7%]"
        required
      />
      <Select
        titulo="Lugar de Nacimiento"
        placeholder="Selecciona un lugar de nacimiento"
        opciones={lugaresNacimiento}
        valorSeleccionado={lugarNacimientoSeleccionado}
        onChange={setLugarNacimientoSeleccionado}
        className="w-[22.7%]"
        required
      />
      <Input
        titulo="Nr de Libreta Militar"
        placeholder="Escribir número de libreta militar"
        valor={libretaMilitar}
        onChange={setLibretaMilitar}
        className="w-[22.7%]"
        required
      />
      {/* Cuarta linea */}
      <Input
        titulo="Clase de Libreta Militar"
        placeholder="Escribir clase de libreta militar"
        valor={claseLibretaMilitar}
        onChange={setClaseLibretaMilitar}
        className="w-[22.7%]"
        required
      />
      <Input
        titulo="Cédula Militar"
        placeholder="Escribir cédula militar"
        valor={cedulaMilitar}
        onChange={setCedulaMilitar}
        className="w-[22.7%]"
        required
      />
      <Input
        titulo="Porte de Arma Número"
        placeholder="Escribir porte de arma número"
        valor={porteArmaNumero}
        onChange={setPorteArmaNumero}
        className="w-[22.7%]"
        required
      />
      <Input
        titulo="Clase de Arma"
        placeholder="Escribir clase de arma"
        valor={claseArma}
        onChange={setClaseArma}
        className="w-[22.7%]"
        required
      />
      {/* Quinta linea */}
      <Input
        titulo="Direccion de la residencia"
        placeholder="Escribir dirección de la residencia"
        valor={direccionResidencia}
        onChange={setDireccionResidencia}
        className="w-[48%]"
        required
      />
      <Input
        titulo="Barrio"
        placeholder="Escribir barrio"
        valor={barrio}
        onChange={setBarrio}
        className="w-[14.26%]"
        required
      />
      <Input
        titulo="Estrato"
        placeholder="Escribir estrato"
        valor={estrato}
        onChange={setEstrato}
        className="w-[14.26%]"
        required
      />
      <Input
        titulo="Zona"
        placeholder="Escribir zona"
        valor={zona}
        onChange={setZona}
        className="w-[14.26%]"
        required
      />
      {/* Sexta linea */}
      <Input
        titulo="Telefono de contacto"
        placeholder="Escribir telefono de contacto"
        valor={telefonoContacto}
        onChange={setTelefonoContacto}
        className="w-[22.7%]"
        required
      />
      <Input
        titulo="Antecedentes Procuraduría"
        placeholder="Escribir antecedentes procuraduría"
        valor={antecedentesProcuraduria}
        onChange={setAntecedentesProcuraduria}
        className="w-[22.7%]"
        required
      />
      <Input
        titulo="Consulta de antecedentes"
        placeholder="Escribir consulta de antecedentes"
        valor={consultaAntecedentes}
        onChange={setConsultaAntecedentes}
        className="w-[22.7%]"
        required
      />
      <FechaInput
        titulo="Fecha de Expedición de Consulta"
        valor={fechaExpedicionConsulta}
        onChange={setFechaExpedicionConsulta}
        className="w-[22.7%]"
        required
      />
      {/* Septima linea */}
      <Input
        titulo="Numero de Pasaporte"
        placeholder="Escribir numero de pasaporte"
        valor={numeroPasaporte}
        onChange={setNumeroPasaporte}
        className="w-[22.7%]"
        required
      />
      <Input
        titulo="Visa Número"
        placeholder="Escribir visa numero"
        valor={visaNumero}
        onChange={setVisaNumero}
        className="w-[22.7%]"
        required
      />
      <Input
        titulo="Licencia de Conducción"
        placeholder="Escribir licencia de conducción"
        valor={licenciaConduccion}
        onChange={setLicenciaConduccion}
        className="w-[22.7%]"
        required
      />
      <Select
        titulo="Tipo de Vehículo"
        placeholder="Selecciona un tipo de vehículo"
        opciones={tipoVehiculo}
        valorSeleccionado={tipoVehiculoSeleccionado}
        onChange={setTipoVehiculoSeleccionado}
        className="w-[22.7%]"
        required
      />
      {/* Octava linea */}
      <Input
        titulo="Fondo de Pensiones"
        placeholder="Escribir fondo de pensiones"
        valor={fondoPensiones}
        onChange={setFondoPensiones}
        className="w-[22.7%]"
        required
      />
      <Input
        titulo="EPS"
        placeholder="Escribir EPS"
        valor={eps}
        onChange={setEps}
        className="w-[22.7%]"
        required
      />
      <Select
        titulo="Tipo de Sangre"
        placeholder="Selecciona un tipo de sangre"
        opciones={tipoSangre}
        valorSeleccionado={tipoSangreSeleccionado}
        onChange={setTipoSangreSeleccionado}
        className="w-[22.7%]"
        required
      />
      <Select
        titulo="RH"
        placeholder="Selecciona un RH"
        opciones={rh}
        valorSeleccionado={rhSeleccionado}
        onChange={setRhSeleccionado}
        className="w-[22.7%]"
        required
      />
    </div>
  );
};

export default Empresas;
