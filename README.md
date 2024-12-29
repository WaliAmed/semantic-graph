
![Logo](https://semantic-graph-frontend.vercel.app/favicon.ico)


# Semantic Graph Frontend

This repository contains the frontend and backend implementation for the Semantic Health Graph Visualization project.




## Tech Stack

**Client:** React, d3-graph, TailwindCSS, react-hook-form, react-query, sonner

**Server:** express.js, dotenv, chai, nodemon
## Features

#### Frontend
- Mobile responsive
- Drawer
- Fullscreen graph
- Animated graph
- Moveable nodes
- Reset nodes position
- Generate random nodes data
- Guest login
- Admin login

#### Backend
- Add a node
- Add link between two nodes
- Remove a node
- Remove link between two nodes
- Calculate page rank
- Generate random data for 20 nodes




## Packages Used

#### The project uses the following packages (frontend):

- @fortawesome/fontawesome-svg-core: v6.5.1
- @fortawesome/free-brands-svg-icons: v6.5.1
- @fortawesome/free-solid-svg-icons: v6.5.1
- @fortawesome/react-fontawesome: v0.2.0
- d3: v5.5.0
- prop-types: v15.8.1
- react-d3-graph: v2.6.0
- react-hook-form: v7.49.2
- react-query: v3.39.3
- sonner: v1.2.4

#### The project uses the following packages (backend):

- express
- dotenv
- chai
- mocha
- nodemon


## Development Setup

#### To set up the development environment:

1. Clone this repository.
2. Install the required dependencies.
3. Add environment veriables
4. Run the project 

## Installation

Frontend

```bash
  cd semantic-graph-frontend
  npm install --legacy-peer-deps
  npm run dev
```

Backend

```bash
  npm install
  npm run dev
```
    
## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

#### Frontend
`VITE_APP_API_URL=http://localhost:5001/api`
`VITE_APP_PASSWORD_ARRAY='["ANY_PASSWORDS_YOU_WANT"]'`

#### Backend
`PORT=5001`


## Running Tests

To run tests for backend, run the following command

```bash
  npx mocha test/calculatePageRank.test.js
```

```bash
  npx mocha test/addNode.test.js
```

```bash
  npx mocha test/addLink.test.js
```


## Demo

Here is the demo link for guest users:
https://semantic-graph-frontend.vercel.app/


## Feedback

If you have any feedback, please reach out to us at waliamedvd@gmail.com


## Authors

- [@WaliAmed](https://github.com/WaliAmed/)


## 🔗 Links

[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://wali-dev.vercel.app/)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/wali-ahmed-vd/)


## Screenshots

[![image.png](https://i.postimg.cc/J4bRWVYN/image.png)](https://postimg.cc/4mNDzMgy)
[![image.png](https://i.postimg.cc/XNLTKjPD/image.png)](https://postimg.cc/jCWgtbtz)

