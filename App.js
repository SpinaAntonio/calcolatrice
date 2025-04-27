import React, { useState } from "react";
import { View, SafeAreaView, StatusBar } from "react-native";
import DisplayCalcolatrice from "./components/DisplayCalcolatrice";
import TastieraCalcolatrice from "./components/TastieraCalcolatrice";
import { stiliApp } from "./styles/stile";

export default function App() {

  // Stato per il valore visualizzato e la stringa dell'operazione
  const [valoreDisplay, setValoreDisplay] = useState("0");
  const [stringaOperazione, setStringaOperazione] = useState("");
  const [valoreMemoria, setValoreMemoria] = useState(0);

  // Funzione per pulire il display e la stringa dell'operazione
  const pulisci = () => {
    setValoreDisplay("0");
    setStringaOperazione("");
  };

  // Funzione per gestire l'input dei numeri
  const inputNumero = (numero) => {

    // Controlla se il numero è già presente nel display
    if (valoreDisplay === "0" && numero !== 0) {
      setValoreDisplay(String(numero));
      setStringaOperazione(String(numero));

    } else {
      setValoreDisplay(valoreDisplay + numero);
      setStringaOperazione(stringaOperazione + numero);
    }
  };

  // Funzione per gestire l'input del punto decimale
  const inputPunto = () => {
    // Controlla se il punto è già presente nel display
    if (!valoreDisplay.includes(".")) {
      setValoreDisplay(valoreDisplay + ".");
      setStringaOperazione(stringaOperazione + ".");
    }
  };

  // Funzione per eseguire le operazioni
  const eseguiOperazione = (operazione) => {

    // Controlla se l'operazione è valida
    if (operazione === "=") {
      try {
        // Prende una stringa come espressione e la esegue
        const risultato = eval(stringaOperazione);

        setValoreDisplay(String(risultato));
        setStringaOperazione(String(risultato));

      } catch (errore) {
        setValoreDisplay("Errore");
        setStringaOperazione("");
      }
    } else {
      setValoreDisplay(valoreDisplay + operazione);
      setStringaOperazione(stringaOperazione + operazione);
    }
  };

  // Funzione per eliminare l'ultima cifra
  const eliminaUltimaCifra = () => {

    if (valoreDisplay.length > 1) {
      // Se il display ha più di un carattere, elimina l'ultimo
      setValoreDisplay(valoreDisplay.slice(0, -1));
      setStringaOperazione(stringaOperazione.slice(0, -1));
    } else {
      setValoreDisplay("0");
      setStringaOperazione("");
    }
  };

  // Funzioni per la memoria
  // Aggiungi, sottrai, richiama e cancella memoria

  const aggiungiMemoria = () => {
    setValoreMemoria(valoreMemoria + parseFloat(valoreDisplay));
  };

  const sottraiMemoria = () => {
    setValoreMemoria(valoreMemoria - parseFloat(valoreDisplay));
  };

  const richiamaMemoria = () => {
    setValoreDisplay(String(valoreMemoria));
    setStringaOperazione(String(valoreMemoria));
  };

  const cancellaMemoria = () => {
    setValoreMemoria(0);
  };

  // Renderizza il componente principale
  // con il display e la tastiera
  return React.createElement(
    SafeAreaView,
    { style: stiliApp.contenitore },
    React.createElement(StatusBar, { barStyle: "light-content" }),
    React.createElement(
      View,
      { style: stiliApp.calcolatrice },
      
      // Display della calcolatrice
      React.createElement(DisplayCalcolatrice, { valore: valoreDisplay }),
      
      // Tastiera della calcolatrice
      React.createElement(TastieraCalcolatrice, {
        inputNumero,
        inputPunto,
        eseguiOperazione,
        pulisci,
        aggiungiMemoria,
        sottraiMemoria,
        richiamaMemoria,
        cancellaMemoria,
        eliminaUltimaCifra,
      })
    )
  );
}