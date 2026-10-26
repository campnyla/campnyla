# Sito Campnyla: come pubblicarlo (gratis, con GitHub Pages)

## Cosa c'è nella cartella
- `index.html`: la pagina. Non serve toccarla.
- `dati.js`: valori di partenza (ID del canale, data d'inizio). Il resto lo manda il Raspberry.
- `modello-3d.html`: il modello 3D interattivo.
- `img/`: logo, immagine del nido, anteprima del modello e immagine per le condivisioni.

## Pubblicazione, una volta sola
1. Crea un account su **github.com**: usa la mail del progetto e un nome utente neutro, per esempio `campnyla`.
2. Premi **New repository** e chiamalo `campnyla`. Deve essere **Public**: GitHub Pages gratis funziona solo con i repository pubblici.
3. Nel repository, premi **Add file → Upload files** e trascina **tutto il contenuto** di questa cartella (non la cartella stessa). Poi premi **Commit changes**.
4. Vai in **Settings → Pages**. In *Source* scegli **Deploy from a branch**, branch `main`, cartella `/ (root)`, e premi **Save**.
5. Dopo un paio di minuti il sito è online su `https://NOMEUTENTE.github.io/campnyla/`.

## Aggiornare il sito
Non serve toccare GitHub: si fa tutto dalla pagina di controllo del Raspberry.
- **Diario**: ogni evento pubblicato va sul sito, con la sua foto. La fase della colonia si aggiorna da sola
  (Prime uova → Uova, Prime larve → Larve, Prime pupe → Pupe, Prima operaia → Prime operaie).
- **Sistema › Collegamento al sito**: interruttore attivo/sospeso e ID del canale YouTube.
Il Raspberry scrive `stato.json` e le foto degli eventi in `eventi/`.

## Privacy
Nel sito non ci sono il tuo nome, il luogo o la tua mail. Il repository è pubblico: non caricarci `config.json` del Raspberry, chiavi o token.
