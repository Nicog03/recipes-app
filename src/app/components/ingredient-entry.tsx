interface IngredientEntryInterface {
  name: string;
  amount: string;
}

const IngredientEntry: React.FC<IngredientEntryInterface> = ({
  name,
  amount,
}) => {
  return (
    <li>
      <p>
        {name} <b className="text-[--accent]">{amount}</b>
      </p>
    </li>
  );
};

export default IngredientEntry;
