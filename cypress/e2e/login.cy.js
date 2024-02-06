describe('Fazer login', () =>{
  beforeEach(() =>{
    cy.origin('https://platform.zaia.app/auth/login')
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
  it('segue para segunda etapa cadastro existe', ()=>{
    cy.get('.gap-3 > .flex > .inline-flex').click()
    cy.get('#identifier-field').type('husseinothman660@gmail.com')
    cy.get('#identifier-field').should('have.value', 'husseinothman660@gmail.com')
    cy.get('.cl-formButtonPrimary').click()
    // cy.wait(40000)
    cy.get('.p-2 > .flex > .text-white').contains('0 de 30')
  })
})