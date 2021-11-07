import React from "react";

export default function Tittle(props) {
  return (
    <div className="flex flex-col w-full px-8 py-8 sm:px-16 text-secondary-dark">
      <h1>{props.title}</h1>
    </div>
  );
}
