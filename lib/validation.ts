import { z } from "zod";

export const mailFormSchema = z.object({
    name : z.string().min(3).max(12),
    email : z.string().email(),
    message : z.string().min(4)
})