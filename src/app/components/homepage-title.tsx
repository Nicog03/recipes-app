interface TitleTypes {
  locationName: string;
}

const HomepageTitle: React.FC<TitleTypes> = ({ locationName }) => {
  return (
    <>
      <p className="text-sm">Explore</p>
      <h1 className="text-3xl font-medium">{locationName}</h1>
    </>
  );
};

export default HomepageTitle;
