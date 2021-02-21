import { checkNavigationLink } from "../support";

describe("Links", () => {
  beforeEach(() => cy.visit("/"));
  
  it("checks the navigation links", () => {
    checkNavigationLink({ name: "About Me", id: "about" });
    checkNavigationLink({ name: "Skills", id: "skills" });
    checkNavigationLink({ name: "Projects", id: "projects" });
    checkNavigationLink({ name: "Contact", id: "contact" });

    cy.get("nav a")
      .contains("Resume")
      .parent()
      .invoke("attr", "href")
      .should("include", "jb_resume.pdf");
  });

  it("checks if all links have a href", () =>
    cy.get("a").each((link) => cy.wrap(link).should("have.attr", "href")));

  it("checks if all external links have the correct target and rel", () => {
    cy.get('a[href^="http"]').each((link) => {
      cy.wrap(link).invoke("attr", "target").should("equal", "_blank");
      cy.wrap(link).invoke("attr", "rel").should("include", "noreferrer");
    });
  });
});
