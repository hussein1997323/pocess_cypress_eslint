describe('Fazer login', () =>{
  beforeEach(() =>{
    cy.visit('https://platform.zaia.app/auth/login')
  })



  it('exibe mensssagem  cadatro não existe ', () =>{
    cy.get('.gap-3 > .flex > .inline-flex').click()
    cy.get('#identifier-field').type('hussein@gmail.com')
    cy.get('.cl-formButtonPrimary').click()
    cy.get('.cl-formFieldErrorText').should('be.visible')
  })
  it('exibe menssagerm sem prencher os campo obrigatorios' , () =>{
    cy.get('.gap-3 > .flex > .inline-flex').click()
    cy.get('#identifier-field')
    cy.get('.cl-formButtonPrimary').click()
    cy.get('.cl-formFieldErrorText')
  })
  it.only('entra na pagina com sucesso', ()=>{
    cy.get('.gap-3 > .flex > .inline-flex').click()
    cy.get('#identifier-field').type('Digite seu endereço de e-mail')
    cy.get('#identifier-field').should('have.value', 'Digite seu enderço de e-mail')
    cy.get('.cl-formButtonPrimary').click()
    cy.wait(40000)
    cy.get('.p-2 > .flex > .text-white').contains('0 de 30')
  })
})