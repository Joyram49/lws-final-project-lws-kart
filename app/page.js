import Ads from "@/components/home/Ads";
import Banner from "@/components/home/Banner";
import Features from "@/components/home/Features";
import CategoryList from "@/components/home/category/CategoryList";
import NewArrivalList from "@/components/home/newArrival/NewArrivalList";
import ProductList from "@/components/home/trending/ProductList";

export default async function HomePage() {
  return (
    <main>
      <Banner />
      <Features />
      <CategoryList />
      <NewArrivalList />
      <Ads />
      <ProductList />
    </main>
  );
}
