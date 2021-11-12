import { useState } from "react";
import SelectedGalleryOverlay from "./SelectedGalleryOverlay";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "./css/SelectedArenaGallery.css";

export default function SelectedArenaGallery(props) {
    const [isGalleryOverlayOpen, setGalleryOverlayOpen] = useState(false);
    const [clickedImageIdx, setClickedImageIdx] = useState(0);
    const handleImageClick = (event) => {
        // console.log(event.target.id);
        setClickedImageIdx(event.target.id);
        setGalleryOverlayOpen(true);
    };
    SwiperCore.use([Pagination]);
    return (
        <>
            <div className="w-full flex px-8 py-8 sm:px-16 h-96">
                <div className="w-full hidden md:grid grid-cols-4 grid-rows-2 gap-4 h-full">
                    {props.data.images && props.data.images.length > 0 ? (
                        <>
                            <div className="col-span-2 row-span-2">
                                {props.data.images[0] ? (
                                    <img
                                        src={props.data.images[0]}
                                        id={0}
                                        alt={`imagen 1 del escenario ${props.data.arenaName} en ${props.data.arenaLocation}`}
                                        className="w-full h-full object-cover bg-gray-100 rounded-lg cursor-pointer"
                                        onClick={handleImageClick}
                                    />
                                ) : (
                                    <div className="w-full h-full object-cover bg-secondary-light rounded-lg"></div>
                                )}
                            </div>
                            <div className="col-span-1 row-span-1">
                                {props.data.images[1] ? (
                                    <img
                                        id={1}
                                        src={props.data.images[1]}
                                        alt={`imagen 2 del escenario ${props.data.arenaName} en ${props.data.arenaLocation}`}
                                        className="w-full h-full object-cover bg-gray-100 rounded-lg cursor-pointer"
                                        onClick={handleImageClick}
                                    />
                                ) : (
                                    <div className="w-full h-full object-cover bg-secondary-light rounded-lg"></div>
                                )}
                            </div>
                            <div className="col-span-1 row-span-1">
                                {props.data.images[2] ? (
                                    <img
                                        id={2}
                                        src={props.data.images[2]}
                                        alt={`imagen 3 del escenario ${props.data.arenaName} en ${props.data.arenaLocation}`}
                                        className="w-full h-full object-cover bg-gray-100 rounded-lg cursor-pointer"
                                        onClick={handleImageClick}
                                    />
                                ) : (
                                    <div className="w-full h-full object-cover bg-secondary-light rounded-lg cursor-pointer"></div>
                                )}
                            </div>
                            <div className="col-span-1 row-span-1">
                                {props.data.images[3] ? (
                                    <img
                                        id={3}
                                        src={props.data.images[3]}
                                        alt={`imagen 4 del escenario ${props.data.arenaName} en ${props.data.arenaLocation}`}
                                        className="w-full h-full object-cover bg-gray-100 rounded-lg cursor-pointer"
                                        onClick={handleImageClick}
                                    />
                                ) : (
                                    <div className="w-full h-full object-cover bg-secondary-light rounded-lg"></div>
                                )}
                            </div>
                            <div className="col-span-1 row-span-1">
                                {props.data.images[4] ? (
                                    <img
                                        id={4}
                                        src={props.data.images[4]}
                                        alt={`imagen 5 del escenario ${props.data.arenaName} en ${props.data.arenaLocation}`}
                                        className="w-full h-full object-cover bg-gray-100 rounded-lg cursor-pointer"
                                        onClick={handleImageClick}
                                    />
                                ) : (
                                    <div className="w-full h-full object-cover bg-secondary-light rounded-lg"></div>
                                )}
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="col-span-2 row-span-2 w-full h-full object-cover bg-secondary-light rounded-lg animate-pulse"></div>
                            <div className="col-span-1 row-span-1 w-full h-full object-cover bg-secondary-light rounded-lg animate-pulse"></div>
                            <div className="col-span-1 row-span-1 w-full h-full object-cover bg-secondary-light rounded-lg animate-pulse"></div>
                            <div className="col-span-1 row-span-1 w-full h-full object-cover bg-secondary-light rounded-lg animate-pulse"></div>
                            <div className="col-span-1 row-span-1 w-full h-full object-cover bg-secondary-light rounded-lg animate-pulse"></div>
                        </>
                    )}
                </div>
                <div className="w-full flex md:hidden select-none">
                    {props.data.images && props.data.images.length > 0 ? (
                        <Swiper
                            tag="ul"
                            pagination={{ clickable: true }}
                            spaceBetween={20}
                        >
                            {props.data.images.map((img, idx) => (
                                <SwiperSlide tag="li" key={idx}>
                                    <img
                                        src={img}
                                        id={idx}
                                        alt={`imagen 5 del escenario ${props.data.arenaName} en ${props.data.arenaLocation}`}
                                        className="w-full h-full object-cover bg-gray-100 rounded-lg select-none cursor-pointer"
                                        onClick={handleImageClick}
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    ) : (
                        /*
                            ToDo: 
                            - Agregar animacion de carga  
                        */
                        <h1>Hola</h1>
                    )}
                </div>
            </div>
            <SelectedGalleryOverlay
                isOpen={isGalleryOverlayOpen}
                setIsOpen={setGalleryOverlayOpen}
                clickedImageIdx={clickedImageIdx}
                setClickedImageIdx={setClickedImageIdx}
                images={props.data.images}
                name={props.data.arenaName}
                location={props.data.location}
            />
        </>
    );
}
