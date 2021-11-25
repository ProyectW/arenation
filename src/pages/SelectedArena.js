import React from "react";
import ArenaHeader from "../components/Header/ArenaHeader";
import ArenaDetails from "../components/Details/ArenaDetails";
import ArenaReview from "../components/Reviews/ArenaReview";
import SelectedArenaGallery from "../components/Gallery/SelectedArenaGallery";
import SelectedArenaSchedule from "../components/Schedule/SelectedArenaSchedule";

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
                images: [
                    "https://images.unsplash.com/photo-1543351611-58f69d7c1781?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
                    "https://images.unsplash.com/photo-1487466365202-1afdb86c764e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=873&q=80",
                    "https://images.unsplash.com/photo-1543351611-58f69d7c1781?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
                    "https://images.unsplash.com/photo-1543351611-58f69d7c1781?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
                ],
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
                            "https://i.pinimg.com/originals/19/87/90/198790eb7e08830027c1ae1686496c72.png",
                        userName: "Alexandra Lopez",
                        date: "2021/02/12",
                        comment:
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium, lectus quis odio a amet pharetra, convallis mauris at.",
                    },
                    {
                        userAvatar:
                            "https://static.vecteezy.com/system/resources/previews/002/275/847/non_2x/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg",
                        userName: "Carla Perez",
                        date: "2021/05/25",
                        comment:
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                    },
                ],
                schedule: [
                    {
                        dayOfWeek: 0,
                        serviceHours: [7, 8, 9, 16, 17, 18, 19, 20, 21, 22],
                        serviceState: true,
                    },
                    {
                        dayOfWeek: 1,
                        serviceHours: [18, 19, 20, 21, 22, 23],
                        serviceState: true,
                    },
                    {
                        dayOfWeek: 2,
                        serviceHours: [7, 8, 9, 16, 17, 18, 19, 20, 21, 22],
                        serviceState: true,
                    },
                    {
                        dayOfWeek: 3,
                        serviceHours: [7, 8, 9, 16, 17, 18, 19, 20, 21, 22],
                        serviceState: true,
                    },
                    {
                        dayOfWeek: 4,
                        serviceHours: [7, 8, 9, 16, 17, 18, 19, 20, 21, 22],
                        serviceState: true,
                    },
                    {
                        dayOfWeek: 5,
                        serviceHours: [7, 8, 9, 16, 17, 18, 19, 20, 21, 22],
                        serviceState: true,
                    },
                    {
                        dayOfWeek: 6,
                        serviceHours: [7, 8, 9, 16, 17, 18, 19, 20, 21, 22],
                        serviceState: true,
                    },
                ],
                prices: {
                    priceSchedule: [
                        {
                            dayOfWeek: [0, 1, 2, 3, 4, 5, 6],
                            hoursOfDay: [18, 19, 20, 21, 22, 23],
                            price: 70000.0,
                        },
                        {
                            dayOfWeek: [0, 2, 3, 4, 5, 6],
                            hoursOfDay: [7, 8, 9, 16, 17],
                            price: 60000.0,
                        },
                    ],
                    isFixedPrice: false,
                    fixedPrice: 25000.0,
                },
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
                        images: this.state.arenaData.images,
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
                <SelectedArenaSchedule
                    schedule={this.state.arenaData.schedule}
                    prices={this.state.arenaData.prices}
                />
                <ArenaReview
                    score={this.state.arenaData.score}
                    comments={this.state.arenaData.reviews}
                />
            </div>
        );
    }
}
