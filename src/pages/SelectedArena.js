import React from "react";
import ArenaHeader from "../components/Header/ArenaHeader";
import ArenaDetails from "../components/Details/ArenaDetails";
import ArenaReview from "../components/Reviews/ArenaReview";

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
                <ArenaReview
                    puntuacion="4.5"
                    comentarios={[
                        {avatar: '',
                        nombre:'Alexandra Perez', 
                        fecha:'Octubre de 2021', 
                        comentario: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium, lectus quis odio a amet pharetra, convallis mauris at. '
                        },
                        {avatar: '',
                        nombre:'Jose Ayazo', 
                        fecha:'Noviembre de 2021', 
                        comentario: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium, lectus quis odio a amet pharetra, convallis mauris at. '
                        },
                        {avatar: '',
                        nombre:'Andrés Gracia', 
                        fecha:'Julio de 2021', 
                        comentario: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium, lectus quis odio a amet pharetra, convallis mauris at. '
                        },
                        {avatar: '',
                        nombre:'Faber Hoyos', 
                        fecha:'Junio de 2021', 
                        comentario: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium, lectus quis odio a amet pharetra, convallis mauris at. '
                        }
                    ]}
                />
            </div>
        );
    }
}