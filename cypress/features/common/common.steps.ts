import {
  Given,
  Then,
} from '@badeball/cypress-cucumber-preprocessor';

Given('I am on the {string} page', (page) => cy.visit(`/${page}`));

Then('I should be on the {string} page', (page) =>
  cy.checkLocation(`/${page}`)
);
