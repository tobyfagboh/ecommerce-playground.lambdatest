import {When, Then } from '@badeball/cypress-cucumber-preprocessor'

When(/^I click on "([^"]*)" (button|link|icon)$/, (text) => {
    cy.clickElement(text)
})

Then(/^I should see a list of products$/, () => {
    cy.verifyPage('[class="entry-content content-title flex-grow-0"]', 'MP3 Players')
})

When(/^I hover over the product$/, () => {
    cy.hoverElement()
})

When(/^I click Register$/, () => {
    cy.get('.form-row > :nth-child(2) > .btn')
        .should('exist').and('be.visible').click()
})

When(/^I fill the signup details$/, () => {
    cy.fillregistrationInfo()
})

When(/^I agree to the privacy policy$/, () => {
    cy.agreePolicy()
})

Then(/^It should be successful$/, () => {
    cy.verifyRegistration()
})