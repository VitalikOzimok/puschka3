type Props = {
  name: string;
  description?: string;
  image: string;
};

const Class = ({ name, description, image }: Props) => {
  const overlayStyles = `p-7 absolute z-30 flex bg-black
    h-[380px] w-[450px] flex-col items-center justify-center
    whitespace-normal bg-primary-500 text-center text-white
    opacity-0 transition duration-500 hover:opacity-80 rounded-xl  `;

  return (
    <li className="relative mx-2 inline-block h-[380px] w-[450px] border-[1px] border-gray-100 rounded-xl ">
      <div className={overlayStyles}>
        <p className="text-2xl">{name}</p>
        <p className="mt-5">{description}</p>
      </div>
      <img alt={`${image}`} src={image} className="rounded-xl" />
    </li>
  );
};

export default Class;
