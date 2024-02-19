interface IngredientEntryInterface {
  name: string;
  amount: number;
  unit: string;
}

const IngredientEntry: React.FC<IngredientEntryInterface> = ({
  name,
  amount,
  unit,
}) => {
  return (
    <li className="bg-white w-fit rounded-full px-3 py-1">
      <p className="font-montserrat text-base">
        {name}{" "}
        <b className="text-[--accent]">
          {amount} {unit}
        </b>
      </p>
    </li>
  );
};

export default IngredientEntry;
