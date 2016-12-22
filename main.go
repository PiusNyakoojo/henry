package main

import (
	"log"
	"net/http"
	"os"

	mgo "gopkg.in/mgo.v2"
)

func main() {
	port := os.Getenv("PORT")
	if port == "" {
		port = ":8080"
	}

	mongoSession, err := mgo.Dial(`mongodb://<your-username>:<your-password>@<your-mongodb-instance>/<your-db>`)
	if err != nil {
		log.Fatal(err)
	}
	defer mongoSession.Close()

	cars = mongoSession.DB("car-data").C("cars")

	router := InitRouter()

	http.ListenAndServe(port, router)
}
