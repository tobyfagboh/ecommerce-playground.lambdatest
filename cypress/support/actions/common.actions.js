const {faker} = require('@faker-js/faker')

let data
let user_email = faker.internet.email()
let first_name = faker.person.firstName()
let last_name = faker.person.lastName()
let phone_number = faker.phone.number('08#########')
before(()=>{
    cy.fixture('elements').then((element)=>{
        data = element
    })
})
Cypress.Commands.add('clickElement', (element)=>{
    cy.contains(element).should('be.visible').and('exist').click({force:true})
})

Cypress.Commands.add('verifyPage', (element, text)=>{
    cy.get(element).should('be.visible').and('exist').and('have.text', text)
})

Cypress.Commands.add('hoverElement', ()=>{
    cy.get(data.product)
        .should('be.visible').and('exist').trigger('mouseover')
})

Cypress.Commands.add('fillregistrationInfo', ()=>{
    cy.get(data.firstname_field).should('be.visible').type(first_name)
    cy.get(data.lastname_field).type(last_name)
    cy.get(data.email_field).type(user_email)
    cy.get(data.phone_field).type(phone_number)
    cy.get(data.password_field).type('Password1@')
    cy.get(data.confirm_field).type('Password1@')
})

Cypress.Commands.add('agreePolicy', ()=>{
    cy.get(data.policy_agreement).should('be.visible').click()
})

Cypress.Commands.add('verifyRegistration', ()=>{
    cy.get(data.registration_complete).should('be.visible').and('have.text', ' Your Account Has Been Created!')
})

Cypress.Commands.add('logoutAccount', ()=>{
    cy.get(data.account_button).should('be.visible').trigger('mouseover')
    cy.get(data.logout_button).should('be.visible').click()
})

