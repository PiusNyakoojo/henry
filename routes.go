package main

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"

	"github.com/go-zoo/bone"
	"github.com/urfave/negroni"
)

// InitRouter returns a http Handler for handling routes
func InitRouter() http.Handler {
	r := bone.New()
	n := negroni.Classic()
	v1 := bone.New()

	// Version 1
	v1.Get("/chat", http.HandlerFunc(chat))

	r.SubRoute("/v1", v1)
	r.NotFoundFunc(notFound)
	n.UseHandler(r)
	return n
}

// chat returns a response for a given message and sessionId
func chat(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	w.Header().Set("Access-Control-Allow-Origin", "*")
	sessionId, err := r.Cookie("sessionId")
	if err != nil {
		log.Print(err)
		w.Write([]byte(fmt.Sprintf(`{"error": %v}`, err)))
		return
	}
	message := r.URL.Query().Get("message")
	w.Write([]byte(getResponse(sessionId.Value, message)))
}

// notFound returns some json containing information about this project
func notFound(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	w.Header().Set("Access-Control-Allow-Origin", "*")
	resp, _ := json.Marshal(struct {
		StatusCode string `json:"statusCode"`
		Message    string `json:"message"`
		SourceRepo string `json:"source_repo"`
	}{
		"404",
		"Hey I'm Henry :). Are you lost?",
		"https://github.com/piusnyakoojo/henry",
	})
	w.Write(resp)
}
