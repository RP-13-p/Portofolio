import en from "./en.json";
import fr from "./fr.json";

export const resources = {
  en: { translation: en },
  fr: { translation: fr },
} as const;

export type SupportedLng = keyof typeof resources;
