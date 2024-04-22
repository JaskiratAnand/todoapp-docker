# TODO App - Docker
This project contains a simple TODO application, using MongoDB database. The app backend and frontend can be run as Docker containers. 
The application features:
- CREATE, VIEW & DELETE a TODOs
- Mark TODOs as completed
- Dockerised Backend and Frontend.


## Setup
```bash
    git clone
```
### Backend
```bash
    cd backend/
```
- Create a ".env" file inside backend dir
- Add your MongoDB link for the application database as <bold>MongoDBConnect=""</bold>
- save the file
```bash
    npm install
    node index.js
```

### Frontend
```bash
    cd frontend/
    npm install
```
- Development build
```bash
    npm run dev
```

- Production build
```bash
    npm run build
    cd dist/
    
    npm install -g serve

    serve -s -p 8080
```

## Running Docker Containers
### Backend
```bash
    docker build -t todo-backend-server . 
    docker run -p 3000:3000 todo-backend-server
```

### Frontend
```bash
    docker build -t todo-frontend-app . 

    docker run -p 8080:8080 todo-frontend-app
```