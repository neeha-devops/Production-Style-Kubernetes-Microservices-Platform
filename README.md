# Production-Style Kubernetes Microservices Platform

A cloud-native microservices platform deployed on Kubernetes with autoscaling, ingress routing, persistent storage, and full monitoring using Prometheus and Grafana.

This project demonstrates how production-grade applications are deployed and managed in Kubernetes.

---

# Architecture

Client
   │
   ▼
Ingress Controller
   │
   ├── /products → Product Service
   └── /orders   → Order Service
                    │
                    ▼
                 PostgreSQL

Monitoring Stack
Prometheus → Metrics collection
Grafana → Visualization dashboards

---

# Tech Stack

Kubernetes  
Docker  
Node.js  
PostgreSQL  
NGINX Ingress Controller  
Prometheus  
Grafana  
Helm  

---

# Microservices

### Product Service
Returns product catalog data.

Endpoint:
/products


Example response:


[
{ "id":1, "name":"Laptop"},
{ "id":2, "name":"Phone"}
]


---

### Order Service

Creates order responses using product service.

Endpoint:


/orders


Example response:


{
"orderId":101,
"products":[
{"id":1,"name":"Laptop"},
{"id":2,"name":"Phone"}
]
}


---

# Project Structure


Production-Style-Kubernetes-Microservices
│
├── product-service
│ ├── app.js
│ └── Dockerfile
│
├── order-service
│ ├── app.js
│ └── Dockerfile
│
├── k8s
│ ├── product-deployment.yaml
│ ├── order-deployment.yaml
│ ├── postgres-deployment.yaml
│ ├── postgres-pvc.yaml
│ ├── services.yaml
│ └── app-ingress.yaml
│
├── monitoring
│ └── install-monitoring.md
│
└── README.md


---

# Running the Project

## Build Docker Images


docker build -t product-service ./product-service
docker build -t order-service ./order-service


Push images:


docker tag product-service <dockerhub-username>/product-service:v1
docker push <dockerhub-username>/product-service:v1


---

# Deploy to Kubernetes


kubectl apply -f k8s/


Check pods:


kubectl get pods


---

# Access the Services

Ingress routes traffic to services.


curl localhost/products
curl localhost/orders


---

# Autoscaling (HPA)

Horizontal Pod Autoscaler automatically scales the order-service based on CPU usage.

Example:


kubectl get hpa


---

# Monitoring Stack

Monitoring is deployed using Helm.

Install:


helm install monitoring prometheus-community/kube-prometheus-stack


Access Grafana:


kubectl port-forward svc/monitoring-grafana 3001:80


Open:


http://localhost:3001


Get password:


kubectl get secret monitoring-grafana
-o jsonpath="{.data.admin-password}" | base64 --decode


---

# Observability Features

Prometheus metrics collection  
Grafana dashboards  
Pod CPU and memory monitoring  
Cluster monitoring  

---

# Example Kubernetes Metrics


kubectl top pods


Example output:


NAME CPU MEMORY
order-service 1m 43Mi
product-service 1m 36Mi
postgres 1m 115Mi


---

# Key DevOps Concepts Demonstrated

Docker containerization  
Microservices architecture  
Kubernetes deployments  
Ingress routing  
Persistent volumes  
Horizontal Pod Autoscaling  
Monitoring with Prometheus  
Visualization with Grafana  

---

# Future Improvements

CI/CD pipeline using GitHub Actions  
Deployment to AWS EKS  
Service mesh with Istio  

---

# Author

DevOps / Cloud Engineering Portfolio Project
