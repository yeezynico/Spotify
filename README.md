# 🎵 SPOTIFY - Projet Web@cadémie

## 📝 Description

**SPOTIFY** est une application web réalisée en **7 jours** dans le cadre d’un projet à la **Web@cadémie**, en binôme avec :

- **Nicolas Vanbreusegem**
- **Malick Baguiri**

Le but était de recréer une version simplifiée de Spotify, avec des fonctionnalités essentielles, en utilisant :

- **React** pour le front-end  
- **Node.js** et **Express** pour le back-end  
- **MySQL** comme base de données  
- **Docker** pour l’environnement de développement  

Le front-end utilise un design inspiré du **neumorphisme**.

---

## ⚙️ Technologies utilisées

- React  
- Node.js  
- Express  
- MySQL  
- HTML / CSS  
- Docker & Docker Compose  

---

## 💡 Fonctionnalités

- 🔐 Inscription avec enregistrement en base MySQL  
- 🔑 Connexion sécurisée avec JWT  
- 🎧 Accueil avec sélection aléatoire d’albums  
- 👨‍🎤 Page Artistes avec fiche détaillée  
- 💿 Page Albums similaire à celle des artistes  
- 🙍‍♂️ Page Profil affichant l’email de l’utilisateur  
- 🎵 Page Genres  
- 🔎 Barre de recherche  
- 📄 Pagination dynamique  

---

## 🐳 Lancer le projet avec Docker

### 1. Construction et lancement avec Docker Compose  
`sudo docker compose build`  
*ou en version courte :*  
`sudo docker compose -b`

### 2. Lancer les services  
`sudo docker compose up`

### 3. Commandes pour lancer manuellement le back-end (dans server)  
`cd server`  
`node index.js`

### 4. Lancer le front  
`npm run dev`

---

## 📦 Dépendances à installer

`npm install mysql2`  
`npm install bcryptjs`  
`npm install jsonwebtoken`  
`npm install dotenv`  
`npm install jwt-decode` *(pour décoder le JWT de l'adresse mail)*  
`npm install axios`

---

## 📁 Structure du projet

`/client` → Front-End React  
`/server` → Back-End Node.js + Express  
`/dockerfile` → Configuration Docker  
`/docker-compose.yml` → Orchestration Docker  

---

## 👨‍💻 Auteurs

- **Nicolas Vanbreusegem**  
- **Malick Baguiri**
