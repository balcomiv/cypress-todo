/// <reference types="cypress" />

describe("My first test", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("the home page loads", () => {
    cy.contains("h1", "todos", { matchCase: false });

    cy.contains("h1", /^Todos$/);

    // cy.contains('[data-cy]="app-title"', "Todos");
  });
});
