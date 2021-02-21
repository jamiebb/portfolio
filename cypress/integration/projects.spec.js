describe("Main", () => {
  it("checks if there are projects in the Projects section", () =>
    cy.get("#projects").find(".project").should("have.length.gt", 0));
});
