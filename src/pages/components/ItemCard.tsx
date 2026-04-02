interface ItemCardProps {
  className?: string;
  children?: React.ReactNode;
  title: string;
  company?: string;
  description: string;
  repoLink?: string;
  liveLink?: string;
  postiveTakaway?: string;
  learningops?: string;
  pageLink: string;
}

const ItemCard: React.FC<ItemCardProps> = ({
  children,
  title,
  company,
  description,
}) => {
  return (
    <>
      <div className="hover:text-blue-800 hover:cursor-pointer">
        <h1 className="text-2xl font-extrabold">{title}</h1>
        <h4 className="font-semibold">{company}</h4>
        <div className="flex-wrap">{description}</div>
        <div className="flex-row text-right">{children}</div>
      </div>
    </>
  );
};
export default ItemCard;
