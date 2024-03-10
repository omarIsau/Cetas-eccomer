import type { Welcome, Category } from "../types";
export async function getProducts(): Promise<Welcome[]> {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json();
  return data;
}
export async function getProductCategorys(): Promise<Category[]> {
  const products = await getProducts();
  const categorys = [...new Set(products.map((product) => product.category))];
  return categorys;
}
export async function getProductsIds(): Promise<number[]> {
  const products = await getProducts();
  const ids = products.map((product) => product.id);
  return ids;
}
export async function getProductById(id: number): Promise<Welcome> {
  const response = await fetch(`https://fakestoreapi.com/products/${id}`);
  const data = await response.json();
  return data;
}
