package main

import (
	"fmt"
	"log"
	"net/http"
	"os"

	mgo "gopkg.in/mgo.v2"
)

func main() {
	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}

	mongoSession, err := mgo.Dial(`mongodb://piusnyakoojo:test3124@ds117348.mlab.com:17348/car-data`)
	if err != nil {
		log.Fatal(err)
	}
	defer mongoSession.Close()

	cars = mongoSession.DB("car-data").C("cars")

	router := InitRouter()

	http.ListenAndServe(fmt.Sprintf(":%v", port), router)
}
