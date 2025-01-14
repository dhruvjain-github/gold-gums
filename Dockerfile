# Use Node.js 20 as the base image
FROM node:20

# Set the working directory inside the container
WORKDIR /src/app

# Copy the package.json and package-lock.json first to install dependencies
COPY package*.json ./

# Install dependencies (including dev dependencies)
RUN npm install

# Copy the rest of the application files
COPY . .

# Build the Next.js application
RUN npm run build

# Expose the port the app will run on
EXPOSE 3000

# Start the application in production mode
CMD ["npm","run","start"]
