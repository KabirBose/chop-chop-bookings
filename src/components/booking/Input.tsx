interface Props {
  label: string;
  name: string;
  type: string;
}

export default function Input({ label, name, type }: Props) {
  return (
    <div className="flex flex-col">
      <label className="text-black" htmlFor={name}>
        {label}
      </label>
      <input
        className="rounded-sm px-2 py-1 bg-gray-300 text-black focus:outline-none"
        name={name}
        placeholder={label}
        type={type}
      ></input>
    </div>
  );
}
