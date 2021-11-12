import { Fragment, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Navigation } from "swiper";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "./css/SelectedArenaGallery.css";
import { ReactComponent as CloseIcon } from "../../assets/img/closeIcon.svg";
export default function SelectedGalleryOverlay(props) {
    SwiperCore.use([Pagination, Navigation]);
    const cancelButtonRef = useRef(null);
    return (
        <Transition.Root show={props.isOpen} as={Fragment}>
            <Dialog
                as="div"
                className="fixed z-30 inset-0 overflow-y-auto"
                initialFocus={cancelButtonRef}
                onClose={props.setIsOpen}
            >
                <div className="flex max-h-screen px-8 sm:px-16 md:w-4/5 mx-auto">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Dialog.Overlay className="fixed inset-0 bg-secondary-dark bg-opacity-80 transition-opacity" />
                    </Transition.Child>

                    {/* This element is to trick the browser into centering the modal contents. */}
                    <span
                        className="inline-block h-screen align-middle"
                        aria-hidden="true"
                    >
                        &#8203;
                    </span>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        enterTo="opacity-100 translate-y-0 sm:scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                        leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    >
                        {/* <div className="inline-block p-4 bg-secondary-dark rounded-2xl overflow-hidden shadow-xl transform transition-all w-full h-/5"> */}
                        <div className="flex w-full relative p-4 my-8 overflow-hidden justify-center transition-all transform bg-secondary-dark shadow-xl rounded-2xl">
                            <button
                                className="absolute text-2xl right-4 top-4 z-50 text-white bg-secondary-light rounded-lg bg-opacity-20"
                                onClick={() => {
                                    props.setClickedImageIdx(0);
                                    props.setIsOpen(false);
                                }}
                            >
                                <CloseIcon className="fill-current text-primary-500" />
                            </button>
                            {props.images && props.images.length > 0 ? (
                                <Swiper
                                    tag="ul"
                                    pagination={{ clickable: true }}
                                    navigation
                                    spaceBetween={20}
                                    initialSlide={props.clickedImageIdx}
                                    observeParents
                                    observer
                                >
                                    {props.images.map((img, idx) => (
                                        <SwiperSlide tag="li" key={idx}>
                                            <img
                                                src={img}
                                                id={idx}
                                                alt={`imagen ${
                                                    idx + 1
                                                } del escenario ${
                                                    props.name
                                                } en ${props.location}`}
                                                className="w-full h-full object-contain bg-gray-100 rounded-lg select-none cursor-pointer px-0"
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
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition.Root>
    );
}
