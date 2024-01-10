import LargeAttractionImage from "../components/large-attraction-image";
import AttractionDescription from "../components/molecules/attraction-description";
import AttractionFacilities from "../components/molecules/attraction-facilities";
import AttractionPayment from "../components/molecules/attraction-payment";

const AttractionPage = () => {
  return (
    <div className="p-5 flex flex-col gap-8 h-screen justify-between">
      <LargeAttractionImage />
      <AttractionDescription />
      <AttractionFacilities />
      <AttractionPayment price={199} />
    </div>
  );
};

export default AttractionPage;
