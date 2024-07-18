import { CircleAlert } from "lucide-react";
import React from "react";

export default function EmptyState() {
  return (
    <div className="text-center w-full my-8 py-8 rounded-md">
      <div className="flex justify-center">
        <CircleAlert color="gray" size={32} />
      </div>
      <h2 className="text-xl mt-3 font-bold text-white mb-2">
        No Components Created Yet
      </h2>
      <p className="text-gray-500">
        Start creating components to see them here.
      </p>
    </div>
  );
}
