import { z } from "zod";

export const noteSchema = z.object({
  numberNote: z.coerce.number().min(1, "Número obrigatório"),
  client: z.string().min(1, "Cliente obrigatório"),
  emissionDate: z.coerce.date({
    errorMap: () => ({ message: "Data inválida" }),
  }),
  address: z.string().min(1, "Endereço obrigatório"),
  city: z.string().min(1, "Cidade obrigatória"),
  routeId: z.coerce.number(),
  volumes: z.coerce.number(),
  totValue: z.coerce.number(),
  weight: z.coerce.number(),
});

export type NoteSchema = z.infer<typeof noteSchema>;
