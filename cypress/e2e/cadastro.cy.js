describe('teste de cadastro', () => {
  beforeEach(() => {
    cy.visit('https://platform.zaia.app/auth/login', {
      failOnStatusCode: false
    })
  })

  it.only('Teste dos valores dentro do input e label existem na página', () => {
    cy.get('.gap-3 > .flex > .inline-flex').click()
    cy.get('[data-test=.cl-footerActionLink]').click()
  })
  it('exibir mensagem de erro', () => {
    cy.get('.gap-3 > .flex > .inline-flex').click()
    cy.get('.cl-footerActionLink').click()
    cy.get('#firstName-field').type('hssein')
    cy.get('#lastName-field').type('othman')
    cy.get('#emailAddress-field').type('hussein@gmail.com')
    cy.get('.cl-formButtonPrimary').click()
  })

  it('efetuar o cadastro com sucesso', () => {
    cy.get('.gap-3 > .flex > .inline-flex').click()
    cy.get('.cl-footerActionLink').click()

    cy.get('#firstName-field').type('amanda muniz')
    cy.get('#lastName-field').type('othman')
    cy.get('#emailAddress-field').type('testecypress74@gmail.com')
    cy.get('.cl-formButtonPrimary').click()
  })
})
