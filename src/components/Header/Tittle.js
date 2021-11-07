import React from "react";
import Button from "../Controls/Buttons";

export default function Tittle(props) {
  return (
    <div className="flex flex-col w-full px-8 py-8 sm:px-16 text-secondary-dark">
      <div className="pb-4 border-b border-secondary-dark opacity border-opacity-10">
        <h1>{props.title}</h1>
      </div>
    </div>
  );
}
export function TittleButton(props) {
  return (
    <div className="flex flex-col w-full px-8 py-8 sm:px-16 text-secondary-dark">
      <div className="pb-4 border-b border-secondary-dark opacity border-opacity-10">
        <h1 className="mb-3">{props.title}</h1>
        <Button
          type="outlineWith"
          color="blue"
          textColor="primary-500"
          text={props.text}
        />
      </div>
    </div>
  );
}
