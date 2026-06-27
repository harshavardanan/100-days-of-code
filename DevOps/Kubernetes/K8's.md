# ☸️ Kubernetes (kubectl) Commands Cheat Sheet

A comprehensive, highly scannable reference guide for navigating, deploying, and debugging inside a Kubernetes cluster.

---

## 🛠️ 1. Context & Cluster Info

_Before running commands, make sure you are talking to the right cluster and namespace._

| Command                                                 | What it does                         | Pro-Tip / Use Case                                                                         |
| :------------------------------------------------------ | :----------------------------------- | :----------------------------------------------------------------------------------------- |
| `kubectl cluster-info`                                  | Display cluster details              | Quick check to see if the cluster is alive and reachable.                                  |
| `kubectl config get-contexts`                           | List all available clusters/contexts | Shows all environments (e.g., Minikube, Dev, Prod) saved in your config.                   |
| `kubectl config current-context`                        | Show active cluster                  | Tells you exactly which cluster your commands will destroy or build on.                    |
| `kubectl config use-context <name>`                     | Switch active cluster                | Safely jump from one cluster environment to another.                                       |
| `kubectl get namespaces`                                | List all namespaces (`ns`)           | Shows the virtual isolation walls inside your cluster.                                     |
| `kubectl config set-context --current --namespace=<ns>` | Change default namespace             | Permanently targets a specific namespace so you don't have to type `-n <name>` every time. |

---

## 🔍 2. Viewing & Inspecting Resources (The "Get" Commands)

_Check the status of your Pods, Services, Deployments, and Ingress._

> 💡 **Shortcut:** Add `-A` to any command below to see resources across **all** namespaces, or `-o wide` for extra details (like IP addresses).

- 📦 **`kubectl get pods`** — List all running Pods in the current namespace.
- 📋 **`kubectl get deployments`** — List application deployments and check desired vs. available replicas.
- 🌐 **`kubectl get services`** (or `get svc`) — List network services and see their internal/external IP addresses.
- 🗺️ **`kubectl get ingress`** — View external routing rules and domain mappings.
- 💾 **`kubectl get pvc`** — List Persistent Volume Claims to check cloud storage attachments.
- 🔑 **`kubectl get secrets`** — List encrypted configuration keys and certificates.
- ⚙️ **`kubectl get configmaps`** (or `get cm`) — List plain-text environment configuration maps.

---

## 🚀 3. Creating & Modifying Resources

_Spin up new applications or apply structural configuration changes._

- 📄 **`kubectl apply -f <filename>.yaml`** — **The Golden Command:** Creates or updates any resource defined inside a YAML configuration file.
- 📁 **`kubectl apply -f <folder>/`** — Mass-apply all YAML configurations located inside an entire directory.
- 🏃‍♂️ **`kubectl run <pod-name> --image=<image>`** — Quickly spin up a single, standalone testing Pod directly from Docker Hub.
- 🏭 **`kubectl create deployment <name> --image=<image>`** — Create a managed deployment blueprint without writing a YAML file first.
- ⚖️ **`kubectl scale deployment/<name> --replicas=<number>`** — **Scale Up/Down:** Instantly change the number of running instances of your app.
- 🔄 **`kubectl rollout restart deployment/<name>`** — **Zero-Downtime Restart:** Forces pods to restart one-by-one to pull fresh configuration updates or clear memory locks.

---

## 🩺 4. Troubleshooting & Debugging

_Use these tools when a Pod is crashing, stuck in `ImagePullBackOff`, or refusing connections._

- 📄 **`kubectl logs <pod-name>`** — View the standard console output/logs of an active container.
- 🔄 **`kubectl logs -f <pod-name>`** — Stream the container logs live in real time.
- 🔀 **`kubectl logs <pod-name> -c <container-name>`** — Specify which container's logs to pull if the Pod is running multiple containers.
- 🩺 **`kubectl describe pod <pod-name>`** — **The Diagnoser:** Shows a detailed lifecycle history and error event log at the bottom. Essential for finding out _why_ a Pod failed to start.
- 💻 **`kubectl exec -it <pod-name> -- sh`** (or `-- bash`) — Drops an interactive terminal directly _inside_ the live cluster container.
- 🔌 **`kubectl port-forward <pod-name> <local-port>:<pod-port>`** — **Tunneling:** Maps a port from inside the cluster straight to your laptop web browser (`localhost`). Great for testing databases or private APIs.

---

## 🗑️ 5. Deleting Resources

_Tear down infrastructure and clean up your namespace namespaces._

> ⚠️ **Warning:** Deleting a standalone Pod managed by a deployment will just cause the deployment to instantly spawn a new one. To delete it permanently, target the **deployment**.

- ❌ **`kubectl delete pod <pod-name>`** — Destroy a single Pod instance.
- 🛑 **`kubectl delete deployment <deployment-name>`** — Permanently delete an application blueprint and all associated running replica pods.
- 🌐 **`kubectl delete service <service-name>`** — Remove a network entry point/load balancer.
- 🧼 **`kubectl delete -f <filename>.yaml`** — Looks at a configuration file and deletes everything that was originally created by it.
- 🚨 **`kubectl delete pods --all`** — Wipes out every single running pod in the active namespace.
