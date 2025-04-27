import { StyleSheet } from "react-native";

// Definizione dei colori per il tema "viola"
export const colori = {
  viola: {
    //sfondo: "#2D2D3A", 
    sfondo: "#2D2D3A", 
    display: "#0A0A0A",
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
// StyleSheet è un modulo di React Native per definire gli stili
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
    height: 170, 
    padding: 20, 
    backgroundColor: colori.viola.display,
    justifyContent: "flex-end", 
    alignItems: "flex-end", 
    },
  testoDisplay: {
    color: colori.viola.testoDisplay, 
    fontSize: 70, 
    fontWeight: "200", // testo piu sottile
    textAlign: "right", 
  },
});

// Stili per i bottoni della calcolatrice
export const stiliBottone = StyleSheet.create({
  bottone: {
    flex: 1, 
    height: 70, 
    margin: 5, 
    borderRadius: 40, // Bottoni arrotondati
    alignItems: "center", 
    justifyContent: "center", 
  },
  testo: {
    fontSize: 30, 
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
    flexDirection: "row", // Disposizione orizzontale dei bottoni
    justifyContent: "space-between", 
    alignItems: "center", 
    marginBottom: 10, 
  },
});

// Funzione per ottenere lo stile del bottone in base al tipo
export const ottieniStileBottone = (tipo) => {

  // Se il tipo è "funzione", "operazione" o altro, restituisce lo stile corrispondente
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