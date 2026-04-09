"use client";

import { useState } from "react";

function BreakfastToggle({
  breakfastPricePerNight,
  numNights,
  defaultHasBreakfast = false,
}) {
  const [hasBreakfast, setHasBreakfast] = useState(defaultHasBreakfast);
  const breakfastCost = breakfastPricePerNight * numNights;

  return (
    <div className="space-y-2">
      <label className="block">Add breakfast?</label>

      <div className="flex flex-wrap items-center gap-4">
        <button
          type="button"
          onClick={() => setHasBreakfast((v) => !v)}
          className={`px-6 py-3 font-semibold transition-colors rounded-sm ${
            hasBreakfast
              ? "bg-accent-500 text-primary-800"
              : "bg-primary-200 text-primary-800 hover:bg-primary-300"
          }`}
        >
          {hasBreakfast ? "Yes, include breakfast" : "No breakfast"}
        </button>

        <span className="text-primary-300 text-base">
          {hasBreakfast ? (
            <>
              +${breakfastCost}{" "}
              <span className="text-primary-400 text-sm">
                ({numNights} {numNights === 1 ? "night" : "nights"} &times; $
                {breakfastPricePerNight} / night)
              </span>
            </>
          ) : (
            <span className="text-primary-400 text-sm">
              Would add +${breakfastCost} to your total
            </span>
          )}
        </span>
      </div>

      <input type="hidden" name="hasBreakfast" value={String(hasBreakfast)} />
      <input
        type="hidden"
        name="breakfastPricePerNight"
        value={breakfastPricePerNight}
      />
    </div>
  );
}

export default BreakfastToggle;
