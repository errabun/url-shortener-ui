describe('UrlContainer', () => {

  beforeEach(() => {

    cy.intercept('http://localhost:3001/api/v1/urls', {
      'urls': [
        {
          "id": 1,
          "long_url": "https://images.unsplash.com/photo-1531898418865-480b7090470f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
          "short_url": "http://localhost:3001/useshorturl/1",
          "title": "Awesome photo"
        }
      ]
    })
      .visit('http://localhost:3000/')
  })

  it('When a user visits the page, they can view the exisiting shortened URLs', () => {

    cy.get('.url-title').should('be.visible')
      .and('have.text', 'Awesome photo')
      .get('.short-url').should('be.visible')
      .and('have.text', 'http://localhost:3001/useshorturl/1')
      .get('.long-url').should('be.visible')
      .and('have.text', 'https://images.unsplash.com/photo-1531898418865-480b7090470f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80')
  })
})
