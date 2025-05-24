#### Ingress Nginx

https://kubernetes.github.io/ingress-nginx/deploy/#quick-start
https://learn.microsoft.com/en-us/azure/aks/ingress-basic?tabs=azure-powershell#create-an-ingress-controller

```
kubectl create namespace ingress-nginx

helm repo add ingress-nginx https://kubernetes.github.io/ingress-nginx
helm repo update

helm upgrade --install -n ingress-nginx steffbeckers ingress-nginx/ingress-nginx `
  --set controller.allowSnippetAnnotations=true `
  --set controller.metrics.enabled=true `
  --set controller.metrics.serviceMonitor.enabled=true `
  --set controller.metrics.serviceMonitor.additionalLabels.release="steffbeckers"
```
