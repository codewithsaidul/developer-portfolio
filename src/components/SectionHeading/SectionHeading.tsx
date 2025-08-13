import { SectionHeadingProps } from "@/types";

const SectionHeading = ({ title, desc }: SectionHeadingProps) => {
  return (
    <div className="text-center">
      <h2 className="text-5xl text-white font-dm-serif">{title}</h2>
      <p className="text-textPrimary w-full md:w-[600px] lg:w-[750px] xl:w-[850px] mx-auto mt-3">
        {desc}
      </p>
    </div>
  );
};

export default SectionHeading;
