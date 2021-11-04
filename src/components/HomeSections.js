import Button from "./Controls/Buttons";
function IdealVenueSection() {
    return (
        <div className="px-8 py-16 sm:px-16 flex flex-col">
            <h2>Encuentra el escenario ideal para tu pr&oacute;ximo juego</h2>
            <div className="flex flex-col md:flex-row md:justify-between pt-9">
                <div
                    style={{
                        backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0) 51.04%, #000000 100%), url(${"https://i.imgur.com/ddJCpfF.jpg"})`,
                    }}
                    className="h-96 bg-cover cursor-pointer w-full md:flex-auto rounded-2xl flex flex-col justify-end mb-4 md:mb-0 md:mr-4"
                >
                    <div className="p-4 text-white">
                        <h3>Escenarios deportivos en Monter&iacute;a</h3>
                    </div>
                </div>
                <div
                    style={{
                        backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0) 51.04%, #000000 100%), url(${"https://i.imgur.com/Yx1yj24.jpg"})`,
                    }}
                    className="h-96 bg-cover cursor-pointer w-full md:flex-auto rounded-2xl flex flex-col justify-end"
                >
                    <div className="p-4 text-white">
                        <h3>Escenarios deportivos en San Pelayo</h3>
                    </div>
                </div>
                <div
                    style={{
                        backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0) 51.04%, #000000 100%), url(${"https://i.imgur.com/MoZQ4Gh.jpg"})`,
                    }}
                    className="h-96 bg-cover cursor-pointer w-full md:flex-auto rounded-2xl flex flex-col justify-end mt-4 md:mt-0 md:ml-4"
                >
                    <div className="p-4 text-white">
                        <h3>Escenarios deportivos en Sahag&uacute;n</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}

function LocalBannerAdsSection() {
    return (
        <div className="px-8 pb-16 sm:px-16 flex flex-col">
            <div
                style={{
                    backgroundImage: `linear-gradient(90deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 40%), url(${"https://images.pexels.com/photos/3799125/pexels-photo-3799125.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"})`,
                }}
                className="bg-cover bg-center w-full rounded-2xl flex p-16"
            >
                <div className="w-full md:w-1/3 flex flex-col ">
                    <h2 className="text-white pb-4 text-2xl md:text-3xl">
                        Juega de local y gestiona tu escenario de forma
                        inteligente
                    </h2>
                    <p className="text-white pb-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Totam, porro omnis eligendi sed tempore, necessitatibus
                        officia ad corporis, sit modi commodi facilis.
                        necessitatibus officia ad corporis, sit modi commodi
                        facilis.
                    </p>
                    <Button
                        type="normal"
                        text="M&aacute;s Informaci&oacute;n"
                        link="/"
                        handleClick={() => console.log("More Info Click")}
                    />
                </div>
            </div>
        </div>
    );
}

export { IdealVenueSection, LocalBannerAdsSection };
