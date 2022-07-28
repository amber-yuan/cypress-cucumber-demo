import { Given, Then, Before } from '@badeball/cypress-cucumber-preprocessor';
import { searchEle } from '../../support/pages/srp.po';

Before(() => {
  cy.log('should only print when run srp cases');
});

// Given('I am on the {string} page', (page) => cy.visit(`/${page}`));

Then('I could search properties', () => {
  cy.get(searchEle).should('exist');
});
