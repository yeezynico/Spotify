require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
const jwt = require('jsonwebtoken');

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: '',
    password: '',
    database: 'spotify',
});

db.connect(err => {
    if (err) {
        console.error('erreur de connexion à MySQL:', err);
    } else {
        console.log('connecté à MySQL');
    }
});

app.get('/api', (req, res) => {
    res.json({ message: 'bienvenue sur l\'API chef !' });
});


app.post('/api/register', (req, res) => {
    console.log(' données recue:', req.body);

    const { email, password } = req.body;

    if (!email || !password) {
        console.log(' email ou mot de passe vide');
        return res.json({ message: 'email et mot de passe sont requis' });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        console.log(' email invalide:', email);
        return res.json({ message: 'email invalide' });
    }

    if (password.length < 6) {
        console.log(' mot de passe trop court:', password.length);
        return res.json({ message: 'le mot de passe doit avoir au moins 6 caractères' });
    }

    console.log(' Données valides, enregistrement en cours...');

    db.query('INSERT INTO users (email, password) VALUES (?, ?)', [email, password], (err) => {
        if (err) {

            if (err.code === 'ER_DUP_ENTRY') {
                console.log('Erreur : Email déjà existant');
                return res.json({ message: 'Cet email est déjà utilisé' });
            }

            console.log(' erreur MySQL:', err);
            return res.json({ message: 'erreur lors de l\'inscription' });
        }
        console.log(' utilisateur créé:', email);
        res.json({ message: 'utilisateur créé' });
    });
});

app.post('/api/login', (req, res) => {
    console.log("donnée reçue :", req.body);

    const { email, password } = req.body;

    if (!email || !password) {
        console.log("email ou mot de passe manquant");
        return res.json({ message: 'email et mot de passe sont requis' });
    }

    db.query('SELECT * FROM users WHERE email = ?', [email], (err, results) => {
        if (err) {
            console.log('Erreur MySQL :', err);
            return res.json({ message: 'erreur lors de la connexion' });
        }

        if (results.length === 0) {
            console.log('email incorrect');
            return res.json({ message: 'email incorrect' });
        }

        if (results[0].password !== password) {
            console.log('mot de passe incorrect');
            return res.json({ message: 'mot de passe incorrect' });
        }

        const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: '1h' });
        console.log('connexion réussie pour :', email);

        return res.json({ message: 'connexion réussie', token });
    });
});

app.get('/api/user/:email',  (req, res) => {
    const { email } = req.params;
    console.log('AAAAAJAJJAJAJAJJAJAJJAJAJAJAJAJAJAJAAJAJ : ', email)

    db.query('SELECT email FROM users WHERE email = ?', [email], (err, email) => {
        if(!email){
            console.log(err);
        }else{
            console.log('ON TEEEEEEEST :', email);
            return res.json(email);
        }

    });
});

app.listen(8081, () => {
    console.log('serveur démarré sur le port 8081');
});