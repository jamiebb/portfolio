export const checkNavigationLink = ({ name, id }) => {
  cy.get("nav a")
    .contains(name)
    .parent()
    .should("have.attr", "href", `#${id}`)
    .click();

  cy.location().then((location) => cy.wrap(location.href).should("include", id));
};
