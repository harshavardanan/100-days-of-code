# 1. Base image — what OS/runtime to start from
FROM node:18-alpine

# 2. Set working directory inside the container
WORKDIR /app

# 3. Copy package files first (why? explained below)
COPY package.json package-lock.json ./

# 4. Install dependencies
RUN npm install

# 5. Copy the rest of your source code
COPY . .

# 6. Build the React app
RUN npm run build

# 7. Tell Docker what port your app runs on
EXPOSE 3000

# 8. The command to start the app
CMD ["npm", "start"]