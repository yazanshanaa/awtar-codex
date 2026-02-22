import { z } from 'zod';

const noLinkRegex = /(https?:\/\/|www\.)/i;
const suspiciousRepeatRegex = /(.)\1{7,}/;

export const quoteSchema = z.object({
  locale: z.enum(['ar', 'en', 'he']),
  name: z
    .string()
    .trim()
    .min(2)
    .max(80)
    .regex(/^[\p{L}\p{N}\s.'-]+$/u),
  phone: z
    .string()
    .trim()
    .min(7)
    .max(20)
    .regex(/^[+\d\s()-]+$/),
  area: z.string().trim().min(2).max(120),
  service: z.enum(['doors', 'railings', 'grills', 'windows', 'maintenance']),
  sizes: z.string().trim().max(160).optional(),
  description: z
    .string()
    .trim()
    .min(10)
    .max(1200)
    .refine((v) => !noLinkRegex.test(v), 'no_links')
    .refine((v) => !suspiciousRepeatRegex.test(v), 'repeated_chars'),
  preferredTime: z.string().trim().max(80).optional(),
  honeypot: z.string().trim().max(0),
  startedAt: z.coerce.number().int().positive()
});

export type QuoteInput = z.infer<typeof quoteSchema>;
