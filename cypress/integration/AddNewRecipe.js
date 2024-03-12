   describe("Add new Recipe",()=>{
     it("Add new",()=>{
     // click on Add new Recipe CTA on Menu page
     cy.get('[data-testid="add-receipe-btn"]').click()
     // type the values in different text boxes according to labels
      cy.get('[data-testid="receipe-name-text"]').type("Chole Bhature")
      cy.get('[data-testid="receipe-shortdesc-text"]').type("with chauteny, mirchi, pyaj")
      cy.get('[data-testid="receipe-ingridents-text"]').type("my chole")
      cy.get('[data-testid="receipe-veg-text"]').type("pyaj shimla")
      // this text box is not enable so used {force: true}
      cy.get('[data-testid="receipe-available-text"]').type("false",{force: true})
      // Click on Save recipe CTA
     cy.get('[data-testid="receipe-save-btn"]').click()
    })
  })