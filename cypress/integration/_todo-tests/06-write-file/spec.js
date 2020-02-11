/// <reference types="cypress" />

describe("Reset data using cy.writefile", () => {
  // you can use separate "beforeEach" hooks or a single one
  beforeEach(() => {
    const emptyTodos = [];

    // const str = JSON.stringify(emptyTodos, null, 2) + '\n')

    // file path is relative to the project's root folder
    // where cypress.json is located
    cy.writeFile("todo/data.json", str, "utf8");
    cy.visit("/");
  });
});
