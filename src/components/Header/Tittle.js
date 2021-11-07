import React from "react";

export default function Tittle(props) {
  return (
    <div className="flex flex-col w-full px-8 py-8 sm:px-16 text-secondary-dark">
      <h1 className="pb-4 border-b border-secondary-dark opacity border-opacity-10">{props.title}</h1>
    </div>
  );
}
