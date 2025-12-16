FROM node:22-alpine
WORKDIR /app

ENV NODE_OPTIONS="--max_old_space_size=2048"
ARG REACT_APP_API_BASE_URL=http://localhost:5000/api
ENV REACT_APP_API_BASE_URL=${REACT_APP_API_BASE_URL}
ENV PORT=3000

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy source
COPY public ./public
COPY src ./src

EXPOSE 3000
CMD ["npm", "start"]
