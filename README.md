# TODO App
This project contains a simple TODO application. the application has following features:
- Create a TODO
- View TODOs
- Mark TODO as done
- Delete TODOs


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