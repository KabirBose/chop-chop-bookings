interface Props {
  fname: string;
  lname: string;
  number: string;
  email: string;
}

export default function Booking({ fname, lname, number, email }: Props) {
  return (
    <div className="bg-gray-200 rounded-md text-black">
      <div className="p-3 w-96">
        <h1>
          {fname} {lname}
        </h1>
        <h1>{number}</h1>
        <h1>{email}</h1>
      </div>
    </div>
  );
}
