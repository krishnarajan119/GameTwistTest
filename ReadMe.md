# Technical Assessment - Greentube
## Candidate: Krishnarajan Rajendran

###Exercise 1 -Test Automation

Pre-requisites: Protractor, Jasmine, Selenium-webdriver installed in your machine.
				Configure the Environment path variable with Protractor path ,jasmine path. So that command line usage will not be a problem.
####Below are the Automation steps as suggested
	* Verified and looged into the https://www.gametwist.com/en/
        
    * Accepted the Cookies and the Bonus Wheel once logged in thus completed the "Close any popups IF they appear". 
    
    * Traversing through Slots, Bingo, Casino and Poker Navigation Menu and confirmed the page links.
    
    * Searching for the games in the search field using the key 'Slot', list of five games in each page appeared.
    
    * Taken the total number of the games from the element dispayed for the pagination. And selected one of the games from the midle pages and middle game. :)
    _I havent iterated through the li elements to find the toatl elements. Rather than found the easiest way to get the count. Currently iterative method will not be there. Still i am able to write for that too_
    
    * Verified i am on the correct game page.
    	
    * Verified the current language and changed to German again changed back to english so that on running the automation suite it will not fail other cases next time.
    
    * Successfully logged out.
	
	**Note: And importantly i have used sleep in the code. Since my network is bit slow and loading of website is taking some time. 
	So to manage that and perform the scripts, i have added sleep.**



#####Failures - Exploratory Testing:
	* The Seearch is working properly to display the search reults. But Clicking the Search Icon always opens the first game.
	        Steps:  Open the Game Twist Page
	                Login with respective user(login is not need though)
	                Enter some value in the search field for eg., "Slot"
	                Try to Click the Search Icon(the one with that maginifying glass icon)
	                Expected:  On clicking he search icon it should open the search results in separate page or just below it.
	                Observed: It opens the game page with the first game in the search results.

Kindly let me know if any thing needs to be added.