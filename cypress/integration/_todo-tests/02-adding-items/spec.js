/// <reference types="cypress" />

describe("Adding items to the todo list", () => {
  it("adds two items", () => {
    cy.visit("https://sitepoint-editors.github.io/todo-app/");
    cy.get(".new-todo").type("first item{enter}");
    cy.contains("li", "first item").should("be.visible");
    cy.get(".new-todo").type("second item{enter}");
    cy.contains("li", "second item").should("be.visible");
  });
});
