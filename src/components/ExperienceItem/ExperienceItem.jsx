const ExperienceItem = ({ exp }) => {
  return (
    <div className="tracking-widest  ">
      <h1 className="text-headingColor sm:text-xl xs:text-sm text-lg ">
        {exp?.role} <span className="text-white">@ {exp?.company_name}</span>
      </h1>
      <p className="text-bodyColor my-2 xs:text-[12px]">
        {exp?.starting_date} - {exp?.ending_date}
      </p>
      <ol className="lg:w-[70%]">
        {exp?.responsibilites?.map((res, i) => (
          <li key={i} className="text-bodyColor my-2 sm:text-[1.1rem] text-[14px] xs:text-[12px]  list-disc"><span className="font-semibold">{res?.split(":")?.[0]} : </span>{res?.split(":")?.[1]}</li>
        ))}
      </ol>
    </div>
  );
};

export default ExperienceItem;
