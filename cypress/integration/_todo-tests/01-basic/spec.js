/// <reference types="cypress" />

describe("My first test", () => {
  beforeEach(() => {
    cy.visit("https://sitepoint-editors.github.io/todo-app/");
  });

  it("the home page loads", () => {
    cy.contains("h1", "todos", { matchCase: false });

    cy.contains("h1", /^Todos$/);

    // cy.contains('[data-cy]="app-title"', "Todos");
  });
});
