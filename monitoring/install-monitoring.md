# Monitoring Stack (Prometheus + Grafana)

This project uses the kube-prometheus-stack Helm chart.

## Install monitoring stack

helm repo add prometheus-community https://prometheus-community.github.io/helm-charts
helm repo update

helm install monitoring prometheus-community/kube-prometheus-stack

## Access Grafana

kubectl port-forward svc/monitoring-grafana 3001:80

Open:
http://localhost:3001

## Get Grafana password

kubectl get secret monitoring-grafana \
-o jsonpath="{.data.admin-password}" | base64 --decode
