import React, { useState } from "react";
import Textarea from "@/components/inputs/Texteara";
import Input from "@/components/inputs/Inputs";
import Select from "@/components/inputs/Selects";
import { tiposVivienda } from "./Data/TiposVivienda";
import { viviendaEs } from "./Data/ViviendaEs";
import Checkbox from "@/components/inputs/checkbox";

const ConceptoNro1 = () => {
  const [ciudadOrigenFamiliar, setCiudadOrigenFamiliar] = useState("");
  const [esSocioDeAlgunClubOAgremiacion, setEsSocioDeAlgunClubOAgremiacion] =
    useState("");
  const [tipoDeVivienda, setTipoDeVivienda] = useState("");
  const [otroTipoDeVivienda, setOtroTipoDeVivienda] = useState("");
  const [tipoDePropiedad, setTipoDePropiedad] = useState("");
  const [otroTipoDePropiedad, setOtroTipoDePropiedad] = useState("");
  const [tipoDeComodidades, setTipoDeComodidades] = useState("");
  const [otroTipoDeComodidades, setOtroTipoDeComodidades] = useState("");

  return (
    <div className="flex flex-wrap w-[100%] gap-[10.6%]">
      {/*novena linea */}
      <div className="flex flex-wrap w-[100%]">
        <Textarea
          label="Concepto Nro 1"
          required
          className="min-w-[72.4vw] min-h-[12vh]"
          placeholder="A tener en cuenta: En la parte de Familiares y amigos, se debe especificar con las personas que vive marcando la opción correspondiente y aparte debe relacionarse todo su núcleo familiar primario, independientemente de donde se encuentren viviendo. En todos los informes, se debe indagar sobre los habitos de salud del núcleo familiar primario, antecedentes de alcoholismo o rehabilitación y comentar hace cuanto estan en unión libre o casados con sus parejas, asi mismo sintetizar la informacion analizada de la primera parte y emitir el Concepto 1"
        />
      </div>
      {/*decima linea */}
      <div className="flex flex-wrap w-[100%]">
        <Input
          titulo="Cuidad de Origen Familiar"
          placeholder="Escribir ciudad de origen familiar"
          valor={ciudadOrigenFamiliar}
          onChange={setCiudadOrigenFamiliar}
          className="w-[48%]"
          required
        />
      </div>
      {/*onceava linea */}
      <div className="flex flex-wrap w-[40%]">
        <Textarea
          label="Valores Morales"
          required
          className="min-w-[35.4vw] min-h-[12vh]"
          placeholder="Escribir valores morales"
        />
      </div>
      <div className="flex flex-wrap w-[40%]">
        <Textarea
          label="Proyectos a Mediano y Largo Plazo"
          required
          className="min-w-[35.4vw] min-h-[12vh]"
          placeholder="Escribir proyectos a mediano y largo plazo"
        />
      </div>
      {/*doceava linea */}
      <div className="flex flex-wrap w-[40%]">
        <Textarea
          label="Actividades en el Tiempo Libre"
          required
          className="min-w-[35.4vw] min-h-[12vh]"
          placeholder="Escribir actividades en el tiempo libre"
        />
      </div>
      <div className="flex flex-wrap w-[40%]">
        <Textarea
          label="Situaciones Dificiles en la Familia"
          required
          className="min-w-[35.4vw] min-h-[12vh]"
          placeholder="Escribir situaciones dificiles en la familia"
        />
      </div>
      {/*treceava linea */}
      <div className="flex flex-wrap w-[100%]">
        <Textarea
          label="Enfermedades en la Familia"
          required
          className="min-w-[72.4vw] min-h-[12vh]"
          placeholder="Escribir enfermedades en la familia"
        />
      </div>
      {/*catorceava linea */}
      <div className="flex flex-wrap w-[100%]">
        <Input
          titulo="Es socio de algun club o agremiación"
          placeholder="Escribir es socio de algun club o agremiación"
          valor={esSocioDeAlgunClubOAgremiacion}
          onChange={setEsSocioDeAlgunClubOAgremiacion}
          className="w-[98.4%]"
          required
        />
      </div>
      {/*quinceava linea */}
      <div className="flex flex-wrap w-[100%] mt-[5.5%] gap-[2.5%]">
        <Select
          titulo="Tipo de vivienda"
          placeholder="Seleccionar tipo de vivienda"
          valorSeleccionado={tipoDeVivienda}
          onChange={setTipoDeVivienda}
          className="w-[48%]"
          opciones={tiposVivienda}
        />
        <Input
          titulo="¿Cual otro tipo de vivienda?"
          placeholder="Escribir cual otro tipo de vivienda"
          valor={otroTipoDeVivienda}
          onChange={setOtroTipoDeVivienda}
          className="w-[48%]"
          required={tipoDeVivienda === "otro"}
        />
      </div>
      {/*dieciseisava linea */}
      <div className="flex flex-wrap w-[100%] mt-[2.5%] gap-[2.5%]">
        <Select
          titulo="La vivienda es"
          placeholder="Seleccionar tipo de vivienda"
          valorSeleccionado={tipoDePropiedad}
          onChange={setTipoDePropiedad}
          className="w-[48%]"
          opciones={viviendaEs}
        />
        <Input
          titulo="¿Cual otro tipo de vivienda?"
          placeholder="Escribir cual otro tipo de vivienda"
          valor={otroTipoDePropiedad}
          onChange={setOtroTipoDePropiedad}
          className="w-[48%]"
          required={tipoDePropiedad === "otro"}
        />
      </div>
      {/*diecisieteava linea */}
      <div className="flex flex-wrap w-[100%] mt-[5.5%] gap-[2.5%]">
        <div className="flex flex-col  w-[48%]">
          <h4 className="gris mb-[1.5%]">Comodidades *</h4>
          <div className="flex flex-wrap gap-[2.5%]">
            <Checkbox
              label="Ventilada"
              tipoDeComodidades={setTipoDeComodidades}
            />
            <Checkbox label="Aseada" tipoDeComodidades={setTipoDeComodidades} />
            <Checkbox
              label="Organizada"
              tipoDeComodidades={setTipoDeComodidades}
            />
            <Checkbox
              label="Salubre"
              tipoDeComodidades={setTipoDeComodidades}
            />
            <Checkbox
              label="Hacinamiento"
              tipoDeComodidades={setTipoDeComodidades}
            />
            <Checkbox
              label="Iluminada"
              tipoDeComodidades={setTipoDeComodidades}
            />
            <Checkbox
              label="Energia"
              tipoDeComodidades={setTipoDeComodidades}
            />
            <Checkbox
              label="Gas Natural"
              tipoDeComodidades={setTipoDeComodidades}
            />
            <Checkbox
              label="Alcantarillado"
              tipoDeComodidades={setTipoDeComodidades}
            />
            <Checkbox
              label="Telefono"
              tipoDeComodidades={setTipoDeComodidades}
            />
            <Checkbox label="Agua" tipoDeComodidades={setTipoDeComodidades} />
            <Checkbox
              label="Internet"
              tipoDeComodidades={setTipoDeComodidades}
            />
            <Checkbox label="Otro" tipoDeComodidades={setTipoDeComodidades} />
          </div>
        </div>
        <Input
          titulo="¿Cuales otros tipos de comodidades?"
          placeholder="Escribir cuales otros tipos de comodidades"
          valor={otroTipoDeComodidades}
          onChange={setOtroTipoDeComodidades}
          className="w-[48%]"
          required={tipoDeComodidades === "otro"}
        />
      </div>
      {/*diecisieteava linea */}
      <div className="flex flex-wrap w-[100%]">
        <Textarea
          label="Mas sobre la vivienda"
          required
          className="min-w-[72.4vw] min-h-[12vh]"
          placeholder="Sea específico sobre las demás comodidades de la vivienda: Comedor____ Cocina____ Baños____ Habitaciones____ Sala____ Patio____ Televisores____ Equipo de Sonido____ Camas____ Lavadora____ Computador____ DVD____ Nevera____ Sea especifico en lo demás que observe"
        />
      </div>
      {/*dieciochoava linea */}
      <div className="flex flex-wrap w-[100%] gap-[2.3%]">
        <div className="flex flex-wrap">
          <Textarea
            label="Nombre de quien Aporta"
            required
            className="min-w-[17.2vw] min-h-[12vh]"
            placeholder={`Nombre de quien Aporta 1:________\nNombre de quien Aporta 2:________\nNombre de quien Aporta 3:________\nNombre de quien Aporta 4:________\nNombre de quien Aporta 5:________`}
          />
        </div>
        <div className="flex flex-wrap">
          <Textarea
            label="Ingreso Persona 1"
            required
            className="min-w-[17.2vw] min-h-[12vh]"
            placeholder={`Ingreso Persona 1:________\nIngreso Persona 2:________\nIngreso Persona 3:________\nIngreso Persona 4:________\nIngreso Persona 5:________`}
          />
        </div>
        <div className="flex flex-wrap">
          <Textarea
            label="Valor del Aporte"
            required
            className="min-w-[17.2vw] min-h-[12vh]"
            placeholder={`Valor del Aporte 1:________\nValor del Aporte 2:________\nValor del Aporte 3:________\nValor del Aporte 4:________\nValor del Aporte 5:________`}
          />
        </div>
        <div className="flex flex-wrap">
          <Textarea
            label="Total del Valor Aportado"
            required
            className="min-w-[17.2vw] min-h-[12vh]"
            placeholder="Escribir total del valor aportado"
          />
        </div>
      </div>
      {/*diecinueveava linea */}
      <div className="flex flex-wrap w-[100%] gap-[2.2%]">
        <div className="flex flex-wrap">
          <Textarea
            label="Egresos Motivo"
            required
            className="min-w-[23.5vw] min-h-[12vh]"
            placeholder={`Egresos Motivo 1:________\nEgresos Motivo 2:________\nEgresos Motivo 3:________\nEgresos Motivo 4:________\nEgresos Motivo 5:________`}
          />
        </div>
        <div className="flex flex-wrap">
          <Textarea
            label="Valor Egresos"
            required
            className="min-w-[23.5vw] min-h-[12vh]"
            placeholder={`Valor Egresos 1:________\nValor Egresos 2:________\nValor Egresos 3:________\nValor Egresos 4:________\nValor Egresos 5:________`}
          />
        </div>
        <div className="flex flex-wrap">
          <Textarea
            label="Total de Egresos"
            required
            className="min-w-[23.5vw] min-h-[12vh]"
            placeholder="Escribir total de egresos"
          />
        </div>
      </div>
      {/*veinteava linea */}
      <div className="flex flex-wrap w-[100%] gap-[4%]">
        <div className="flex flex-wrap">
          <Textarea
            label="Vehiculos"
            required
            className="min-w-[35.2vw] min-h-[12vh]"
            placeholder={`Referencia los Vehiculos por  Marca - Modelo - Placa  - Precio`}
          />
        </div>
        <div className="flex flex-wrap">
          <Textarea
            label="Valor Egresos"
            required
            className="min-w-[35.2vw] min-h-[12vh]"
            placeholder={`Refencia los Inmuebles por:  Tipo - Dirección - Ciudad - Precio`}
          />
        </div>
      </div>
    </div>
  );
};

export default ConceptoNro1;
