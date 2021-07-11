1. git clone https://github.com/ReactJsRepo/MovieTicketReactWeb
2. Goto —> cd MovieTicketReactWeb
3. Install Node module —> npm install 
4. Goto —> cd src/JSON
5. Host db.json file in jsonserver
6. Run command --> json-server --watch db.json --port 6700
7. This should result in below resources
	http://localhost:6700/latestmovies
	http://localhost:6700/events
	http://localhost:6700/upcomingMovies

Note: If you are changing the port number in the json server command, then 	please update the port numbers in the below files as well
			src/Sagas/index.js
			src/Components/SearchResults.js

5. npm start
6. visit ‘http://localhost:3000'
