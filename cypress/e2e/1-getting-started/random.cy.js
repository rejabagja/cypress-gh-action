describe('random spec', () => {
  it('random', () => {
    expect(true).to.be.true;
    expect(1).to.equal(1);
    expect(1).to.not.equal(2);
    expect(1).to.be.greaterThan(0);
    cy.request('https://jsonplaceholder.typicode.com/posts/1').as('post');
    cy.get('@post').should((response) => {
      expect(response.status).to.equal(200);
      expect(response).to.have.property('headers');
      expect(response).to.have.property('duration');
    });
  })
});