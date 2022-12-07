---
title: Aufsetzen einer lokalen Entwicklungsumgebung
layout: layouts/article.njk
description: Ein Leitfaden zur Einrichtung einer lokalen Entwicklungsumgebung
level: get-started
---

# Aufsetzen einer lokalen Entwicklungsumgebung

Für den praktischen Teil dieses Kurses verwenden wir [Stackblitz](https://stackblitz.com), so dass du diesen Kurs nur mit dem Browser bearbeiten kannst.
Wenn du offline arbeiten möchtest, installierst du am besten eine lokale Entwicklungsumgebung.

## Schritte

- Installiere [NodeJS](https://nodejs.org)
- Installiere [Visual Studio Code](https://code.visualstudio.com/)
- Installiere [git](https://git-scm.com)
- Optional: Installiere einen graphischen git-Client wie zum Beispiel [GitHub Desktop](https://desktop.github.com/)

## Git einrichten

Als Erstes musst du deinen Namen und deine E-Mail-Adresse angeben. Bei einigen Git-Anbietern kannst du auch eine anonyme E-Mail-Adresse angeben, die du anstelle deiner eigentlichen E-Mail-Adresse verwenden kannst.

```sh
git config user.name "Lea Rosema"
git config user.email "lea@lea.codes"
```

## Auswahl einer Authentifizierungsmethode

Die beiden gängigsten Authentifizierungsmethoden sind HTTPS und SSH.

Bei HTTPS erstellst du ein Zugangs-Token für deinen Account und konfigurierst es in Git. 

Bei SSH musst du einen SSH-Schlüssel auf deinem Rechner erstellen und ihn zu deinem Git-Konto hinzufügen.

Auf Unix-Rechnern und in der Git-Bash für Windows kannst du mit `ssh-keygen` einen Schlüssel erstellen:

```sh
ssh-keygen -t ed25519 -C "your_email@example.com"
```

Eine dritte Möglichkeit ist die Authentifizierung über einen Auth-Provider und eine Drittanbieter-Anwendung, z. B. die GitHub CLI oder GitHub Desktop. Wenn du das Tool zum ersten Mal benutzt, wirst du zu deinem Konto weitergeleitet, wo du der Anwendung die Berechtigung gibst, in deinem Namen zu arbeiten.

## Git-Spickzettel

Gängige Git-Befehle sind:

```sh
# Klone das Repository auf deinen lokalen Rechner:
git clone repositoryUrl

# ziehe die neueste Version aus dem entfernten Repository
git pull

# Einen Commit mit Commit-Nachricht erzeugen
git commit -m "Changed global styles"

# alle Änderungen in das entfernte Git-Repository übertragen
git push

# zu einem bestehenden Zweig wechseln:
git switch branchName

# einen neuen Zweig erstellen
git switch -c branchName
```

If you did something terribly wrong, check out [https://ohshitgit.com](https://ohshitgit.com)


## Installiere die Abhängigkeiten und starte den Entwicklungsserver

```sh
npm install
npm run dev
```

## Ein neues React-Projekt erstellen

```sh
# Create a Vite React App
npm create vite@latest my-react-app -- --template react

# Create a Vite React App with TypeScript
npm create vite@latest my-react-app -- --template react-ts
```

Ausführlicher Guide auf [vitejs.dev](https://vitejs.dev).
