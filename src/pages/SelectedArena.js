import React from "react";
import ArenaHeader from "../components/Header/ArenaHeader";
import ArenaDetails from "../components/Details/ArenaDetails";

export default class SelectedArena extends React.Component {
    render() {
        return (
            <div className="pt-16 pb-44">
                <ArenaHeader
                    name="Cancha Nuevo Mileneo"
                    puntuacion="4.5"
                    ubicacion="Montería, Córdoba"
                    favorito={true}/>
                <ArenaDetails
                    cancha="Fútbol"
                    cesped="Cesped Natural"
                    local="José Ayazo"
                    facilidades={['Vestuarios','Baños','Duchas','Bar','Restaurante']}/>
            </div>
        );
    }
}