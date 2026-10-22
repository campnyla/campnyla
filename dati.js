// ============================================================
//  DATI DEL SITO: modifica solo questo file per aggiornarlo
// ============================================================
window.CAMPNYLA = {
  // ID del canale YouTube (Studio > Impostazioni > Canale > Impostazioni avanzate). Inizia con "UC".
  // Finche' e' vuoto, al posto della diretta si vede l'ultima immagine del nido.
  canale: "",
  handle: "@Campnyla",

  // giorno 1 = giorno della cattura della regina
  inizio: "2026-10-11",

  // riquadro "Adesso" in cima alla pagina: una o due frasi
  adesso: "La regina è ancora nella provetta di cattura. Il nido è pronto e acceso: nei prossimi giorni la spostiamo dentro, in diretta.",

  // fase attuale: "provetta" | "uova" | "larve" | "pupe" | "operaie"
  fase: "provetta",

  // diario: il piu' recente in alto o in basso, non importa (viene ordinato per data)
  diario: [
    { data: "2026-10-11", titolo: "Cattura della regina", testo: "La regina di Camponotus nylanderi va in una provetta con acqua e cotone, al buio e senza cibo." },
    { data: "2026-10-17", titolo: "Nido stampato e montato", testo: "Base, cappa nera e supporti stampati in 3D, camera di fondazione chiusa da plexiglass da 3 mm." },
    { data: "2026-10-21", titolo: "Prima accensione della camera", testo: "Quattro LED a infrarosso, messa a fuoco a 66 mm, timelapse di una foto al minuto." },
  ],
};
