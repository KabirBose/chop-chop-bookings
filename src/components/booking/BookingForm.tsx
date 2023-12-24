"use client";

export default function BookingForm() {
  return (
    <form className="flex flex-col bg-gray-200 w-80 p-4 gap-5 rounded-md">
      <input
        className="rounded-sm px-2 py-1 bg-gray-300 text-black focus:outline-none"
        placeholder="First Name"
        type="text"
      ></input>
      <input
        className="rounded-sm px-2 py-1 bg-gray-300 text-black focus:outline-none"
        placeholder="Last Name"
        type="text"
      ></input>
      <input
        className="rounded-sm px-2 py-1 bg-gray-300 text-black focus:outline-none"
        placeholder="Phone Number"
        type="tel"
      ></input>
      <input
        className="rounded-sm px-2 py-1 bg-gray-300 text-black focus:outline-none"
        placeholder="Email"
        type="email"
      ></input>
      <button
        className="bg-light-3 p-3 rounded-md bg-gray-300 text-black"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
}
