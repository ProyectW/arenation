import Button from "../Controls/Buttons";
import Avatar from "../Avatars/Avatar";
import Logo from "../../assets/img/logo.svg";
import OverlayLogin from "../LogOverlay";
import { ReactComponent as MenuIcon } from "../../assets/img/menuIcon.svg";
import { ReactComponent as CloseIcon } from "../../assets/img/closeIcon.svg";
import { useLocation, Link } from "react-router-dom";
import { Transition, Menu } from "@headlessui/react";

import { Fragment, useState } from "react";

export default function UnLoggedNavBar(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [transparentNav, setTransparentNav] = useState(true);
  const [isOverlayOpen, setOverlayOpen] = useState(false);
  const location = useLocation();

  const changeBackground = () => {
    if (location.pathname === "/") {
      if (window.scrollY >= 20) {
        setTransparentNav(false);
      } else {
        setTransparentNav(true);
      }
    } else {
      setTransparentNav(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <>
      <nav
        className={`bg-white ${
          transparentNav
            ? "bg-opacity-0 shadow-none"
            : "bg-opacity-100 shadow-md"
        } fixed left-0 right-0 z-20`}
      >
        <div className="px-8 py-2 sm:px-16 flex justify-between items-center">
          <Link to="/">
            <img src={Logo} alt="Arenation Logo" />
          </Link>
          <div className="hidden md:flex items-center">
            <Button
              id="login"
              type="outlineWith"
              handleClick={handleClick}
              text="Iniciar Sesión"
              className="mr-2"
              color="blue"
              textColor="primary-500"
            />
            <Button
              id="register"
              type="normalWith"
              handleClick={handleClick}
              text="Registrate"
              className="mr-2"
            />
            <Menu as="div" className="z-20 flex justify-center items-center">
              <Menu.Button>
                <Avatar isLogged={false} />
              </Menu.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="flex flex-col divide-y-2 divide-secondary-gray divide-opacity-20 origin-top-right absolute right-16 top-20 rounded-md shadow-md pl-3 py-4 pr-4 bg-white focus:outline-none">
                  <p id="btnR" className="pb-1">
                    Registrarse
                  </p>
                  <p id="btnIniciar" className="pb-1 cursor-pointer">
                    Iniciar sesi&oacute;n
                  </p>
                  <p className="">Ser local</p>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
          <button className="p-3 md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {!isOpen ? (
              <MenuIcon className="fill-current text-primary-500 w-7" />
            ) : (
              <CloseIcon className="fill-current text-primary-500 w-7" />
            )}
          </button>
        </div>
        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden px-8 sm:px-16 py-4 ">
              <div className="w-full flex flex-col divide-y-2 divide-secondary-gray divide-opacity-20 justify-start items-end bg-white p-4 rounded-2xl">
                <div className="flex items-center justify-end w-full">
                  <span
                    className="pr-2 cursor-pointer"
                    onClick={() => setOverlayOpen(true)}
                  >
                    Iniciar sesión
                  </span>
                  <Avatar isLogged={false} className="mb-2" />
                </div>
                <div className="flex items-center justify-center w-full pt-2">
                  <Button
                    type="normal"
                    handleClick={handleClick}
                    text="Registrate"
                    className="mr-2"
                    link="/"
                  />
                  <Button
                    type="outline"
                    handleClick={handleClick}
                    text="Quiero ser local"
                    color="blue"
                    textColor="primary-500"
                    link="/"
                  />
                </div>
              </div>
            </div>
          )}
        </Transition>
      </nav>
      <OverlayLogin
        isOpen={isOverlayOpen}
        setIsOpen={setOverlayOpen}
        option="login"
      />
    </>
  );
}

function handleClick(e) {
  return e;
}
