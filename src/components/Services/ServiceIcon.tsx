interface ServiceIconProps {
  children: React.ReactNode; 
}

export default function ServiceIcon({ children }: ServiceIconProps) {
  return (
    <div className="relative w-16 h-16">
      <div className="absolute inset-0 bg-orange-500 rounded-lg transform rotate-12 hover:rotate-45 transition-all duration-300 ease-in-out" />
      
      <div className="absolute inset-0 bg-teal-500 rounded-lg transform -rotate-12 hover:rotate-45 hover:bg-teal-500 transition-all duration-300 ease-in-out" />
      
      <div className="relative flex items-center justify-center w-full h-full text-white">
        {children}
      </div>
    </div>
  );
}
