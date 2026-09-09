# Wordle (Le Mot)

Projet de reproduction du jeu **Wordle** en français, développé dans le cadre d'un TP.

---

## 👨‍💻 Développeurs

* **Aymeric BEAUNE**
* **Timéo Baffreau Le Roux**

---

## 🎯 Fonctionnalités

* **Grille de jeu interactive** : 6 tentatives maximum pour deviner un mot secret.
* **Retour visuel par couleur** :
  * 🟩 **Vert** : lettre bien placée.
  * 🟧 **Jaune / Ambre** : lettre présente dans le mot mais mal placée.
  * ⬛ **Gris** : lettre absente du mot.
* **Double contrôle de saisie** : clavier virtuel à l'écran et clavier physique (`Enter`, `Backspace`, lettres).
* **Modales interactives** :
  * Écran d'accueil et règles du jeu (« Comment jouer »).
  * Écrans de fin de partie en cas de **victoire** ou de **défaite** avec option de rejouer.
* **Récupération dynamique du mot** via un appel API (`/api/word?lang=fr`).

---

## 🛠️ Stack Technique

* **Framework** : [React 19](https://react.dev/)
* **Langage** : [TypeScript](https://www.typescriptlang.org/)
* **Build Tool** : [Vite](https://vitejs.dev/)
* **Style** : [Tailwind CSS v4](https://tailwindcss.com/)
* **Icônes** : [React Icons](https://react-icons.github.io/react-icons/)

---

## 🚀 Installation & Démarrage

### 1. Cloner le dépôt et installer les dépendances

```bash
git clone <url-du-repo>
cd tp-wordle
npm install
```

### 2. Configuration d'environnement (optionnel)

Créez un fichier `.env` à la racine si une clé API est requise :

```env
VITE_API_KEY=votre_cle_api
```

### 3. Lancer l'application en mode développement

```bash
npm run dev
```

L'application sera accessible sur [http://localhost:5050](http://localhost:5050).

---

## 📦 Scripts disponibles

* `npm run dev` : Lance le serveur de développement Vite.
* `npm run build` : Vérifie les types TypeScript et compile le projet pour la production.
* `npm run preview` : Prévisualise le build de production localement.
* `npm run lint` : Analyse le code avec Oxlint.
```
