describe('App', () => {

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

  it('When a user visits the page, they can view the page title', () => {

    cy.get('.title').should('be.visible')
      .and('have.text', 'URL Shortener')
  })

})

describe('User flows', () => {

  it('When a user fills out and submits the form, the new shortened URL is rendered', () => {

    const longUrlInput = 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fweneedfun.com%2Fwp-content%2Fuploads%2F2015%2F10%2FCute-puppy-Pictures-21.jpg&f=1&nofb=1'

    const titleInput = 'Cute Puppies'

    cy.intercept('POST', 'http://localhost:3001/api/v1/urls', {
      statusCode: 201,
      body: JSON.stringify({
        id: 1,
        long_url: longUrlInput,
        short_url: 'http://localhost:3001/useshorturl/1',
        title: titleInput
      }),
      headers: { 'Content-Type': 'application/json' }
    })
      .intercept('http://localhost:3001/api/v1/urls', {
        'urls': []
      })
      .visit('http://localhost:3000/')
      .get('.title-input').type(titleInput)
      .get('.url-input').type(longUrlInput)
      .get('.form-submit').click()
      .get('.short-url').should('be.visible')
      .and('have.text', 'http://localhost:3001/useshorturl/1')
  })

})
