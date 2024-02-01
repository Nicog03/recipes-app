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
    <li>
      <p>
        {name}{" "}
        <b className="text-[--accent]">
          {amount} {unit}
        </b>
      </p>
    </li>
  );
};

export default IngredientEntry;
