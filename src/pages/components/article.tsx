interface articleprops {
    className?: string;
    children?: React.ReactNode;
    article_url: string;
    title: string;
    subtitle: string;
    datePub: string;
}

const article: React.FC<articleprops> = ({
  article_url,
  title,
  subtitle,
  datePub
}) => {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg ">
      <a href={article_url} className="block" target="_blank" rel="noopener noreferrer">
        {/* Decorative gradient element */}
        <div className="absolute inset-x-0 -top-px h-px ty-0" />
        
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold tracking-tight text-gray-900 transition-colors duration-200 group-hover:text-slate-500">
            {title}
          </h3>
          
          <p className="text-lg leading-relaxed text-gray-600 group-hover:text-gray-500">
            {subtitle}
          </p>
          
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <svg 
              className="h-5 w-5 text-gray-400" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={1.5} 
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" 
              />
            </svg>
            <time dateTime={datePub} className="font-medium">
              {datePub}
            </time>
          </div>
        </div>

        {/* Decorative corner gradient */}
        {/* <div className="absolute bottom-0 right-0 h-16 w-16 bg-gradient-to-br from-primary/5 to-primary/10 opacity-0 transition-opacity group-hover:opacity-100" /> */}
      </a>
    </div>
  );
};

export default article;
