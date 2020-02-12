/// <reference types="cypress" />

describe("XHR Tests - spies && stubs", () => {
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

  it("posts new item to the server", () => {
    cy.server();
    cy.route("POST", "/todos").as("new-item");
    cy.visit("/");
    cy.get(".new-todo").type("test api{enter}");
    cy.wait("@new-item")
      .its("request.body") // Use "response.body to check returned item"
      .should("have.contain", {
        title: "test api",
        completed: false
      });
  });

  it("shows loading element", () => {
    // delay XHR to "/todos" by a few seconds
    // and respod with an empty list
    cy.server();
    cy.route({
      url: "/todos",
      delay: 2000,
      response: []
    }).as("loading");
    cy.visit("/");

    // shows Loading element
    cy.get(".loading").should("be.visible");

    // wait for the network call to complete
    cy.wait("@loading");

    // now the Loading element should go away
    cy.get(".loading").should("not.be.visible");
  });
});
