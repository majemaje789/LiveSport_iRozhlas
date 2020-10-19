// Soubor commands.js musi byt umisten v adresari /cypress/support/ testovaneho projektu

// Zkontroluje ze stranka obsahuje menu Cesky rozhlas
Cypress.Commands.add('controlCRMenu',() => 
{
      cy.contains('Český rozhlas').should('be.visible')
      cy.contains('Radiožurnál').should('be.visible')
      cy.contains('Plus').should('be.visible')
      cy.contains('Dvojka').should('be.visible')
      cy.contains('Vltava').should('be.visible')
      cy.contains('Wave').should('be.visible')
      cy.contains('Živé vysílání').should('be.visible')
      cy.contains('Regiony').should('be.visible') 
      cy.contains('mujRozhlas').should('be.visible')
      cy.contains('eSHOP').should('be.visible')       
})

// Zkontroluje ze stranka obsahuje menu iRozhlas
Cypress.Commands.add('controliRozhlasMenu',() => 
{
      cy.contains('Domov').should('be.visible')
      cy.contains('Svět').should('be.visible')
      cy.contains('Ekonomika').should('be.visible')
      cy.contains('Sport').should('be.visible')
      cy.contains('Kultura').should('be.visible')
      cy.contains('Věda').should('be.visible')
      cy.contains('Komentáře').should('be.visible')
      cy.contains('Životní styl').should('be.visible') 
      cy.contains('Volby').should('be.visible')
      cy.contains('Počasí').should('be.visible')     
})

// Zkontroluje ze stranka obsahuje menu v zapati
Cypress.Commands.add('controlZapatiMenu',() => 
{
      cy.contains('RSS kanály').should('be.visible')
      cy.contains('Archiv').should('be.visible')
      cy.contains('Živé vysílání').should('be.visible')
      cy.contains('Sportovní zprávy').should('be.visible')
      cy.contains('Newsletter').should('be.visible')       
})

// Zkontroluje ze stranka obsahuje menu a zapati
Cypress.Commands.add('controlMenuZapati',() => 
{
     cy.controlCRMenu()
     cy.controliRozhlasMenu()
     cy.controlZapatiMenu()     
})

//  Jdi na odkaz a zkontroluj, nacteni, menu a zapati
// parametry TextOdkazu, TitulekNoveStranky, CastURLproKontrolu
Cypress.Commands.add('goToLinkiRozhlasCPage',(linkName, pageURL,  title) => 
{
     cy.get('a[href="'+linkName+'"].m-main__link').click()
     cy.url().should('include',pageURL)
     cy.title().should('contain',title)     
     cy.controlMenuZapati()
    
})

// Vrat se domu z rubriky / podrubriky a zkontroluj navrat
Cypress.Commands.add('goHomeFromSection',() => 
{
     cy.get('a[href="/"]').contains('iROZHLAS.cz').click()
     cy.title().should('eq','iROZHLAS - spolehlivé a rychlé zprávy')
     cy.url().should('include','irozhlas.cz')     
     cy.controlMenuZapati()
    
})

// Jdi na odkaz podrubriky z rubriky
// parametry TextOdkazu, TitulekNoveStranky, CastURLproKontrolu
Cypress.Commands.add('goToLinkiRozhlasSubSection',(linkName, pageURL,  title) => 
{
     cy.get('a[href="'+linkName+'"].m-subnav__link').click()
     cy.url().should('include',pageURL)
     cy.title().should('contain',title)     
     cy.controlMenuZapati()   
})
