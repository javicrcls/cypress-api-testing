import { MD5 } from 'crypto-js';

Cypress.Commands.add('generateTimestampAndHash', () => {
    const timestamp = new Date().getTime();
    const publicKey = Cypress.env('apikey'); // Replace with your actual public key
    const privateKey = Cypress.env('privatekey'); // Replace with your actual private key
    const hash = MD5(timestamp + privateKey + publicKey).toString();
  
    return { timestamp, publicKey, hash };
  });
  