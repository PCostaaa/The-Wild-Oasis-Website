import { auth } from "../_lib/auth";
import Link from "next/link";
import { getBookings, getGuest } from "../_lib/data-service";

export const metadata = {
  title: "Guest area",
};

export default async function Page() {
  const session = await auth();
  const [bookings, guest] = await Promise.all([
    getBookings(session.user.guestId),
    getGuest(session.user.email),
  ]);

  const firstName = session.user.name.split(" ").at(0);
  const hasCompletedProfile = Boolean(guest?.nationality && guest?.nationalID);

  return (
    <div className="space-y-8">
      <div>
        <h2 className="font-semibold text-2xl text-accent-400 mb-2">
          Welcome, {firstName}
        </h2>

        <p className="text-primary-200 text-lg">
          Here is a quick overview of your guest area.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="border border-primary-800 bg-primary-900/40 p-6 rounded-sm">
          <p className="text-sm uppercase tracking-wide text-primary-300 mb-2">
            Reservations
          </p>
          <p className="text-3xl font-semibold text-accent-400 mb-1">
            {bookings.length}
          </p>
          <p className="text-primary-200">
            {bookings.length === 1
              ? "You currently have 1 booking."
              : `You currently have ${bookings.length} bookings.`}
          </p>
        </div>

        <div className="border border-primary-800 bg-primary-900/40 p-6 rounded-sm">
          <p className="text-sm uppercase tracking-wide text-primary-300 mb-2">
            Profile status
          </p>
          <p className="text-2xl font-semibold text-accent-400 mb-1">
            {hasCompletedProfile ? "Complete" : "Needs update"}
          </p>
          <p className="text-primary-200">
            {hasCompletedProfile
              ? "Your profile is ready for faster check-in."
              : "Add your nationality and ID to speed up check-in."}
          </p>
        </div>
      </div>
    </div>
  );
}
