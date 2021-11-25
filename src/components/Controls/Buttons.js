import { Link } from "react-router-dom";
import { ReactComponent as CloseIcon } from "../../assets/img/closeIcon.svg";

export default function Button(props) {
  if (props.type === "normal") {
    return (
      <Link
        to={props.link}
        className={`text-center bg-primary-500 text-white font-semibold px-5 py-4 rounded-lg ${props.className}`}
      >
        <button id={props.id} onClick={props.handleClick}>
          {props.text}
        </button> 
      </Link>
    );
  } else if (props.type === "outline") {
    return (
      <Link className="w-full" to={props.link}>
        <button
          id={props.id}
          className={`text-${props.textColor} font-semibold outline-${props.color} px-5 py-4 rounded-lg ${props.className}`}
          onClick={props.handleClick}
        >
          {props.text}
        </button>
      </Link>
    );
  } else if (props.type === "normalWith") {
    return (
      <button
        id={props.id}
        type={props.tipo}
        className={`bg-primary-500 text-white font-semibold px-5 py-4 rounded-lg ${props.className}`}
        onClick={props.handleClick}
      >
        {props.text}
      </button>
    );
  } else if (props.type === "outlineWith") {
    return (
      <button
        id={props.id}
        className={`text-${props.textColor} font-semibold outline-${props.color} px-5 py-4 rounded-lg ${props.className}`}
        onClick={props.handleClick}
      >
        {props.text}
      </button>
    );
  } else if (props.type === "iconBtn") {
    return (
      <Link to={props.link}>
        <button
          className={`flex items-center justify-center text-${props.textColor} font-semibold outline-${props.color} px-5 py-4 rounded-lg ${props.className}`}
          onClick={props.handleClick}
        >
          <img
            className={`w-6 h-6 ${props.text ? "mr-2" : ""}`}
            alt={props.alt}
            src={props.children}
          />
          {props.text}
        </button>
      </Link>
    );
  } else if (props.type === "iconBtnwith") {
    return (
      <button
        className={`flex items-center justify-center text-${props.textColor} font-semibold outline-${props.color} px-5 py-4 rounded-lg ${props.className}`}
        onClick={props.handleClick}
      >
        <img
          className={`w-6 h-6 ${props.text ? "mr-2" : ""}`}
          alt={props.alt}
          src={props.children}
        />
        {props.text}
      </button>
    );
  } else if (props.type === "badgeBtn") {
    return (
      <Link to={props.link}>
        <button
          className={`flex items-center justify-center text-primary-500 font-semibold outline-${props.color} px-5 py-4 rounded-lg ${props.className}`}
          onClick={props.handleClick}
        >
          {props.text}
          <div className="bg-primary-500 text-white font-semibold px-2 ml-1 rounded-full">
            {props.count}
          </div>
        </button>
      </Link>
    );
  } else if (props.type === "infoBtn") {
    return (
      <Link to={props.link}>
        <div
          className={`flex flex-col p-2 bg-secondary-light text-secondary-dark rounded-lg ${props.className}`}
        >
          <label className="cursor-pointer font-semibold text-secondary-dark text-sm">
            {props.label}
          </label>
          <button
            id={props.id}
            onClick={props.onClick}
            className="text-justify py-1 bg-secondary-light text-secondary-dark text-sm"
          >
            {props.value}
          </button>
        </div>
      </Link>
    );
  } else if (props.type === "infoBtnLogo") {
    return (
      <div
        className={`flex flex-col md:flex-row items-center p-2 bg-secondary-light text-secondary-dark rounded-lg ${props.className}`}
      >
        <div className="flex flex-row p-1 w-max items-center justify-center mx-2 bg-white rounded-lg">
          <img alt={props.alt} src={props.children} />
        </div>
        <div className="flex flex-col w-full bg-secondary-light text-secondary-dark">
          <label className="font-semibold text-secondary-dark text-sm">
            {props.label}
          </label>
          <label className="text-justify py-1 bg-secondary-light text-secondary-gray text-sm">
            {props.value}
          </label>
        </div>
        <div className="flex items-center justify-end">
          <CloseIcon className="cursor-pointer" onClick={props.onClick} />
        </div>
      </div>
    );
  }
}
