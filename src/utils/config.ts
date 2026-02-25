export const basename: string =
  import.meta.env.BASE_URL?.replace(/\/$/, '') || '/';
