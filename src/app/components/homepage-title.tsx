interface TitleTypes {
  locationName: string;
}

const HomepageTitle: React.FC<TitleTypes> = ({ locationName }) => {
  return (
    <div>
      <p className="text-sm">Explore</p>
      <h1 className="text-3xl font-medium">{locationName}</h1>
    </div>
  );
};

export default HomepageTitle;
