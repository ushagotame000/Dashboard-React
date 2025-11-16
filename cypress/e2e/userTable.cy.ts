/// <reference types="cypress" />

describe("UserTable E2E Tests", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/");
  });

  it("renders the table and header", () => {
    cy.get("table").should("exist");

    cy.get("thead tr th").should("have.length", 7);
  });

  it("searches for a user", () => {
    cy.get('input[placeholder*="Search users, email, username, company..."]').type("Leanne");
    cy.get("tbody tr").should("have.length", 1);
    
    cy.contains("Leanne Graham").should("exist");
  });

  it("sorts users by ID", () => {
    cy.get("select").select("id");  

    cy.get("tbody tr:first-child td:first-child").should("contain.text", "1");
  });

  it("handles pagination", () => {
    cy.get("tbody tr").should("have.length", 6);

    cy.get("button").contains("Next").click();

    cy.get("tbody tr").should("have.length", 6);  
    cy.contains("Page 2").should("exist"); 
  });

});
