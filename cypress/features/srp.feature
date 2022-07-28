Feature: Testing srp

  As a student
  I visit s.com search result page

  Scenario: I can visit search result page
    Given I am on the "/uk/london" page
    Then I could search properties
