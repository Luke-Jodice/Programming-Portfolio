interface ProgramCard {
  className?: string;
  children?: React.ReactNode;
  title: string;
  description: string;
  repoLink: string;
  liveLink?: string;
  pageLink?: string;
  technology?: string;
  screenshotpath?: string;
  id?: string;
}

const ItemCard: React.FC<ProgramCard> = ({
  title,
  description,
  repoLink,
  technology,
  children
}) => {
  return (
    <div className="">
      <a href={repoLink}>
        <h1 className="text-2xl font-extrabold hover:cursor-pointer hover:text-blue-800">
          {title}
        </h1>
      </a>
      {/* <h4 className="font-semibold">{}</h4> */}
      <div className="text-lg font-semibold">{technology}</div>
      <div className="flex-wrap">{description}</div>
      <div className="flex-row text-right">{children}</div>
    </div>
  );
};
export default ItemCard;
