import Image from "next/image";

interface Props {
  width: number;
  height: number;
}

export const Avatar = ({ width, height }: Props) => {
  return (
    <Image
      src="https://storage.googleapis.com/test-385515.appspot.com/makima.jpg"
      alt="Uygar Uğurlu"
      className="rounded-full"
      width={width}
      height={height}
    />
  );
};
