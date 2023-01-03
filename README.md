# Assingnment8-WeatherDashboard
UsingAPI keys to retrieve information from the https://openweathermap.org/ database to create a 5 day weather report for any city on the earth
Contributor: Moral Meshkot
Description:This project's aim was to produce a 5-day weather app on the browser so that that user could see the weatehr report for the next 5 days in whatever city they input.
The app uses data from the https://home.openweathermap.org website via API keys. So after making an account in the website to get access to a free API key used for retrieving data on the weather, I also had to use the website's Geocoding API to get the exact geographic coordinates since for using the website we are required to use these cooredibarte instead of the name of the city.

Challenges faced: At the start I struggled to show the source I was working with in the console even after comparing my ajax calls and the ".then" promise with earlier activities in the week. I later noticed that even though I had copied the examples from the openweathermap documentation, I had to add the "https" to the beginning of my URLs for it to work.
After this I still struggled a lot with using the URL's and how to add them together when using the ajax calls.
But I'm not really sure what the error was for in the end, I wasn't too confident on my second ajax call but I don't know if it was because I couldn't get the right timing to work (I had to make the second ajax run only after the first had given the geographic coordinates so I tried using an "if" statement or putting the second ajax into another "then" promise but neither worked), or if I just didn't write the url correctly (even though I made many attempts at changing the wording)

website url:


sreenshot:
<img src="./images/Screenshot 2023-01-03 at 01-08-25 Weather Dashboard.png" />
