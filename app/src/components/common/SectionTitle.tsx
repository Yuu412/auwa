import Image from "next/image";

interface Props {
  title: string;
  subtitle: string;
  right: boolean;
}

const SectionTitle = ({ title, subtitle, right = false }: Props) => {
  return (
    <div
      className={
        right
          ? "container w-screen text-center text-white my-8 md:my-28 mx-auto"
          : "container w-screen text-center text-orange my-8 md:my-28 mx-auto"
      }
    >
      <h1 className="text-[1.4rem] md:text-[1.8rem] font-semibold my-1">
        {title}
      </h1>
      <h2 className="text-xs md:text-sm">{subtitle}</h2>
    </div>
  );
};

export default SectionTitle;
