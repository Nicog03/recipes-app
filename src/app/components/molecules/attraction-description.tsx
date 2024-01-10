import Header from "../header-component";
import TextButton from "../text-button";
import ReviewSummary from "../review-summary";
import DescriptionParagraph from "../description-paragraph";

const descText =
  "Aspen is as close as one can get to a storybook alpine town in America. The choose-your-own-adventure possibilities—skiing, hiking, dining shopping and ....";

const AttractionDescription = () => {
  return (
    <div className="flex flex-col gap-4">
      <div>
        <div className="flex justify-between">
          <Header text="Coeurdes Alpes" size="medium" />
          <TextButton text="Show map" />
        </div>
        <ReviewSummary reviewAmount={355} reviewValue="4.5" />
      </div>
      <div className="flex flex-col gap-2a">
        <DescriptionParagraph text={descText} />
        <TextButton text="Read more" iconUrl="/icons/down-arrow.svg" />
      </div>
    </div>
  );
};

export default AttractionDescription;
