const buildEmail = (personalizationText, content) => {
  const timestamp = new Date().toLocaleString('it-IT');

  return `
    <!DOCTYPE html>
    <html lang="it">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <style>
        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          line-height: 1.6;
          color: #333;
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
          background-color: #f9f9f9;
        }
        .container {
          background-color: white;
          border-radius: 8px;
          padding: 30px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        .header {
          border-bottom: 3px solid #4CAF50;
          padding-bottom: 15px;
          margin-bottom: 25px;
        }
        .personalization {
          background-color: #f0f8ff;
          border-left: 4px solid #4CAF50;
          padding: 15px;
          margin: 20px 0;
          border-radius: 4px;
          font-style: italic;
          color: #2c3e50;
        }
        .content-preview {
          background-color: #fafafa;
          border: 1px solid #ddd;
          padding: 20px;
          margin: 20px 0;
          border-radius: 4px;
          white-space: pre-wrap;
          word-break: break-word;
          font-size: 14px;
          max-height: 400px;
          overflow-y: auto;
        }
        .footer {
          text-align: center;
          margin-top: 30px;
          padding-top: 15px;
          border-top: 1px solid #eee;
          font-size: 12px;
          color: #999;
        }
        .divider {
          height: 1px;
          background-color: #eee;
          margin: 25px 0;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h2 style="margin: 0; color: #4CAF50;">📬 Messaggio per te</h2>
        </div>

        <div class="personalization">
          ${personalizationText.replace(/\n/g, '<br>')}
        </div>

        <div class="divider"></div>

        <h3 style="color: #2c3e50; margin-top: 20px;">📋 Anteprima Contenuto:</h3>
        <div class="content-preview">${content.replace(/\n/g, '<br>')}</div>

        <div class="footer">
          <p>Messaggio generato automaticamente il ${timestamp}</p>
          <p>© 2024 Mail Sender Bot</p>
        </div>
      </div>
    </body>
    </html>
  `;
};

module.exports = { buildEmail };
