# 📧 Mail Sender Bot

Bot per inviare email personalizzate con anteprima di contenuto da link.

## 🎯 Funzionalità

- ✅ Invia email con testo personalizzato
- ✅ Estrae contenuto da qualsiasi link (HTML)
- ✅ Mostra anteprima del contenuto nell'email
- ✅ Web dashboard intuitiva
- ✅ API REST per integrazione
- ✅ Totalmente su localhost

## 📋 Requisiti

- Node.js (v14+)
- npm
- Account Gmail (con app-password abilitata)

## 🚀 Installazione

### 1. Clona il repository

```bash
git clone https://github.com/giusepper22/mail-sender.git
cd mail-sender
```

### 2. Installa dipendenze

```bash
npm install
```

### 3. Configura variabili d'ambiente

```bash
cp .env.example .env
```

Edita `.env` con le tue credenziali:

```
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password
EMAIL_FROM=your-email@gmail.com
PORT=3000
```

### Come ottenere App Password di Gmail:

1. Vai su [myaccount.google.com/security](https://myaccount.google.com/security)
2. Attiva l'autenticazione a 2 fattori
3. Vai a "App password" e seleziona "Mail" e "Windows"
4. Copia la password generata nel `.env`

### 4. Avvia il bot

```bash
npm start
```

Il bot sarà disponibile su: **http://localhost:3000**

## 📖 Utilizzo

### Via Web Dashboard

1. Apri http://localhost:3000
2. Compila i campi:
   - **Email Destinatario**: l'email a cui inviare
   - **Testo Personalizzato**: il messaggio per il destinatario
   - **Link al Contenuto**: URL della pagina da estrarre
3. Clicca "Invia Email 🚀"

### Via API REST

```bash
curl -X POST http://localhost:3000/api/send-email \
  -H "Content-Type: application/json" \
  -d '{
    "recipientEmail": "destinatario@example.com",
    "personalizationText": "Ciao! Guarda questo contenuto che ti ho preparato!",
    "contentLink": "https://example.com/content"
  }'
```

## 📁 Struttura Progetto

```
mail-sender/
├── index.js                  # Entry point
├── package.json              # Dipendenze
├── .env.example              # Template variabili ambiente
├── controllers/
│   └── emailController.js    # Logica invio email
├── services/
│   ├── contentFetcher.js     # Estrae contenuto da link
│   └── emailBuilder.js       # Costruisce HTML email
└── public/
    └── index.html            # Dashboard web
```

## 🔧 Sviluppo

Per modalità development con auto-reload:

```bash
npm run dev
```

## 📚 API Endpoints

### POST /api/send-email

**Body:**
```json
{
  "recipientEmail": "destinatario@example.com",
  "personalizationText": "Messaggio personalizzato",
  "contentLink": "https://example.com/content"
}
```

**Response (Success):**
```json
{
  "success": true,
  "message": "Email sent successfully to destinatario@example.com"
}
```

**Response (Error):**
```json
{
  "success": false,
  "message": "Error description",
  "error": "detailed error"
}
```

### GET /api/health

Verifica lo stato del bot.

## 🐛 Troubleshooting

### "Error: Invalid login" / "Invalid password"
- Verifica di aver generato l'App Password correttamente da Gmail
- Assicurati che l'autenticazione 2FA sia abilitata

### "Cannot fetch content from link"
- Il link potrebbe non essere raggiungibile
- Verifica che il link sia valido
- Alcuni siti potrebbero bloccare i bot

### Email non ricevuta
- Controlla la cartella Spam
- Verifica che l'email sia scritta correttamente

## 📝 Esempi d'uso

### Esempio 1: Inviare articolo

```
Email: mario@example.com
Testo: "Ciao Mario! Ho trovato questo articolo interessante sulla blockchain. Leggi e condividi i tuoi pensieri!"
Link: https://en.wikipedia.org/wiki/Blockchain
```

### Esempio 2: Condividere notizia

```
Email: anna@example.com
Testo: "Buongiorno Anna! Guardati questa news importante riguardante il nostro progetto."
Link: https://techcrunch.com/article
```

## 📄 Licenza

MIT License

## 👨‍💻 Autore

guisepper22

---

**Fatto con ❤️ per il tuo primo progetto blockchain!**
