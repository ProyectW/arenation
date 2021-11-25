import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import CardLogueo from "../components/LogOverlay";
import { getusers } from "../utils/Api/Users/Api.js";
import ValidarUsuario from "../utils/Api/Users/log.js";

const Datos = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getusers(
          (response) => {
            setUsers(response.data);
          },
          (error) => {
            return error
          }
        );
    });

    return users;
}

export default function LayoutAway(props) {
  const [footer, setFooter] = useState("UnLogged");
  const [onPress, setOnPress] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [card, setCard] = useState("login");
  const [email, setEmaili] = useState("");
  const [password, setPassword] = useState("");
  const [isLog, setIsLog] = useState(false);
  const [isAway, setIsAway] = useState(false);
  const datos = Datos();

  useEffect(() => {
    try {
      document.getElementById("register").addEventListener("click", () => {
        setCard("register");
        setIsOpen(true);
      });
      document.getElementById("registerfo").addEventListener("click", () => {
        setCard("register");
        setIsOpen(true);
      });
      document.getElementById("login").addEventListener("click", () => {
        setCard("login");
        setIsOpen(true);
      });
      document.getElementById("loginfo").addEventListener("click", () => {
        setCard("login");
        setIsOpen(true);
      });
      
    } catch {
      return "Error al abrir CardLogueo";
    }
  });

  if (onPress === true) {
    console.log("entra");
    if (email !== "" && password !== "") {
      const estado = ValidarUsuario(email, password, datos);
      if (estado === true) {
        setIsAway(true);
        setIsLog(true);
        setOnPress(false);
        setIsOpen(false);
        setFooter("UnLocal")
      } else {
        alert("Usuario no encontrado");
        setOnPress(false);
      }
    } else {
      setOnPress(false);
    }
  }

  return (
    <>
      <NavBar
        isLog={isLog}
        isLocal={false}
        isAway={isAway}
        openManager={false}
      />
      <CardLogueo
        option={card}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        setEmaili={setEmaili}
        setPassword={setPassword}
        setOnPress={setOnPress}
      />
      <main>{props.children}</main>
      <Footer footer={footer} />
    </>
  );
}
