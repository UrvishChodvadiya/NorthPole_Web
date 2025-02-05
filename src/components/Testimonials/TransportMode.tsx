interface TransportModeProps {
  image: string;
  alt: string;
}

export default function TransportMode({ image, alt }: TransportModeProps) {
  return (
    <div className="relative w-full h-auto pb-[100%] md:pb-0 md:h-96 lg:w-[590px]  md:w-screen">
      <img
        src={image}
        alt={alt}
        className="absolute inset-0 w-full h-full object-cover rounded-xl md:object-contain lg:w-[500px]  md:h-[400px]"
      />
    </div>
  );
}
