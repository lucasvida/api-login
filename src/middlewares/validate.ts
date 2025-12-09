import { z } from "zod";

export const userSchema = z.object({
    firstName: z.string().min(3, { message: "O nome deve ter no mínimo 3 caracteres" }),
    lastName: z.string().min(3, { message: "O sobrenome deve ter no mínimo 3 caracteres" }),
    email: z.string().email({ message: "Email inválido" }),
    password: z.string().min(6, { message: "A senha deve ter no mínimo 6 caracteres" })
});

export const loginSchema = z.object({
    email: z.string().email({ message: "Email inválido" }),
    password: z.string().min(6, { message: "A senha deve ter no mínimo 6 caracteres" })
});
