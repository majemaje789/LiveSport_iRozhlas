// Cypress script

// ve skriptu jsou pouzity uziatelske funkce z commands.js
// tim se usetri mnoho radku a da se snadno upravit pri zmene na jednom miste

describe('MainBL', function(){

  // jdi na hlavni stranu
  it('VisitUrlTitle', function(){
      cy.visit('https://www.irozhlas.cz/')
      cy.title().should('eq','iROZHLAS - spolehlivé a rychlé zprávy')
      cy.url().should('include','irozhlas.cz')
	  })
  
  // kontrola menu Cesky rozhlas, iRozhlas a Zapati stranky    
 it('controlCRiRozhlasMenuZapati', function(){
     cy.controlMenuZapati()
 })

// kontrola odkazu jednotlivych rubrik a podrubrik menu iRozhlas

// Domov 
   it('goToMenuItemDomov', function(){
     cy.goToLinkiRozhlasCPage('/zpravy-domov','/zpravy-domov','Zprávy z domova')
     cy.goHomeFromSection()
	  })
      
// Svet     
   it('goToMenuItemSvet', function(){
     cy.goToLinkiRozhlasCPage('/zpravy-svet','/zpravy-svet','Zprávy ze světa')
     cy.goHomeFromSection()
	  })
      
// Ekonomika
   it('goToMenuItemEkonomika', function(){
     cy.goToLinkiRozhlasCPage('/ekonomika','/ekonomika','Ekonomika')
     cy.goHomeFromSection()
	  })
      
// Sport
   it('goToMenuItemSport', function(){
     cy.goToLinkiRozhlasCPage('/sport','/sport','Sport')
     cy.goHomeFromSection()
	  })

// Pod rubriky Sport

// Sport/Fotbal

   it('goToMenuItemSport-Fotbal', function(){
     cy.goToLinkiRozhlasCPage('/sport','/sport','Sport')
     cy.goToLinkiRozhlasSubSection('/sport/fotbal','/sport/fotbal','Fotbal')
     cy.goHomeFromSection()
	  })    
      
// Sport/Hokej

   it('goToMenuItemSport-Hokej', function(){
     cy.goToLinkiRozhlasCPage('/sport','/sport','Sport')
     cy.goToLinkiRozhlasSubSection('/sport/hokej','/sport/hokej','Hokej')
     cy.goHomeFromSection()
	  })   
      
//  Sport/Ostatni podrubriky
// ...


// Kultura
   it('goToMenuItemKultura', function(){
     cy.goToLinkiRozhlasCPage('/kultura','/kultura','Kultura')
     cy.goHomeFromSection()
	  })
      
// Pod rubriky Kultura

// Kultura/Film

   it('goToMenuItemKultura-Film', function(){
     cy.goToLinkiRozhlasCPage('/kultura','/kultura','Kultura')
     cy.goToLinkiRozhlasSubSection('/kultura/film','/kultura/film','Film')
     cy.goHomeFromSection()
	  })        
      
//  Kultura/Ostatni podrubriky
// ...                              
             
	})
