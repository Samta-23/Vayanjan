describe("complete", ()=>{
    // hook to execute once in all test 
   before( ()=>{
        // restore the session 
        cy.session("session-restore",()=>{
        // visit method should be inside session method of session want to be stored
        cy.visit("http://vayanjan-dev.s3-website-us-east-1.amazonaws.com/")
        // Type the password into password textbox 
        cy.get('[data-testid="login-pwd"]').type("dummy")
        // click on login button
        cy.get('[data-testid="login-btn"]').click()
        // check next page after login is achieved
        cy.url().should('include',"welcome")
        //cy.wait(2000)
        })
    })
    
    it("Test working of Top Menu option", ()=>{
        cy.url().should("include","welcome")
        
        // traversing among li element of ui (class '.navbar-nav' ) 
        //to check its displayed text which is in top menu (header) 
        //and click on it to achieve desired page
        cy.wait(1000)
        cy.get('.navbar-nav').find('li').contains("Home").click()
        cy.wait(1000)
        cy.get('.navbar-nav').find('li').contains("Menu").click()
                
      })
      it("Add new",()=>{
        // click on Add new Recipe CTA on Menu page
        cy.wait(1000)
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
          





    
