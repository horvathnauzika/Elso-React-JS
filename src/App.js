import { adatLista } from "./adatok";
import {useState} from "react";
import "./App.css";
import Kartyak from "./components/Kartyak";

function App() {
  /** state: Változó, program állapotát írja le, useState függvénnyel tudjuk beállítani az értékét, a react figyeli, hogy a state-nek mikor változik az állapota, amikor változik, akkor automatikusan frissíti az oldalnak azon részét. */
  const [kivalasztottLista, setkivalasztottLista]=useState([])
  //const kivalasztottLista=[]
  function kattKez(adat){
    /** ez a függvény fogja lekezelni a gyerekkomponenstől kapott infókat */
    /** State-k értékét közvetlenül nem módosíthatjuk, csak a hozzárendelt értékkel */
    console.log(adat)
    const ujLista=[...kivalasztottLista];
    ujLista.push(adat);
    setkivalasztottLista([...ujLista])
    console.log(kivalasztottLista)
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>Helló React</h1>
      </header>
      <main>
        <article>
          <Kartyak lista={adatLista} kattKez={kattKez}/>
        </article>
        <aside><h3>Kiválasztott könyvek</h3></aside>
        <Kartyak lista={kivalasztottLista} kattKez={kattKez}/>
        <footer>
          <p>Horváth Nauzika</p>
        </footer>
      </main>
    </div>
  );
}

export default App;
