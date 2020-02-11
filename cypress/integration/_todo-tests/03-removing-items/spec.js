/// <reference types="cypress" />

describe("Removing items from the todo list", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("can delete an item", () => {
    // add a few items using custom command
    cy.addItem("simple");
    cy.addItem("hard");

    // deletes first item
    cy.contains("li", "simple")
      .should("exist")
      .find(".destroy")
      // use force: true because we don't want to hover (button is not visible)
      .click({ force: true });

    // confirm deleted item is gone from DOM
    cy.contains("li", "simple").should("not.exist");

    // confirm other item still exists
    cy.contains("li", "hard").should("exist");
  });
});
