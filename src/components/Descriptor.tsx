type DescriptorProps = {
  text: string;
  description?: string;
};

const Descriptor = ({ text, description }: DescriptorProps) => {
  if (text && description) {
    return (
      <div className="flex justify-between items-baseline w-full flex-wrap">
        <div className="text-base font-bold uppercase">{text}</div>
        <div className="text-sm font-medium ml-2">
          <em>{description}</em>
        </div>
      </div>
    );
  } else {
    return <div className="text-base font-bold uppercase">{text}</div>;
  }
};

export default Descriptor;
