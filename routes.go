package main

import (
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
	v1.NotFoundFunc(notFound)

	r.SubRoute("/v1", v1)
	n.UseHandler(r)
	return n
}

// chat returns a response for a given message and sessionId
func chat(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
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
	w.Write([]byte(`{
		"404": "Hey I'm Henry, looks like you might be lost. This might help you out:",
		"source_repo": "https://github.com/piusnyakoojo/henry"
		}`))
}
