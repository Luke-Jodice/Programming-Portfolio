
interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = () => {
  return (
      <footer className="mt-20 pt-10 pb-5 main-background text-center font-semibold">        
        For formal inquiries, please contact my email at jodiceluke@gmail.com
      </footer>  
    );
};

export default Footer;
