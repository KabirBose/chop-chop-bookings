"use client";

import Input from "./Input";

export default function BookingForm() {
  return (
    <form
      className="flex flex-col bg-gray-200 w-80 p-4 gap-5 rounded-md"
      method="POST"
    >
      <Input label="First Name" name="fname" type="text" />
      <Input label="Last Name" name="lname" type="text" />
      <Input label="Phone Number" name="number" type="tel" />
      <Input label="Email" name="email" type="email" />
      <button
        className="bg-light-3 p-3 rounded-md bg-gray-300 text-black"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
}
