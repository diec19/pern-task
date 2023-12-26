import { z } from "zod";

export const createTaskSchema = z.object({
  title: z
    .string({
      required_error: "El titulo es requerido",
      invalid_type_error: "el titulo debe ser un texto",
    })
    .min(1)
    .max(255),
  description: z
    .string({
      required_error: "La descripcion es requerida",
      invalid_type_error: "La descripcion debe ser un texto",
    })
    .min(1)
    .max(255)
    .optional(),
});
