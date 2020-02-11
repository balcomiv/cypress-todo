/// <reference types="cypress" />

describe("Reset data using XHR call", () => {
  // you can use separate "beforeEach" hooks or a single one
  beforeEach(() => {
    cy.request("POST", "/reset", {
      todos: []
    });
  });

  beforeEach(() => {
    cy.visit("/");
  });

  it("adds two items", () => {
    cy.addItem("first item");
    cy.addItem("second item");
    cy.get("li").should("have.length", 2);
  });
});
