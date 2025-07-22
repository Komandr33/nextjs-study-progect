import Image, { StaticImageData } from "next/image";

type Props = {
  src: StaticImageData;
};

export const Status = ({ src }: Props) => {
  return (
    <div>
      <Image src={src} alt={""} width={20} height={20} />
    </div>
  );
};
