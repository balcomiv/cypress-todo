/// <reference types="cypress" />

describe("My first test", () => {
  it("the home page loads", () => {
    cy.visit("https://sitepoint-editors.github.io/todo-app/");

    cy.contains("h1", "todos", { matchCase: false });

    cy.contains("h1", /^Todos$/);

    // cy.contains('[data-cy]="app-title"', "Todos");
  });
});
