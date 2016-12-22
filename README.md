# henry
Your friendly neighborhood chatbot eager to help you find a car

## API
POST /v1/chat
- message (string)
  - /v1/chat?message=hello%20henry

## Deploying to Heroku

1. Create
```
heroku create -b https://github.com/hr/heroku-buildpack-go.git
```
2. Deploy
```
git push heroku master
```
