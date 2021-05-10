/// <reference types="cypress"/>
///hear in the test cASE 6 it gives the negitive responce because the page has no 
describe("assistment test",()=>{
  
  it("start",function(){
    cy.visit("https://www.aceinvoice.com/")
    cy.contains('a','Sign up')
    
    cy.contains("a",'Sign up for FREE').click()})
    //adding the user anme
    it('user name',function(){
       cy.get("[data-test-id=signup-email]").type('raivathadatta-mayy-10-1617-203@gmail.com',{timeout:6*1000})
        cy.get('[data-test-id="signup-submit"]').click()})
//password
    it('password',function(){
        cy.get("[data-test-id=signup-password]").type("welcome123!",{timeout:6*1000})
        cy.contains("Continue").click()})
//detais of the user
     it('enterdetails',function(){
        cy.get("[data-test-id=introduction-first-name]").type('Oliver')
        cy.get("[data-test-id=introduction-last-name]").type('Smith')
        cy.get('.nui-react-select__value-container').click()
        cy.contains('New Delhi').click()
      
        cy.get('[data-test-id="introduction-date-format-%d/%m/%Y"] > :nth-child(1) > .control').click()
        cy.get('[type="checkbox"]').check()
        
      
        cy.get('[type="submit"]').click()})///////////
        it('adding the client name',()=>{
         cy.get('[name="name"]').type('Trix Web Development{enter}',{timeout:6*1000})
       
            cy.get('[data-test-id="client-form-skip"]').click()
              cy.contains("Congratulations, you're all set!")                                                                                                                       
            
                  cy.contains('Continue').click() })    
                //this page has no 
 it('contains verifiation email send to ',()=>{
                  
              cy.contains("verification email sent to").should('be.visible')})
              
                  it('adding url clint',function(){
                  cy.url().should('include','team')})
                  it('adding newclint',function(){
                  cy.get(':nth-child(4) > .bp3-popover-target > .relative > .nui-btn').click()
                  cy.contains('Add a new client').click()


        cy.get('[data-test-id="client-name"]').type('Trix int')
        cy.get('[data-test-id="client-submit"]').click()
      
         cy.get('[data-test-id="project-name"]').type('Trix Web Development')})
         it('adding new project',function(){
         cy.get(':nth-child(3) > .w-full > .flex-col > .nui-react-select-container > .nui-react-select__control').click()
        
         cy.contains('Hourly project rate').click()
         cy.get('[data-test-id="project-rate"]').clear().type('20')
         cy.get('[data-test-id="project-save"]').click()
          
         
        })
         it('asserting',function() {
           cy.contains('Trix Web Development').should('be.visible')
          cy.contains('Trix int').should('be.visible')
          cy.contains('Hourly Project Rate').should('be.visible')
           cy.contains('$20.00').should('be.visible')
           cy.contains('No rounding').should('be.visible')
        
          cy.contains('Oliver Smith').should('be.visible')
          
       
        })
      })
