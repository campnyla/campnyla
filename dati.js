// ============================================================
//  DATI DI PARTENZA DEL SITO
//  Fase, ID canale ed eventi del diario li manda il Raspberry (stato.json):
//  questo file serve solo come base finche' stato.json non c'e'.
// ============================================================
window.CAMPNYLA = {
  // ID del canale YouTube (Studio > Impostazioni > Canale > Impostazioni avanzate). Inizia con "UC".
  // Finche' e' vuoto, al posto della diretta si vede l'ultima immagine del nido.
  canale: "",
  handle: "@Campnyla",

  // data della foto fissa img/nido.jpg, mostrata quando la diretta non c'e'
  foto_data: "2026-10-21",

  // giorno 1 = giorno della cattura della regina
  inizio: "2026-10-11",

  // fase iniziale: poi la calcola il Raspberry dagli eventi del diario
  fase: "provetta",

  // il diario lo scrive il Raspberry
  diario: [],
};
