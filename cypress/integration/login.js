describe("login0" ,()=>{
   
        beforeEach(()=>{
            cy.session("session-restore",()=>{
                cy.visit("http://vayanjan-dev.s3-website-us-east-1.amazonaws.com/") // site should be inside session 
                cy.login("dummy","dummy")
                cacheAcrossSpecs: true 
        })
        it("test1",()=>{
            
          //  cy.visit('http://vayanjan-dev.s3-website-us-east-1.amazonaws.com/welcome/dummy')
        cy.url().should('include','welcome') 
       cy.log("in command")
       cy.wait(10000)
        
        })
    it("menu",()=>{
     //   cy.url().should('include','welcome')
        //cy.contains('a',"Check Vayanjan Menu").click()
    })
})
})