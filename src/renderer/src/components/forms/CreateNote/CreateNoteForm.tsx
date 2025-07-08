import "./CreateNoteForm.css";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { noteSchema, type NoteSchema } from "../../../schemas/NoteSchema";

export function CreateNoteForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NoteSchema>({
    resolver: zodResolver(noteSchema),
  });

  const onSubmit = (data: NoteSchema) => {
    console.log("Formulário enviado:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        Nº da Nota:
        <input type="number" {...register("numberNote")} />
        {errors.numberNote && <p>{errors.numberNote.message}</p>}
      </label>

      <label>
        Cliente:
        <input {...register("client")} />
        {errors.client && <p>{errors.client.message}</p>}
      </label>

      <label>
        Data de Emissão:
        <input
          type="date"
          {...register("emissionDate", { valueAsDate: true })}
        />
        {errors.emissionDate && <p>{errors.emissionDate.message}</p>}
      </label>

      <label>
        Endereço:
        <input {...register("address")} />
        {errors.address && <p>{errors.address.message}</p>}
      </label>

      <label>
        Cidade:
        <input {...register("city")} />
        {errors.city && <p>{errors.city.message}</p>}
      </label>

      <label>
        Rota (ID):
        <input type="number" {...register("routeId")} />
        {errors.routeId && <p>{errors.routeId.message}</p>}
      </label>

      <label>
        Volumes:
        <input type="number" {...register("volumes")} />
        {errors.volumes && <p>{errors.volumes.message}</p>}
      </label>

      <label>
        Valor Total:
        <input type="number" step="0.01" {...register("totValue")} />
        {errors.totValue && <p>{errors.totValue.message}</p>}
      </label>

      <label>
        Peso:
        <input type="number" step="0.01" {...register("weight")} />
        {errors.weight && <p>{errors.weight.message}</p>}
      </label>

      <button type="submit">Salvar Nota</button>
    </form>
  );
}
