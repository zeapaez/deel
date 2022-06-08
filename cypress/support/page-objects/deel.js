/// <reference types="cypress" />

export const pageElements = {
  loginUserInput: "#mui-1",
  loginPasswordInput: "#mui-2",
  loginButton: ".css-ahsd8r > .button > div",
  homePageBurgerIconButton: ".mobile-header-content-container > .button",
  menuCreateContract: "[href='/create'] > .deel-ui__stack",
  contractTypeFixedRate: ":nth-child(1) > .anchor > .box",
  newContractNameInput: ":nth-child(1) > :nth-child(1) > .deel-ui__input-component__wrapper > .deel-ui__input-component > .deel-ui__input-component__input",
  countryComboList :".box > :nth-child(1) > .deel-ui__stack > .input-container > .flex > .deel-ui__select > .deel-ui__select__input-container > .deel-ui__select__control > .deel-ui__select__value-container",
  countryUsa: "#react-select-2-option-1-2 > .deel-ui__select__option-container",
  stateResidenceComboList:":nth-child(2) > .deel-ui__select__input-container > .deel-ui__select__control > .deel-ui__select__value-container",
  stateColoradoValue:"#react-select-4-option-5 > .deel-ui__select__option-container",
  jobTitleInput:":nth-child(3) > :nth-child(1) > .deel-ui__input-component__wrapper > .deel-ui__input-component > .deel-ui__input-component__input",
  jobTitleSuggestionValue:".suggestions-option",
  seniorityLevelInput: "[data-qa='selector-seniority-level'] > .flex > .deel-ui__select > .deel-ui__select__input-container > .deel-ui__select__control > .deel-ui__select__value-container",
  senioritySuggestionValue:"#react-select-3-option-3 > .deel-ui__select__option-container",
  scopeWorkTextfield:".deel-ui__textarea-component__textarea",
  startDatePickerList:"#mui-3",
  buttonNext: '.mb-7',
  //Second Page
  currencyComboList: '.deel-ui__stack > .deel-ui__select > .deel-ui__select__input-container > .deel-ui__select__control',
  poundsValue: '#react-select-5-option-37 > .deel-ui__select__option-container',
  paymentRateInput: '.deel-ui__input-component__input',
  paymentFrecuencyComboList: ':nth-child(2) > .flex > .deel-ui__select > .deel-ui__select__input-container > .deel-ui__select__control',
  weekValueOption: '#react-select-6-option-0 > .deel-ui__select__option-container',
  invoiceEndComboList: ':nth-child(4) > .input-container > .flex > .deel-ui__select > .deel-ui__select__input-container > .deel-ui__select__control',
  invoiceSundayOption: '#react-select-7-option-5 > .deel-ui__select__option-container',
  paymentDueComboList: ':nth-child(5) > .flex > .deel-ui__select > .deel-ui__select__input-container > .deel-ui__select__control',
  paymentDueSameDayOption: '#react-select-8-option-0',
  nextSecondPageButton: '.mt-9',
  defineFirstPaymentDateLabel: '.space-btwn.align-items-center > .text-left',
  nextThirdPageButton: '.submit-define-dates',
  // Benefits and Extras
  terminationDateContain: '[data-qa="termination-date-card"]',
  nextFourthButton: '.contract-creation-footer > .mt-7',
  // Final
  complianceConfirmationSection: '.box',
  createAccountButton: '.contract-creation-footer > .mt-7',
  finalPageReview: '.col-xl-6'
}

export function estimateYesterday() {
  const today = new Date()
  const yesterday = new Date(today)
  yesterday.setDate(yesterday.getDate() - 1)
  return yesterday.getDate().toString()
}

export function selectDate() {
  cy.contains('button', estimateYesterday()).click()
}

export function fillFirstPageTaxedRate() {
  cy.get(pageElements.homePageBurgerIconButton).should('be.visible').click()    
  cy.get(pageElements.menuCreateContract).should('be.visible').click() 
  cy.get(pageElements.contractTypeFixedRate).click() 
  cy.get(pageElements.newContractNameInput).type('Antonio Zea')
  cy.get(pageElements.countryComboList).click()
  cy.get(pageElements.countryUsa).click()
  cy.get(pageElements.stateResidenceComboList).click()
  cy.get(pageElements.stateColoradoValue).click();
  cy.get(pageElements.jobTitleInput).type('Test Automation Engineer')
  cy.get(pageElements.jobTitleSuggestionValue).click()
  cy.get(pageElements.seniorityLevelInput).click()
  cy.get(pageElements.senioritySuggestionValue).click()
  cy.get(pageElements.scopeWorkTextfield).type('Automation Testing')
  cy.get(pageElements.startDatePickerList).click()
  selectDate();
  cy.get(pageElements.buttonNext).click();
}

export function fillSecondPageTaxedRate() {
  cy.get(pageElements.currencyComboList).should('be.visible').click()
  cy.get(pageElements.poundsValue).click();
  cy.get(pageElements.paymentRateInput).type('1000')
  cy.get(pageElements.paymentFrecuencyComboList).click()
  cy.get(pageElements.weekValueOption).click()
  cy.get(pageElements.nextSecondPageButton).click()
}

export function checkPaymentDetailsAndExtras() {
  cy.get(pageElements.defineFirstPaymentDateLabel).should('be.visible').and('contain', 'Define first payment date')
  cy.get(pageElements.nextThirdPageButton).click() 
  cy.get(pageElements.terminationDateContain).should('be.visible').and('contain', 'every week')
  cy.get(pageElements.nextFourthButton).click()
  cy.get(pageElements.complianceConfirmationSection).should('be.visible').and('contain', 'Contract compliance')
  cy.get(pageElements.createAccountButton).click()
  
}
