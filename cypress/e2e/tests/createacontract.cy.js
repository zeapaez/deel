/// <reference types="cypress" />
import * as deelPage from "../../support/page-objects/deel.js"

describe('Create a Contract', () => {
  it.only('Create Contract - Fixed Rate', () => {
    cy.login()
    deelPage.fillFirstPageTaxedRate()
    deelPage.fillSecondPageTaxedRate()
    deelPage.checkPaymentDetailsAndExtras()
    cy.get(deelPage.pageElements.finalPageReview).should('be.visible')
    .and('contain', 'Signatures')
    .and('contain', 'Review the contract details')
    .and('contain', 'Payment details')
  })
})
