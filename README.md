# henry
Your friendly neighborhood chatbot eager to help you find a car

## Try it!
https://agile-plains-95079.herokuapp.com/

## API
GET /v1/chat
- message (string)
  - /v1/chat?message=hello%20henry

## Deploying to Heroku

Create
```
heroku create -b https://github.com/hr/heroku-buildpack-go.git
```
Deploy
```
git push heroku master
```
