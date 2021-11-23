describe("resturant booking app", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000/")
    });

    it("render the app without fail", () => {
        cy.get('[data-testid="username"]').should('have.length', 1);
        cy.get(".addReservation").should('have.length', 1);
    });

    it("Add the reservation", () => {
        cy.get('[data-testid="username"]').type("Ryan Mitchel");
        cy.get(".addReservation").click();
        cy.get('[data-testid="username"]').type("Andrew Huduson");
        cy.get(".addReservation").click();
        cy.get(".reservation-name").should('have.length', 2);
    });

    it("Add to Dining", () => {
        cy.get('[data-testid="username"]').type("Ryan Mitchel");
        cy.get(".addReservation").click();
        cy.get(".reservation-name").click();
        cy.get(".customer-card").should("have.length", 1);
        cy.get(".reservation-name").should('have.length', 0);
    });

    it("Food should add to customer dining", () => {
        cy.get('[data-testid="username"]').type("Ryan Mitchel");
        cy.get(".addReservation").click();
        cy.get(".reservation-name").click();
        cy.get(".food-name-input").should("have.length", 1);
        cy.get(".food-name-input").type("Ham Burger");
        cy.get(".addFood").click();
        cy.get(".food-name-input").type("Coke");
        cy.get(".addFood").click();
        cy.get(".food-item").should("have.length", 1);

    })

});
