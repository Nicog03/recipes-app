import Button from "../button";

interface AttractionPaymentInterface {
  price: number;
}

const AttractionPayment: React.FC<AttractionPaymentInterface> = ({ price }) => {
  return (
    <>
      <section className="font-montserrat flex gap-14 items-end">
        <div className="font-semibold">
          <h2 className="text-xs">Price</h2>
          <p className="text-3xl text-teal-400">${price}</p>
        </div>
        <Button text="Book Now" iconPath="/icons/arrow-right.svg" />
      </section>
    </>
  );
};

export default AttractionPayment;
