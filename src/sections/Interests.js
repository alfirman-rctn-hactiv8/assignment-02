const Interests = () => {
  return (
    <div
      id="interests"
      className="h-screen flex flex-col justify-center space-y-10"
    >
      <h1 className="uppercase text-6xl font-bold text-gray-800">interests</h1>
      <p className="text-gray-400 whitespace-pre-line">{interest}</p>
    </div>
  );
};

const interest =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever sinceLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since \n\nand typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever sinceLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since";

export default Interests;
