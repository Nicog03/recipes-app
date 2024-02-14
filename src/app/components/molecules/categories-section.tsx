import Header from "../header-component";
import CategoryCard from "../category-card";

const CategoryInfoArray = [
  {
    name: "Main Course",
    imageUrl: "/images/steak.png",
    color: "--blue-accent",
    type: "main-course",
  },
  {
    name: "Dessert",
    imageUrl: "/images/cake.png",
    color: "--pink-accent",
    type: "dessert",
  },
  {
    name: "Salad",
    imageUrl: "/images/salad.png",
    color: "--green-accent",
    type: "salad",
  },
  {
    name: "Drinks",
    imageUrl: "/images/orange-juice.png",
    color: "--yellow-accent",
    type: "drink",
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
            key={node.name}
            type={node.type}
          />
        ))}
      </div>
    </section>
  );
};

export default CategoriesSection;
