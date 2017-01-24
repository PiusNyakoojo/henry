![Henry logo](https://github.com/PiusNyakoojo/henry/blob/master/webapp/henry-chat/public/logo.png "Henry")
# henry
Your friendly neighborhood chatbot eager to help you find a car

## Try it!
https://agile-plains-95079.herokuapp.com/

## API
GET /v1/chat
- message (string)
  - /v1/chat?message=hello%20henry
    - requires cookie: sessionId (string)

POST /v1/register
- token (string)
  - /v1/register?token=123456

## Deploying to Heroku

Create
```
heroku create -b https://github.com/hr/heroku-buildpack-go.git
```
Deploy
```
git push heroku master
```
