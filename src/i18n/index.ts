import es from './es';
import en from './en';
import type { Lang } from '../data/site';

export const dict = { es, en } as const;
export type Dict = typeof es;
export const t = (lang: Lang): Dict => dict[lang];
