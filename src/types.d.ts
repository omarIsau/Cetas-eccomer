export interface Welcome {
  id: number;
  title: string;
  price: number;
  description: string;
  category: Category;
  image: string;
  rating: Rating;
}

export const enum Category {
  Electronics = "electronics",
  Jewelery = "jewelery",
  MenSClothing = "men's clothing",
  WomenSClothing = "women's clothing",
}

export interface Rating {
  rate: number;
  count: number;
}
export const enum SetasCategory {
  suaves = "suave",
  media = "media",
  intensa = "intensa",
  demoniaca = "demoniaca",
}
export interface Seta {
  id: number;
  nombre: string;
  descripcion: string;
  categoria: string;
  precio: number;
  imagenes: string[];
}
