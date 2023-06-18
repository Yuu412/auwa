import Image from "next/image";

interface Props {
  title: string;
  subtitle: string;
}

const PageTitle = ({ title, subtitle }: Props) => {
  return (
    <div className="w-5/6 text-naby mt-24 mb-16 mx-auto text-gray">
      <h1 className="text-4xl my-1 tracking-widest md:text-6xl font-bold font-mincho">
        {title}
      </h1>
      <h2 className="text-xs tracking-[.3rem] font-bold md:text-base md:my-4 font-basic">
        {subtitle}
      </h2>
    </div>
  );
};

export default PageTitle;
