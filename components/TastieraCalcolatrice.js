import React from "react";
import { View } from "react-native";
import BottoneCalcolatrice from "./BottoneCalcolatrice";
import { stiliTastiera } from "../styles/stile";

export default function TastieraCalcolatrice({
  // Funzioni per gestire le operazioni della calcolatrice
  inputNumero, 
  inputPunto, 
  eseguiOperazione, 
  pulisci, 
  aggiungiMemoria, 
  sottraiMemoria, 
  richiamaMemoria,
  cancellaMemoria, 
  eliminaUltimaCifra, 
}) {

  // Disposizione dei bottoni della tastiera
  const disposizioneTastiera = [
    [
      { testo: "M+", tipo: "funzione", onClick: aggiungiMemoria },
      { testo: "M-", tipo: "funzione", onClick: sottraiMemoria },
      { testo: "RM", tipo: "funzione", onClick: richiamaMemoria },
      { testo: "MC", tipo: "funzione", onClick: cancellaMemoria },
    ],
    [
      { testo: "C", tipo: "funzione", onClick: pulisci },
      { testo: "(", tipo: "operazione", onClick: () => inputNumero("(") },
      { testo: ")", tipo: "operazione", onClick: () => inputNumero(")") },
      { testo: "÷", tipo: "operazione", onClick: () => eseguiOperazione("/") },
    ],
    [
      { testo: "7", onClick: () => inputNumero(7) },
      { testo: "8", onClick: () => inputNumero(8) },
      { testo: "9", onClick: () => inputNumero(9) },
      { testo: "×", tipo: "operazione", onClick: () => eseguiOperazione("*") },
    ],
    [
      { testo: "4", onClick: () => inputNumero(4) },
      { testo: "5", onClick: () => inputNumero(5) },
      { testo: "6", onClick: () => inputNumero(6) },
      { testo: "-", tipo: "operazione", onClick: () => eseguiOperazione("-") },
    ],
    [
      { testo: "1", onClick: () => inputNumero(1) },
      { testo: "2", onClick: () => inputNumero(2) },
      { testo: "3", onClick: () => inputNumero(3) },
      { testo: "+", tipo: "operazione", onClick: () => eseguiOperazione("+") },
    ],
    [
      { testo: "⌫", tipo: "funzione", onClick: eliminaUltimaCifra },
      { testo: "0", onClick: () => inputNumero(0) },
      { testo: ".", onClick: inputPunto },
      { testo: "=", tipo: "operazione", onClick: () => eseguiOperazione("=") },
    ],
  ];

  // Creazione dei bottoni della tastiera
  const righe = [];
  for (let i = 0; i < disposizioneTastiera.length; i++) {
    const bottoniRiga = disposizioneTastiera[i];
    const bottoni = [];
    for (let j = 0; j < bottoniRiga.length; j++) {
      const propsBottone = bottoniRiga[j];
      bottoni.push(
        // Creazione bottoni dinamicamente
        React.createElement(BottoneCalcolatrice, { ...propsBottone, key: j }) 
      );
    }
    // Aggiunta della riga alla tastiera
    righe.push(
      React.createElement(View, { style: stiliTastiera.riga, key: i }, ...bottoni)
    );
  }

  // Creazione della tastiera (View principale)
  return React.createElement(View, { style: stiliTastiera.tastiera }, ...righe);
}