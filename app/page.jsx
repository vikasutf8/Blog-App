import CardList from "@/components/cardList/CardList";
import CategoryList from "@/components/categoryList/CategoryList";
import Featured from "@/components/featured/Featured";

export default function Home() {
  return (
    <div className=' w-9/12 m-auto '>
      <Featured/>
      <CategoryList/>
      <CardList/>
    </div>
  )
}