import React from "react";
import ArenaHeader from "../components/Header/ArenaHeader";

export default class SelectedArena extends React.Component {
    render() {
        return (
            <div className="pt-16 pb-44">
                <ArenaHeader
                    name="Cancha Nuevo Mileneo"
                    puntuacion="4.5"
                    ubicacion="Montería, Córdoba"
                    favorito={true}/>
            </div>
        );
    }
}