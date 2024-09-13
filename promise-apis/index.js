const p1 = new Promise((resolve, reject) => {
    // setTimeout(() => resolve('P1 Success'), 3000);
    setTimeout(() => reject('P1 Fail'), 3000);
});

const p2 = new Promise((resolve, reject) => {
    // setTimeout(() => resolve('P2 Success'), 1000);
    setTimeout(() => reject('P2 Fail'), 1000);
});

const p3 = new Promise((resolve, reject) => {
    // setTimeout(() => resolve('P3 Success'), 2000);
    setTimeout(() => reject('P3 Fail'), 2000);
});

// async function getResult() {
//     // const result = await Promise.all([p1, p2, p3]);
//     // const result = await Promise.allSettled([p1, p2, p3]);
//     // const result = await Promise.race([p1, p2, p3]);
//     // const result = await Promise.any([p1, p2, p3]);
//     console.log(result);
// }

const subscriptionKey = 'b6af12e6c16c4f1c979ce03a1ef893f7';

async function getAzureDate() {
    const result = await fetch('https://eastus.api.cognitive.microsoft.com/speechtotext/v3.0/transcriptions', {
      method: 'POST',
      headers: {
        'Ocp-Apim-Subscription-Key': subscriptionKey,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "contentUrls": [
          "https://dev-just-connect.s3.amazonaws.com/transcription/a11b3be2-49db-40b4-916b-ceb6d9a1c84d/archive.wav?AWSAccessKeyId=AKIA6NFDWGU3OAHC55WL&Expires=1700569399&Signature=96QHWPnhvilSel0FINmmmQzltYs%3D"
        ],
        "locale": "en-US",
        "displayName": "My Transcription",
        "model": null,
        "properties": {
          "wordLevelTimestampsEnabled": false,
          "diarizationEnabled": true,
          "OutputFormat": "Simple",
          "languageIdentification": {
            "candidateLocales": [
              "en-US", "de-DE", "es-ES"
            ]
          }
        }
      }),
    });
    const data = await result.json();
    console.log(data);
}

// getResult().catch((err) => {
//     console.log(err);
//     console.log(err.errors);
// });

// getAzureDate().catch((err) => {
//     console.log('Error ', err);
// });
