package main

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"log"
	"math/rand"
	"net/http"
	"net/url"
	"strings"
)

var api_ai = `https://api.api.ai/v1/query`

// getResponse returns a stringified JSON object containing
// response information for the given user.
func getResponse(sessionId, message string) string {
	// return nothing
	if sessionId == "" {
		return `{"error": "Session Id not provided"}`
	}

	// return an introduction
	if message == "" {
		return getIntro()
	}

	data := url.Values{}
	data.Set("v", "20150910")
	data.Set("query", message)
	data.Set("sessionId", sessionId)
	data.Set("lang", "en")
	data.Set("fulfillment", "")

	u, err := url.ParseRequestURI(api_ai)
	if err != nil {
		log.Fatal(err)
	}
	urlStr := fmt.Sprintf("%v", u)

	reqBody, err := json.Marshal(data)
	if err != nil {
		log.Fatal(err)
	}

	client := &http.Client{}
	req, err := http.NewRequest("POST", urlStr, strings.NewReader(string(reqBody)))
	if err != nil {
		log.Fatal(err)
	}
	req.Header.Add("Authorization", "Bearer c5a81e8bd5c8467085eae5228ecec2c4")
	req.Header.Add("Content-Type", "application/json; charset=utf-8")

	resp, err := client.Do(req)
	if err != nil {
		log.Fatal(err)
	}

	respBody, err := ioutil.ReadAll(resp.Body)
	if err != nil {
		log.Fatal(err)
	}

	var result interface{}

	err = json.Unmarshal(respBody, &result)
	if err != nil {
		log.Fatal(err)
	}

	resultMap := result.(map[string]interface{})["result"].(map[string]interface{})

	if resultMap["action"] == "suggest" {
		// Get api.ai results parameters
		params := resultMap["parameters"].(map[string]interface{})

		// Get a list of cars that match color and type
		resultMap["carList"] = getCarList(params["color"].(string), params["type"].(string))

		//fmt.Printf("%v\n\n", result)
	}

	response, err := json.Marshal(result)
	if err != nil {
		log.Fatal(err)
	}

	// return api.ai response
	return string(response)
}

// A list of introductory messages
var intros = []string{
	`Hi, I'm Henry :). Can I help you find a car?`,
	`Hey, if you need anything just let me know. There are a bunch of cars out there, I'll help you find what you're looking for.`,
	`Have we met before? I'm Henry :)`,
	`Hey there, I'm Henry. Can I help you find a car?`,
}

// getIntro returns an introduction message
func getIntro() string {
	return intros[rand.Intn(len(intros))]
}
