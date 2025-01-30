

interface TransportModeProps {
  image: string;
  alt: string;
}

export default function TransportMode({ image, alt }: TransportModeProps) {

  return (
    <div
      className="relative w-full h-0 pb-[100%] md:object-contain md:w-[calc(100vw-5vw)] md:h-96 lg:w-[550px]"
    >
      <img
        src={image}
        alt={alt}
        className={"absolute inset-0 w-full h-full object-cover rounded-xl animate-rotate"}
      />
    </div>
  );
}