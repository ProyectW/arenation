import axios from "axios";

export const obtenerUsuarios = async (
  setUsuarios,
  setEjecutarUsuarios = () => {}
) => {
  const options = {
    method: "GET",
    url: "http://localhost:5000/usuarios/",
  };
  await axios.request(options).then(function (response) {
    setUsuarios(response.data);
    setEjecutarUsuarios(false);
  });
};

export const obtenerProductos = async (successCallback, errorCallback) => {
  const options = {
    method: "GET",
    url: "http://localhost:5000/productos/",
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const getusers = async (successCallback, errorCallback) => {
  const options = {
    method: "GET",
    url: "http://localhost:5000/users/",
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};
