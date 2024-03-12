describe("test of Update CTA", ()=>{

    it("Update CTA verify", ()=>{
// CTA of update is present on 7th cloumn of table
cy.get('.table')  // Locate the table
.contains('td:nth-child(1)', 'Malai')  // Find the cell in the 1nd column with the desired value
.parent('tr')  // Get the parent row
.find('td:nth-child(7) button')  // Find the button Update in the 7th column of that row
.click();
   cy.wait(2000)
  cy.get('[data-testid="receipe-ingridents-text"]').clear()// clear already present value in it
  cy.wait(2000)
  cy.get('[data-testid="receipe-ingridents-text"]').type("Panner - malai")// type the value 
  cy.get('[data-testid="receipe-save-btn"]').click() // click on Save CTA for save changes
  
})
})