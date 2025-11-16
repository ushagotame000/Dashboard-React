/// <reference types="cypress" />

describe("UserTable E2E Tests", () => {
  beforeEach(() => {
    cy.intercept("GET", "/api/users", { fixture: "users.json" }).as("getUsers");

    cy.visit("http://localhost:5173/");
  });

  it("renders the table and header", () => {
    cy.wait("@getUsers");
    cy.get("table").should("exist");
    cy.get("thead tr th").should("have.length", 7);
  });

  it("searches for a user", () => {
    cy.wait("@getUsers");
    cy.get('input[placeholder*="Search users"]').type("Leanne");
    cy.get("tbody tr").should("have.length", 1);
    cy.contains("Leanne Graham").should("exist");
  });

  it("sorts users by ID", () => {
    cy.wait("@getUsers");
    cy.get("select").select("id");
    cy.get("tbody tr:first-child td:first-child").should("contain.text", "1");
  });

  it("handles pagination", () => {
    cy.wait("@getUsers");
    cy.get("button").contains("Next").click();
    cy.get("tbody tr").should("have.length", 0); 
  });

  it("shows error message on API failure", () => {
    cy.intercept("GET", "/api/users", { statusCode: 500, body: {} }).as("failUsers");
    cy.visit("http://localhost:5173/");
    cy.wait("@failUsers");
    cy.contains("Retry").should("exist").click();
  });
});
