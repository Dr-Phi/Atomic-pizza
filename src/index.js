import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import pizzaData from "./pizzaData";

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Atomic Pizzas</h1>
    </header>
  );
}

function Menu() {
  const numPizzas = pizzaData.length;

  return (
    <main className="menu">
      <h2>Nuestro Menu</h2>
      {numPizzas > 0 && (
        <>
          <p>
            La mejor cocina Italiana.
            <br />6 deliciosos platos para escoger. <br />
            Todos preparados con amor en nuestro horno tradicional, <br />
            con ingredientes frescos.
          </p>
          <ul className="pizzas">
            {pizzaData.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      )}
    </main>
  );
}

function Pizza({ pizzaObj }) {
  return (
    <li className={`pizza ${pizzaObj.soldOut && "sold-out"}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}</span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 14;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  return (
    <footer className="footer">
      {isOpen ? (
        <div className="order">
          <p>Estamos en servicio hasta las {closeHour}:00 </p>
          <button className="btn">Ordena Ahora</button>
        </div>
      ) : (
        <p>Te esperamos a las {openHour}:00 </p>
      )}
    </footer>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
