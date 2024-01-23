import Header from "../header-component";
import CategoryCard from "../category-card";

const CategoryInfoArray = [
  {
    name: "Meat",
    imageUrl: "/images/steak.png",
    color: "--blue-accent",
  },
  {
    name: "Dessert",
    imageUrl: "/images/cake.png",
    color: "--pink-accent",
  },
  {
    name: "Vegetaria",
    imageUrl: "/images/salad.png",
    color: "--green-accent",
  },
  {
    name: "Drinks",
    imageUrl: "/images/orange-juice.png",
    color: "--yellow-accent",
  },
];

const CategoriesSection = () => {
  return (
    <section className="flex flex-col gap-4 pb-16">
      <Header text="Explore Categories" size="small" />
      <div className="grid grid-cols-2 gap-2">
        {CategoryInfoArray.map((node) => (
          <CategoryCard
            categoryName={node.name}
            imageUrl={node.imageUrl}
            cardColor={node.color}
          />
        ))}
      </div>
    </section>
  );
};

export default CategoriesSection;
