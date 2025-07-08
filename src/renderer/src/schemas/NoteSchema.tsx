import { z } from "zod";

export const noteSchema = z.object({
  numberNote: z.coerce.number().min(1, "Número obrigatório"),
  client: z.string().min(1, "Cliente obrigatório"),
  emissionDate: z.coerce.date({
    errorMap: () => ({ message: "Data inválida" }),
  }),
  address: z.string(),
  city: z.string().min(1, "Cidade obrigatória"),
  route: z.coerce.string().min(1, "Rota obrigatório"),
  volumes: z.coerce.number().min(1, "Volume obrigatório"),
  checker: z.string().min(1, "Conferente obrigatório"),
  totValue: z.coerce.number().min(0.01, "Valor total obrigatório"),
  weight: z.coerce.number(),
});

export type NoteSchema = z.infer<typeof noteSchema>;
