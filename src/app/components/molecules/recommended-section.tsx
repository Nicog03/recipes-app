import CompactCardCarousel from "./compact-card-carousel";
import Header from "../header-component";

const RecommendedSection = () => {
  return (
    <section className="flex flex-col gap-4">
      <Header text="Recommended" size="small" />
      <CompactCardCarousel />
    </section>
  );
};

export default RecommendedSection;
