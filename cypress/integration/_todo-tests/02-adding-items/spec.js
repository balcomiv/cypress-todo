/// <reference types="cypress" />

describe("Adding items to the todo list", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("adds two items", () => {
    cy.get(".new-todo").type("first item{enter}");
    cy.contains("li", "first item").should("be.visible");
    cy.get(".new-todo").type("second item{enter}");
    cy.contains("li", "second item").should("be.visible");
  });
});
