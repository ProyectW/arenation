import NavBar from "./components/NavBar";
import Card from "./components/ArenaCard";
import Footer from "./components/Footer";
function App() {
    return (
        <>
            <NavBar />
            <img
                src={
                    "https://images.unsplash.com/photo-1531861184681-f2de7dd72da5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"
                }
                alt=""
                className="w-full"
            />
            <img
                src={
                    "https://images.unsplash.com/photo-1531861184681-f2de7dd72da5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"
                }
                alt=""
                className="w-full"
            />
            <img
                src={
                    "https://images.unsplash.com/photo-1531861184681-f2de7dd72da5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"
                }
                alt=""
                className="w-full"
            />
            <Card
                nombre="Cancha San Martín"
                disponible={3}
                puntuacion={3.9}
                ubicacion="San Pelayo, B/San Martín"
                precio={70000}
            />
            <Footer/>
        </>
    );
}

export default App;
