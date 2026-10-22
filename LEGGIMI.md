# Sito Campnyla: come pubblicarlo (gratis, con GitHub Pages)

## Cosa c'è nella cartella
- `index.html`: la pagina. Non serve toccarla.
- `dati.js`: **l'unico file da modificare**. Contiene l'ID del canale, il testo "Adesso", la fase della colonia e il diario.
- `modello-3d.html`: il modello 3D interattivo.
- `img/`: logo, immagine del nido, anteprima del modello e immagine per le condivisioni.

## Pubblicazione, una volta sola
1. Crea un account su **github.com**: usa la mail del progetto e un nome utente neutro, per esempio `campnyla`.
2. Premi **New repository** e chiamalo `campnyla`. Deve essere **Public**: GitHub Pages gratis funziona solo con i repository pubblici.
3. Nel repository, premi **Add file → Upload files** e trascina **tutto il contenuto** di questa cartella (non la cartella stessa). Poi premi **Commit changes**.
4. Vai in **Settings → Pages**. In *Source* scegli **Deploy from a branch**, branch `main`, cartella `/ (root)`, e premi **Save**.
5. Dopo un paio di minuti il sito è online su `https://NOMEUTENTE.github.io/campnyla/`.

## Aggiornare il sito
Apri `dati.js` direttamente su GitHub (icona della matita), modificalo e premi **Commit changes**. Il sito si aggiorna in circa un minuto.

- **canale**: quando hai l'ID del canale (inizia con `UC`), mettilo tra le virgolette. Da quel momento la diretta compare nella pagina.
- **adesso**: una o due frasi su cosa sta succedendo.
- **fase**: `provetta`, `uova`, `larve`, `pupe` oppure `operaie`.
- **diario**: aggiungi una riga come quelle già presenti (data nel formato AAAA-MM-GG). Il giorno N si calcola da solo.

## Privacy
Nel sito non ci sono il tuo nome, il luogo o la tua mail. Il repository è pubblico: non caricarci `config.json` del Raspberry, chiavi o token.
