###Exercise 2 - Theoretical Task
	To Define the page object elements.
	We are creating the Page Objects to reduce the code rework, code maintance and clean code

####How can we do that?
    * First Open the Home page https://www.gametwist.com
    * Identify all the functionalities in the home page fo eg. login, register, navigation etc,.
    * Then Group them with similarities, but still we can make them as separate page objects
    * Our Main moto is to make simpler and multiple pages as possible so that the code is easily maintanable
    * Make sure all the Element Finders, Return values and logics in the Page objects.
    * Asserstion / Promises should be in the Test cases. So that the code look clean.
    
####Page Objects for GameTwist Home page (possible page objects to automate the page)
	* Popups Page
	* Common Page (To hold the common elements like logos, About Game Twist etc)
	* Login Page ------------------|
	* Register Page                |
	* User Profile Page            |---These can be grouped as Branding page objects
    * Twists Page                  |
    * Notifications Page           |
    * Language Page----------------|
    * Navigation Menu Page
	* Search Page
	* Slots Game Page--------------|
	* Bingo Game Page              |---These can be grouped as Games Page Objects
	* Casino Game Page             |
	* Poker Game Page--------------|
	* Bonus Twist Points Page
	* Push Notifications Page
	* Trending Page (Includes Top and New)
	* Game History Page (Includes Last Played Games)