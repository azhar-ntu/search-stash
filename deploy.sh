#!/bin/zsh

./mvnw clean package -Pproduction
docker build . -t azharntu/in6225-project:1.0
docker push azharntu/in6225-project:1.0
docker-compose up --build