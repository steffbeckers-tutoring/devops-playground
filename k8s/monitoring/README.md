# Monitoring

https://github.com/prometheus-community/helm-charts/tree/main/charts/kube-prometheus-stack
https://kubernetes.github.io/ingress-nginx/user-guide/monitoring/#wildcard-ingresses

```
kubectl create namespace monitoring

helm repo add prometheus-community https://prometheus-community.github.io/helm-charts
helm repo update

helm upgrade --install -n monitoring steffbeckers prometheus-community/kube-prometheus-stack `
  -f values.yaml `
  --set grafana.adminPassword=Grafana123! `
  --set grafana."grafana\.ini".server.domain=grafana.steffbeckers.localhost `
  --set grafana."grafana\.ini".server.root_url=http://grafana.steffbeckers.localhost `
  --set prometheus-node-exporter.hostRootFsMount.enabled=false

kubectl apply -f grafana-ingress.yaml
```
