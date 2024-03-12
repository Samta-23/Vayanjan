describe("Delete Recipe from Menu",()=>{
    it("Delete CTA test",()=>{
    // Delete CTA is in 6th column of tables so getting table 
    cy.get('.table')  // Locate the table
        .contains('td:nth-child(1)', 'Mutter')  // Find the cell in the 1nd column with the desired value
        .parent('tr')  // Get the parent row
        .find('td:nth-child(6) button')  // Find the button in the 6th column of that row
        .click()// click on CTA which is 6th column that is Delete 
})
})