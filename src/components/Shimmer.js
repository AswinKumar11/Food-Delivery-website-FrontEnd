const Shimmer = () => {
  return (
    <div className="shimmer-Component">
      {Array.from({ length: 15 }, (_,index) => (
        <div className="shimmer-Card" key={index}></div>
      ))}
    </div>
  );
};

export default Shimmer;
