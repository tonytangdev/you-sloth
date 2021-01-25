# 🦥 You Sloth

# Motivation
I constantly lose motivation whenever I start to do some sport / exercises.
I managed to last 3 months the last time I wanted to get bigger arms (which is a lot already).
But Winter came and I lost motivation again...
Here comes my idea. I need to remind myself to do some exercise each week (at least 3 times a week). Hopefully this app will keep me in the right track.

# What should the app do ?

Everyday, it checks whether I lost enough calories today. If I did lose enough calories, nothing happens.
But if I did not lose enough calories, the app sends me a message and tells me I'm fat and have no will power and most importantly, it calls me a sloth 🦥

# Fitbit

I own a fitbit watch which tracks my activities. The Fitbit API lets me get information about myself.
To use the API, I need to authorize my own app to access my data and save the Access Token.
The access token expires after 8 hours so I need to refresh it thanks to the refresh token every 7 hours or so.
The Access Token and the Refresh Token are going to be saved in DynamoDB.

# Architecture

- Lambda
- DynamoDB
- Amazon SNS
