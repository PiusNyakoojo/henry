package main

import (
	"fmt"
	"log"

	mgo "gopkg.in/mgo.v2"
	"gopkg.in/mgo.v2/bson"
)

var cars *mgo.Collection

// getCarList returns a list of Cars that match a given
// description
func getCarList(color, title string) interface{} {
	var result []interface{}
	err := cars.Find(bson.M{
		"$text": bson.M{
			"$search": fmt.Sprintf("%v %v", color, title),
		},
	}).Select(bson.M{
		"score": bson.M{
			"$meta": "textScore",
		},
	}).Sort("$textScore:score").All(&result)
	if err != nil {
		log.Fatal(err)
	}
	return result
}
