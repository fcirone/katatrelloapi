Lambda function which receives a call from an API using API Gateway.
The API will be called by github webhook which will trigger for every comment on commit.

The lambda function will check for a pattern inside de commit, create a card on trello and make a post in an slack channel.
