# Containerized API with Docker, Kubernetes & GitHub Actions

## Project Overview

This project demonstrates how to containerize a Node.js API using Docker, deploy it on Kubernetes, and automate builds using GitHub Actions.

## Technologies Used

* Node.js
* Docker
* Kubernetes
* GitHub Actions

## Features

* Dockerized Node.js application
* Kubernetes Deployment
* Kubernetes Service
* CI Pipeline using GitHub Actions

## Project Structure

```
containerized-api/
│── app.js
│── package.json
│── Dockerfile
│── deployment.yaml
│── service.yaml
│── .github/
│   └── workflows/
│       └── main.yml
```

## How to Run

### Build Docker Image

```bash
docker build -t my-api .
```

### Run Container

```bash
docker run -p 3000:3000 my-api
```

### Deploy to Kubernetes

```bash
kubectl apply -f deployment.yaml
kubectl apply -f service.yaml
```

### Verify Deployment

```bash
kubectl get deployments
kubectl get pods
kubectl get services
```

## GitHub Actions

A CI workflow automatically builds the project whenever code is pushed to the repository.

## Author

Nandini Nagaraj
