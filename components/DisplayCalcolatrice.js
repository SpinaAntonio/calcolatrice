import React from "react";
import { Text, View } from "react-native";
import { stiliDisplay } from "../styles/stile";

// Componente per il display della calcolatrice
export default function DisplayCalcolatrice({ valore }) {

  // contenitoreDisplay è un elemento View che contiene il testo del display
  const contenitoreDisplay = React.createElement(
    View,
    { style: stiliDisplay.display },
    React.createElement(
      Text,
      {
        // Il numero di righe è limitato a 1 e il font si adatta alla dimensione del display
        style: stiliDisplay.testoDisplay,
        numberOfLines: 1,
        adjustsFontSizeToFit: true,
      },
      // Il valore del display è passato come 'proprietà' al componente
      valore
    )
  );

  return contenitoreDisplay;
}
