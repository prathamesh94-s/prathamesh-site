### Stage 1: Build the application
FROM node:18 AS builder

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package.json package-lock.json* ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Next.js application
RUN npm run build

### Stage 2: Create the production image
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Copy the built application from the builder stage
COPY --from=builder /app .

# Expose the port Next.js runs on
EXPOSE 3000

# Set the command to start the application
CMD ["npm", "run", "start"]