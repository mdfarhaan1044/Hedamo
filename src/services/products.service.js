export class ProductsService {
  async fetchProducts() {
    if (
      process.env.NEXT_PUBLIC_API_URL &&
      process.env.NEXT_PUBLIC_FETCH_TYPE === "API"
    ) {
      const res = await fetch(process.env.NEXT_PUBLIC_API_URL);
      const data = await res.json();
      return data.products;
    } else {
      const res = await fetch("/data/data.json");
      const data = await res.json();
      return data.products;
    }
  }
}
