import { StyleSheet, Dimensions } from "react-native";

// Ottieni le dimensioni dello schermo
const { width, height } = Dimensions.get("window");

// Definizione dei colori per il tema "viola"
export const colori = {
  viola: {
    display: "#2D2D3A",
    sfondo: "#0A0A0A",
    testoDisplay: "#FFFFFF",
    sfondoBottone: "#f0f0f0",
    testoBottone: "#333333",
    sfondoBottoneFunzione: "#9370DB",
    testoBottoneFunzione: "#FFFFFF",
    sfondoBottoneOperazione: "#6A0DAD",
    testoBottoneOperazione: "#FFFFFF",
  },
};

// Stili principali dell'app
export const stiliApp = StyleSheet.create({
  contenitore: {
    flex: 1, // Occupa tutto lo spazio disponibile
    backgroundColor: colori.viola.sfondo, // Usa il colore di sfondo del tema viola
  },
  calcolatrice: {
    flex: 1,
    justifyContent: "flex-end", // Posiziona il contenuto in basso
  },
});

// Stili per il display della calcolatrice
export const stiliDisplay = StyleSheet.create({
  display: {
    height: height * 0.2, 
    padding: width * 0.05, 
    backgroundColor: colori.viola.display,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  testoDisplay: {
    color: colori.viola.testoDisplay,
    fontSize: width * 2, 
    fontWeight: "200", 
    textAlign: "right",
  },
});

// Stili per i bottoni della calcolatrice
export const stiliBottone = StyleSheet.create({
  bottone: {
    flex: 1,
    height: height * 0.1, 
    margin: width * 0.02, 
    borderRadius: width * 0.1, 
    alignItems: "center",
    justifyContent: "center",
  },
  testo: {
    fontSize: width * 0.08, 
    fontWeight: "500",
  },
});

// Stili per la tastiera della calcolatrice
export const stiliTastiera = StyleSheet.create({
  tastiera: {
    flex: 1,
    backgroundColor: colori.viola.sfondo, // Usa il colore di sfondo del tema viola
  },
  riga: {
    flexDirection: "row", 
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: height * 0.01, // Spazio tra le righe
  },
});

// Funzione per ottenere lo stile del bottone in base al tipo
export const ottieniStileBottone = (tipo) => {
  if (tipo === "funzione") {
    return {
      backgroundColor: colori.viola.sfondoBottoneOperazione,
      color: colori.viola.testoBottoneOperazione,
    };
  } else if (tipo === "operazione") {
    return {
      backgroundColor: colori.viola.sfondoBottoneFunzione,
      color: colori.viola.testoBottoneFunzione,
    };
  } else {
    return {
      backgroundColor: colori.viola.sfondoBottone,
      color: colori.viola.testoBottone,
    };
  }
};