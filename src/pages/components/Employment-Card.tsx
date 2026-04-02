interface EmploymentCardProps {
  className?: string;
  children?: React.ReactNode;
  title: string;
  company: string;
  description: string[];
  keyparts: string[];
  timeframe?: string;
}

const EmploymentCard: React.FC<EmploymentCardProps> = ({
  title,
  company,
  description,
  keyparts,
  timeframe,
}) => {
  const keyparts_format = (keyparts || []).map((part, i) => (
    i === keyparts.length - 1 ? part : part + " • "
  )).join('');

  return (
    <div className="rounded-xl bg-white p-6 shadow-sm transition-all hover:shadow-md">
      <div className="space-y-4">
        {/* Header section */}
        <div className="border-b border-gray-100 pb-4">
          <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
          <div className="mt-2 flex flex-wrap items-center gap-2 text-gray-600">
            <span className="font-medium">{company}</span>
            <span className="text-gray-300">•</span>
            <span className="text-sm text-gray-500">{timeframe}</span>
          </div>
        </div>

        {/* Key parts section */}
        <div className="rounded-lg bg-gray-50 px-4 py-3 text-sm text-gray-600">
          {keyparts_format}
        </div>

        {/* Description list */}
        <ul className="space-y-3 text-gray-600">
          {description?.map((item, index) => (
            <li key={index} className="flex items-start">
              <svg 
                className="mr-2 mt-1.5 h-4 w-4 flex-shrink-0 text-primary" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M9 5l7 7-7 7"
                />
              </svg>
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default EmploymentCard;
