describe("Accessibility", () => {
  beforeEach(() => cy.visit("/"));

  it("checks that a viewport meta tag is set up properly", () => {
    cy.get('meta[name="viewport"]')
      .invoke("attr", "content")
      .should("equal", "width=device-width, initial-scale=1.0");
  });

  it("checks that there is a working skip content link", () => {
    cy.get("a").contains("Skip Content Link").click({ force: true });

    cy.location().then((location) =>
      cy.wrap(location.href).should("include", "about")
    );
  });

  it("checks that each section has a role of region", () => {
    cy.get("section").each((section) =>
      cy.wrap(section).invoke("attr", "role").should("equal", "region")
    );
  });
  
  it("checks to see if every image has an alt attribute", () => {
    cy.get("img").each((img) => cy.wrap(img).should("have.attr", "alt"));
  });
});
