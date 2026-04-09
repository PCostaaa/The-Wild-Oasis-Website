"use client";

import { XMarkIcon } from "@heroicons/react/24/solid";
import { format } from "date-fns";
import { useReservation } from "@/app/_components/ReservationContext";

function ReservationReminder() {
  const { range, resetRange } = useReservation();

  if (!range.from || !range.to) return null;

  return (
    <div className="fixed bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 w-[calc(100%-1.5rem)] sm:w-auto max-w-3xl py-4 sm:py-5 px-4 sm:px-8 rounded-2xl sm:rounded-full bg-accent-500 text-primary-800 font-semibold shadow-xl shadow-slate-900 flex items-start sm:items-center justify-between gap-4 sm:gap-8">
      <p>
        <span>👋</span> Don&apos;t forget to reserve your dates from{" "}
        {format(new Date(range.from), "MMM dd yyyy")} to{" "}
        {format(new Date(range.to), "MMM dd yyyy")}
      </p>
      <button
        className="rounded-full p-1 hover:bg-accent-600 transition-all"
        onClick={resetRange}
      >
        <XMarkIcon className="h-5 w-5" />
      </button>
    </div>
  );
}

export default ReservationReminder;
