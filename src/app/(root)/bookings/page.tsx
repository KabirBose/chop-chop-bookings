import BookingForm from "@/components/booking/BookingForm";
import Booking from "@/components/booking/Booking";

export default function Bookings() {
  return (
    <div className="flex justify-center items-center gap-32 h-screen">
      <BookingForm />
      <div className="flex flex-col justify-start items-start bg-gray-100 p-3 rounded-md gap-5 h-96 w-auto overflow-scroll">
        <Booking
          fname="Jamal"
          lname="Murray"
          number="4166734958"
          email="jamalmurray@hotmail.com"
        />
      </div>
    </div>
  );
}
