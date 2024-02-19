import { InstructionType } from "../../../../api/api-requests";
import Header from "../header-component";

interface RecipeSectionInterface {
  recipe: [];
}

const RecipeSection: React.FC<RecipeSectionInterface> = ({ recipe }) => {
  const instructionsArray = recipe[0]!.steps as InstructionType[];

  return (
    <section
      className="flex flex-col gap-5 bg-slate-100 p-2 rounded-xl -z-20 "
      style={{
        backgroundImage: "url(/images/pattern.jpg)",
        backgroundSize: "cover",
      }}
    >
      <Header text="Recipe" size="small" />
      <ol className="flex flex-col gap-3 ps-5 relative">
        {instructionsArray.map((step) => (
          <li
            className="relative px-3 py-2 rounded-xl bg-white font-montserrat"
            key={step.number}
          >
            <p className="absolute -left-10 -top-4 text-5xl font-semibold -z-10 text-white bg-[--accent] w-12 h-12 rounded-full text-center">
              {step.number}
            </p>
            <p className="text-base">{step.step}</p>
          </li>
        ))}
      </ol>
    </section>
  );
};

export default RecipeSection;
