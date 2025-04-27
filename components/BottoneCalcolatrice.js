import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { stiliBottone, ottieniStileBottone } from "../styles/stile";

// BottoneCalcolatrice è un bottone personalizzato per la calcolatrice
export default function BottoneCalcolatrice({ onClick, testo, tipo = "default", dimensione = "normale" }) {

  // Lo stile del bottone viene determinato in base al tipo
  const stileTipoBottone = ottieniStileBottone(tipo);

  const stileBottone = [
    stiliBottone.bottone,
    { backgroundColor: stileTipoBottone.backgroundColor },
  ];

  const stileTesto = [
    stiliBottone.testo,
    { color: stileTipoBottone.color },
  ];

  return React.createElement(
    TouchableOpacity,
    {
      style: stileBottone,
      onPress: onClick,
    },
    React.createElement(Text, { style: stileTesto }, testo)
  );
}
