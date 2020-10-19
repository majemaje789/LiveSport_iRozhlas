# LiveSport_iRozhlas
 HomeWork for LiveSport
 
 Tento Repository vznikl pro domácí úkol pro LiveSport

Zadání:

Domácí úkol - QA Manual Tester
    Nemusíte splnit všechny body, body můžete přeskakovat.
    
    1. Připravte testovací scénáře pro aplikaci “iROZHLAS”. Jak pro webovou tak pro jednu z mobilních platforem.
    2. Vytvořte soupis nalezených chyb tak jak je budete předávat vývojáři k opravě. Pokud
       žádnou chybu nenaleznete, definujte si jiné chování vybraného prvku v aplikaci a to
       poté vykažte jako chybu k opravě.
    3. Definujte testovací plán pro aplikace “iROZHLAS”.
    4. Popište jak byste přistoupil(a) k automatickému testování a vytvořte automatický test.
       Výsledek kódu vložte do git repozitáře. Vytvořte pipeline pro opakované spuštění testů. Můžete využít například gitlab.com.

Odkazy na aplikace:
● https://play.google.com/store/apps/details?id=cz.mediawork.android.reader.crrozhlas
● https://apps.apple.com/cz/app/irozhlas/id422256260?l=cs
● https://www.irozhlas.cz/

Vypracováno:

    1. Testovací scénář vytvořen pro webovou aplikaci, pro mobilní můžeme probrat osobně (překročen časový rozpočet).
      Pro vytvoření testovacího scánáře je potřeba mít jasné zadání, proto jsem vytvořil stručné zadání aplikace iRozhlas:
            Seznam souborů:
        Zadani_IRozhlas.pdf                          - Zadání / analýza projektu iRozhlas (podklad pro scénáře)
        ManualniTesty_iRozhlas_SeznamScenaru.pdf     - Plánované testovací scénáře pro domovskou stránku
        ManualniTesty_Popis_iRozhlas.pdf             - Popis struktury manuálních testů
        M01_CH_1920_MainP.pdf                        - Testovací scénář pro manuální testy
        
    2. Během provádění testů manuálního scénáře / automatického zátěžového testu byli zjištěny 4 incidenty "chyby"
    
        Nalezene_Chyby.pdf                            - Soubor se zjištenými incidenty
        
    3. Z důvodu nedostatečného zadání a překročení časového plánu jsem Testovací plán nevypracoval,
       ale rád proberu jeho strukturu a tvorbu na osobním setkání.
       
    4. Vytvořil jsem 2 automatické testy, v Cypress pro kontrolu funkčnosti odkazů a struktury stránek a
       v JMetru, protože rychlost a dostupnost jsem definoval jako hlavní prioritu, zátěžový test. Vše nahráno v GitHub repository.
            Seznam souborů:
        AutomatickeTesty_Popis_iRozhlas.pdf            - Popis struktury automatických testů
        commands.js                                    - Definované uživatelské funkce pro Cypress
        C1_iRAut_MenuiRozhlas.spec.js                  - Automatické testy pro kontrolu hlavního menu iRozhlas a struktury stránek (jde jen o část - překrořen časový plán)
        HttpRequest01.jmx                              - Skript se zátěžovými testy pro JMetr
