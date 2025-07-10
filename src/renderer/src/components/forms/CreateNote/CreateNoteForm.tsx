import "./CreateNoteForm.css";

import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
import { noteSchema, type NoteSchema } from "../../../schemas/NoteSchema";
import { useState, useEffect } from "react";

import type { IRoute } from "../../../interfaces/IRoute";
import type { ICity } from "../../../interfaces/ICity";
import { zodResolver } from "@hookform/resolvers/zod";

export function CreateNoteForm() {
  const [routes, setRoutes] = useState<IRoute[]>();
  const [cities, setCities] = useState<ICity[]>();

  useEffect(() => {
    async function fetchDataCitiesAndRoutes() {
      const responseRoutes = await window.api.getAllRoutes();
      const responseCities = await window.api.getAllCities();

      // Validation response routes
      if (
        responseRoutes.code < 200 ||
        responseRoutes.code > 299 ||
        responseRoutes.body?.length === 0
      )
        alert(responseRoutes.message);
      setRoutes(responseRoutes.body);

      // Validation response cities
      if (
        responseCities.code < 200 ||
        responseCities.code > 299 ||
        responseCities.body?.length === 0
      )
        alert(responseCities.message);

      setCities(responseCities.body);
    }

    fetchDataCitiesAndRoutes();
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NoteSchema>({
    resolver: zodResolver(noteSchema),
  });

  const onSubmit = (data: NoteSchema) => {
    window.api.saveNote(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label style={{ width: "25%" }}>
        Nº da Nota:
        <input type="number" {...register("numberNote")} />
        {errors.numberNote && <p>{errors.numberNote.message}</p>}
      </label>

      <label style={{ width: "71%" }}>
        Cliente:
        <input {...register("client")} />
        {errors.client && <p>{errors.client.message}</p>}
      </label>

      <label style={{ width: "30%" }}>
        Data de Emissão:
        <input
          type="date"
          {...register("emissionDate", { valueAsDate: true })}
        />
        {errors.emissionDate && <p>{errors.emissionDate.message}</p>}
      </label>

      <label style={{ width: "66%" }}>
        Endereço:
        <input {...register("address")} />
        {errors.address && <p>{errors.address.message}</p>}
      </label>

      <label style={{ width: "42%" }}>
        Cidade:
        <select {...register("cityId")}>
          <option value="">Selecione a cidade...</option>
          {cities?.map((city) => (
            <option value={city.id}>
              {city.name} - {city.uf}
            </option>
          ))}
        </select>
        {errors.cityId && <p>{errors.cityId.message}</p>}
      </label>

      <label style={{ width: "35%" }}>
        Rota:
        <select {...register("routeId")}>
          <option value="">Selecione a rota...</option>
          {routes?.map((route) => (
            <option value={route.id}>{route.name}</option>
          ))}
        </select>
        {errors.routeId && <p>{errors.routeId.message}</p>}
      </label>

      <label style={{ width: "15%" }}>
        Volumes:
        <input type="number" {...register("volumes")} />
        {errors.volumes && <p>{errors.volumes.message}</p>}
      </label>

      <label style={{ width: "25%" }}>
        Valor Total:
        <input type="number" step="0.01" {...register("totValue")} />
        {errors.totValue && <p>{errors.totValue.message}</p>}
      </label>

      <label>
        Conferente:
        <input {...register("checker")} />
        {errors.checker && <p>{errors.checker.message}</p>}
      </label>

      <label>
        Peso (Kg):
        <input type="number" step="0.01" {...register("weight")} />
        {errors.weight && <p>{errors.weight.message}</p>}
      </label>

      <button
        className="button-primary"
        style={{ fontSize: "1rem" }}
        type="submit"
      >
        Salvar Nota
      </button>
    </form>
  );
}
