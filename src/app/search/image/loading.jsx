import { Fragment } from "react";

export default function loading() {
  const reps = 4;

  const pulseLoading = Array.from({ length: reps }, (_, i) => (
    <Fragment key={i}>
      <div className="animate-pulse">
        <div className="h-48 w-48 mb-4 bg-gray-200 rounded-md"></div>
        <div className="h-2 w-48 mb-2.5 bg-gray-200 rounded-md"></div>
        <div className="h-2 w-44 mb-2.5 bg-gray-200 rounded-md"></div>
      </div>
    </Fragment>
  ));

  return (
    <div className="flex flex-col sm:flex-row sm:space-x-4 pt-10 pb-42 mx-2 lg:pl-52 max-w-6xl">
      {pulseLoading}
    </div>
  );
}
