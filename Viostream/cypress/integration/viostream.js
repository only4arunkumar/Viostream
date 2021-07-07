describe("Launch viostream video",()=>{
    it("User able to launch viostream video",()=>{
        cy.visit("https://tester-test.vudoo.io/embed/70892347444")
       
       cy.window().then((win)=>{
        cy.log(win.viostreamPlayer)
        win.viostreamPlayer.play()

          
       })
      
    })

})