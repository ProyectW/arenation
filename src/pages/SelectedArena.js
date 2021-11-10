import React from "react";
import ArenaHeader from "../components/Header/ArenaHeader";
import ArenaDetails from "../components/Details/ArenaDetails";
import ArenaReview from "../components/Reviews/ArenaReview";
import SelectedArenaGallery from "../components/Gallery/SelectedArenaGallery";
export default class SelectedArena extends React.Component {
    constructor() {
        super();
        this.state = {
            arenaData: {
                name: "Cancha Astral",
                score: 4.5,
                location: "Montería, Córdoba",
                isFav: true,
                type: "Fútbol",
                surfaceType: "cesped",
                localManagerAvatar:
                    "https://es.gravatar.com/userimage/194712154/18f91faeb0511ab57432decc5d49e6f2.jpg?size=36",
                localManagerName: "Jose Ayazo",
                description:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet,consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                facilities: [
                    "Vestuarios",
                    "Baños",
                    "Duchas",
                    "Bar",
                    "Restaurante",
                ],
                reviews: [
                    {
                        userAvatar:
                            "https://es.gravatar.com/userimage/194712154/18f91faeb0511ab57432decc5d49e6f2.jpg?size=36",
                        userName: "Alexandra Lopez",
                        date: "2021/02/12",
                        comment:
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium, lectus quis odio a amet pharetra, convallis mauris at.",
                    },
                    {
                        userAvatar:
                            "https://es.gravatar.com/userimage/194712154/18f91faeb0511ab57432decc5d49e6f2.jpg?size=36",
                        userName: "Carla Perez",
                        date: "2021/05/25",
                        comment:
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                    },
                ],
            },
        };
    }
    render() {
        return (
            <div className="pt-16 pb-44">
                <ArenaHeader
                    name={this.state.arenaData.name}
                    score={this.state.arenaData.score}
                    location={this.state.arenaData.location}
                    isFav={this.state.arenaData.isFav}
                />
                <SelectedArenaGallery
                    data={{
                        // images: [
                        //     "https://images.unsplash.com/photo-1543351611-58f69d7c1781?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
                        //     "https://images.unsplash.com/photo-1543351611-58f69d7c1781?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
                        //     "https://images.unsplash.com/photo-1543351611-58f69d7c1781?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
                        //     "https://images.unsplash.com/photo-1543351611-58f69d7c1781?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
                        //     "https://images.unsplash.com/photo-1543351611-58f69d7c1781?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
                        // ],
                        // images: [],
                        images: [
                            "https://images.unsplash.com/photo-1543351611-58f69d7c1781?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
                            "https://images.unsplash.com/photo-1487466365202-1afdb86c764e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=873&q=80",
                            "https://images.unsplash.com/photo-1543351611-58f69d7c1781?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
                            "https://images.unsplash.com/photo-1543351611-58f69d7c1781?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
                        ],
                        arenaName: this.state.arenaData.name,
                        arenaLocation: this.state.arenaData.location,
                    }}
                />
                <ArenaDetails
                    arenaType={this.state.arenaData.type}
                    description={this.state.arenaData.description}
                    surface={this.state.arenaData.surfaceType}
                    localManagerName={this.state.arenaData.localManagerName}
                    localManagerAvatar={this.state.arenaData.localManagerAvatar}
                    facilities={this.state.arenaData.facilities}
                />
                <ArenaReview
                    score={this.state.arenaData.score}
                    comments={this.state.arenaData.reviews}
                />
            </div>
        );
    }
}
