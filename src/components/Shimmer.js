const Shimmer = () => {
  return (
    <div className="flex flex-wrap w-10/12 m-auto">
      {Array.from({ length: 15 }, (_,index) => (
        <div className="m-2 p-2 w-56 h-60 bg-gray-300" key={index}></div>
      ))}
    </div>
  );
};

export default Shimmer;
