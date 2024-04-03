import Setas from "@db/Products.json";
export function getSetasCategorys() {
  const categorys = [...new Set(Setas.map((product) => product.categoria))];
  return categorys;
}
export function getSetasIds() {
  const ids = Setas.map((product) => product.id);
  return ids;
}
export function getSetasById(id: number) {
  const product = Setas.find((product) => product.id == id);
  return product;
}
export function getSetasByCategory(category: string) {
  const products = Setas.filter((product) => product.categoria == category);
  return products;
}