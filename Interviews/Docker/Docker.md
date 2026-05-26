# 🐳 Docker Commands Cheat Sheet

A clean, highly scannable reference guide for local environment management.

---

## 🚀 1. Running & Managing Containers

_Turn images into active, running environments._

| Command                                                | What it does                 | Pro-Tip / Use Case                                                                 |
| :----------------------------------------------------- | :--------------------------- | :--------------------------------------------------------------------------------- |
| `docker run <image>`                                   | Create and start a container | Basic foreground run.                                                              |
| `docker run -d <image>`                                | Run in **detached mode**     | Runs in the background so your terminal stays free.                                |
| `docker run -p <host>:<container> <image>`             | Map network ports            | **Example:** `-p 8080:80` maps your laptop's port 8080 to the container's port 80. |
| `docker run --name <custom_name> <image>`              | Assign a friendly name       | Makes it easier to manage than random generated strings.                           |
| `docker run -e <KEY>=<value> <image>`                  | Pass environment variables   | Useful for passing passwords, API keys, or configurations.                         |
| `docker run -v </host_path>:</container_path> <image>` | Mount a local volume         | Keeps data safe on your hard drive even if the container is deleted.               |
| `docker run --rm <image>`                              | **Auto-cleanup**             | Automatically deletes the container the moment it stops running.                   |
| `docker run -it <image> sh`                            | Interactive shell            | Drops you directly inside a brand-new container's terminal.                        |

---

## 🩺 2. Inspecting & Debugging

_Use these when things aren't working or you need to check container health._

- 📋 **`docker ps`** — **List active containers:** Shows what is currently running right now.
- 🔍 **`docker ps -a`** — **List all containers:** Shows everything, including containers that crashed or stopped.
- 📄 **`docker logs <container>`** — **View logs:** See the console output and errors of a container.
- 🔄 **`docker logs -f <container>`** — **Stream logs:** Keeps the terminal open and streams new log updates in real-time.
- 💻 **`docker exec -it <container> sh`** — **Terminal into container:** Opens a terminal _inside_ an already running container.
- 📊 **`docker stats`** — **Resource monitor:** Displays live CPU, memory, and network usage.
- ⚙️ **`docker inspect <container>`** — **Deep dive:** Outputs a massive JSON file containing every hidden configuration detail.
- 🔝 **`docker top <container>`** — Show running processes inside the container.
- 🌿 **`docker diff <container>`** — Show files that have been changed or added since the container started.

---

## 🔄 3. Container Lifecycle

_Control the state of your existing containers._

> ⚠️ **Note:** For all commands below, `<container>` can be either the container's **Name** or its **ID**.

- 🛑 **`docker stop <container>`** — **Graceful stop:** Gives the container a few seconds to save data and shut down safely.
- ⚡ **`docker kill <container>`** — **Force stop:** Pulls the plug immediately. Use if a container freezes.
- ▶️ **`docker start <container>`** — Wake up a stopped container without losing its internal data states.
- 🔄 **`docker restart <container>`** — Quick cyclical stop-and-start.
- 🗑️ **`docker rm <container>`** — **Delete container:** Removes a stopped container permanently from your disk.
- 💥 **`docker rm -f <container>`** — **Force delete:** Instantly stops and deletes a running container in one single command.

---

## 📦 4. Blueprints & Storage

_Images are the blueprints. Volumes are the data pockets._

- 🛠️ **`docker build -t <name> .`** — **Build image:** Turns a local `Dockerfile` into a usable blueprint named `<name>`. _Don't forget the dot at the end!_
- 🏷️ **`docker build -t <name>:<tag> .`** — Build an image with a specific version number (e.g., `myapp:v1.2`).
- 🗄️ **`docker images`** — List all blueprints downloaded or built on your laptop.
- 📥 **`docker pull <image>:<tag>`** — Download an image from Docker Hub (e.g., `docker pull postgres:15`).
- 📤 **`docker push <image>:<tag>`** — Upload your local image to an online registry.
- 📁 **`docker volume ls`** — List all isolated persistent storage pockets.
- 🌐 **`docker network ls`** — List all internal virtual communication networks.

---

## 🧹 5. System Cleanup

_Docker loves to hog hard drive space. Use these to clean out the clutter._

- 💾 **`docker system df`** — **Check space:** Shows exactly how much hard drive space Docker data is taking up.
- 🧼 **`docker container prune`** — Safely deletes all stopped containers.
- 🍂 **`docker image prune`** — Safely deletes all unnamed/dangling images.
- 🟡 **`docker system prune`** — **The Clean Slate:** Deletes all stopped containers, unused networks, and dangling images.
- 🚨 **`docker system prune -a`** — **The Nuclear Option:** Deletes absolutely _everything_ that isn't actively running right now. Run this if your laptop runs out of disk space.
