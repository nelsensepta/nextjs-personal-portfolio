import Image from "next/image";

interface Props {
  width: number;
  height: number;
}

export const Avatar = ({ width, height }: Props) => {
  return (
    <div className="flex w-2/3 justify-center">
      <Image
        src="https://res.cloudinary.com/dpuv38lb5/image/upload/v1683109772/personal-web/uchihamadara_u2yvfl.jpg"
        alt="Nelsen Septa"
        className="flex rounded-full"
        objectPosition="center"
        loading="lazy"
        quality={100}
        objectFit="cover"
        placeholder="blur"
        blurDataURL="https://res.cloudinary.com/dpuv38lb5/image/upload/v1683109772/personal-web/uchihamadara_u2yvfl.jpg"
        width={width}
        height={height}
      />
    </div>
  );
};
