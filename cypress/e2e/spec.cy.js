describe('API Testing', () => {
  it('should make a request with timestamp and hash', () => {
    cy.generateTimestampAndHash().then(({ timestamp, publicKey, hash }) => {
      cy.api({
        method: 'GET',
        url: '/public/characters',
        qs: {
          ts: timestamp,
          apikey: publicKey,
          hash: hash,
        },
      }).its('status').should('equal', 200);
    });
  });
});
