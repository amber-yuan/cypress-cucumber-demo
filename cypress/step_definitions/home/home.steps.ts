import { Given, Then, Before } from '@badeball/cypress-cucumber-preprocessor';
import { popPropertieEle } from '../../support/pages/home.po';

Before({}, () => {
  cy.log('should only print when run homepage cases');
});

// Given('I am on the {string} page', (page) => cy.visit(`/${page}`));

Then('I should see popular properties', () => {
  cy.get(popPropertieEle).should('exist');
});
