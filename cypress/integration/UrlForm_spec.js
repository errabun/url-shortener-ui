describe('UrlForm', () => {

  beforeEach(() => {

    cy.intercept('http://localhost:3001/api/v1/urls', {
      'urls': []
    })
      .visit('http://localhost:3000/')
  })

  it('When a user visits the page, they can view the Form with the proper inputs', () => {

    cy.get('.title-input').should('be.visible')
      .and('have.value', '')
      .get('.url-input').should('be.visible')
      .and('have.value', '')
      .get('.form-submit').should('be.visible')
      .and('have.text', 'Shorten Please!')
  })

  it('When a user fills out the title input, the information is reflected in the input fields', () => {


    cy.get('.title-input').type('Cute puppies')
      .should('have.value', 'Cute puppies')
      .and('be.visible')
  })

  it('When a user fills out the url to shorten input, the information is reflected in the input fields', () => {


    cy.get('.url-input').type('https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fweneedfun.com%2Fwp-content%2Fuploads%2F2015%2F10%2FCute-puppy-Pictures-21.jpg&f=1&nofb=1')
      .should('have.value', 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fweneedfun.com%2Fwp-content%2Fuploads%2F2015%2F10%2FCute-puppy-Pictures-21.jpg&f=1&nofb=1')
      .and('be.visible')
  })

})
