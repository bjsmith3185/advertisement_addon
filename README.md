# advertisement_AD_On

I created this app to practice setting up a server, mongodb, and using react.js.

The app will take in a user's search word. It will compare that word against keywords related to a specific advertisement, which are saved in the database. If the user's search word does not match to an advertisement a random advertisement from the database will be displayed. If the user's search word does match an advertisements keyword, that matching advertisement will be displayed. 

A custom user search collection is created as the user search words continue to match advertisement keywords. Once the user's search word matches any advertisements keyword it will only show ads related to the user's matched keywords and no longer random  advertisements.

Advertisements are displayed on a timer which randomly selects one to display.

NOTE: to populate the app with predefined advertisements once it is installed, use "http:baseURL"/populate 


App Layout

Main NavBar:
- Home Page
- Search Page
- Admin Page


Search Page:
- User enters a search term
- An advertisement is displayed on the left
- A clickable link will show the user the advertisement keywords, This is to allow the user to actively see how the advertisements change as keywords are matched.
- A clickable link shows the user the following info;
    - All the user's search words
    - All the search words that match advertisement keywords and how they match


Admin Page:
- Add new advertisement, user can enter a company with advertisement info to create an ad to be displayed:
    - company name
    - company image
    - company link
    - company description
    - advertisement keywords
- Modify/Delete advertisement, user can delete advertisement or make any of the changes listed above to a current advertisement
- View all companies, user can view all companies listed and their advertisement
- Business Data, user can see how many times an advertisement was displayed and if it was a random or custom selection
- Modify User Searches, user can delete all previous searches and custom advertisement collections. Reset everything but the collection of advertisements.