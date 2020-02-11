/// <reference types="cypress" />

describe("XHR Tests", () => {
  beforeEach(() => {
    cy.visit("https://sitepoint-editors.github.io/todo-app/");
  });

  it("starts with zero items (fixture)", () => {
    // Start Cypress network server
    // stub route 'GET /todos', return data from fixture file
    // THEN  visit the page
    cy.server();
    cy.route("GET", "/todos/", "fixture:empty-list").as("todos");
    cy.visit("/");
    cy.wait("@todos") // wait for 'GET /todos' response
      // inspect the server's response
      .its("response.body")
      .should("have.length", 0);

    // then check the DOM
    cy.get("li").should("have-length", 0);
  });
});
