const SectionHeading = ({title,index}) => {
  return (
    <div className="flex items-center gap-4">
      <h1 className="text-headingColor sm:text-subClamp text-2xl xs:text-xl tracking-wider font-bold text-center whitespace-nowrap">
        {" "}
        <span className="text-btnColor sm:text-2xl text-xl xs:text-base">{index} </span>{title}
      </h1>
      <hr className="w-[20rem] h-[2px] bg-[#ccd6f6] opacity-5" />
    </div>
  );
};

export default SectionHeading;
