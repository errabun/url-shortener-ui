describe('UrlForm', () => {

  beforeEach(() => {

    cy.intercept('http://localhost:3001/api/v1/urls', {
      'urls': []
    })
      .visit('http://localhost:3000/')
  })

  it('When a user visits the page, they can view the Form with the proper inputs', () => {

    cy.get('')
  })
})
