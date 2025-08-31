import { headers } from "next/headers";
import ProductCard from "../components/ProductCard/card";

export default async function HomePage() {
  return (
    <div>
      <ProductCard />
    </div>
  );
}
