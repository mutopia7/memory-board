visit on [Page](https://memory-board-production.up.railway.app/)


# Mini Message Board - MVC Project

A simple mini message board application built with Node.js, Express, and EJS using the MVC architecture.  
Users can view colorful sticky-note style messages and click each note to see detailed information.  


---

## Features

- MVC architecture for clean code separation  
- EJS templating engine for server-side rendering  
- Sticky-note style message display with 3D effects and responsive design  
- Unique color-coded messages with interactive detail pages  
- Security best practices including Helmet for HTTP headers and rate limiting  
- Input validation and error handling (to be added)  
+ Using PostgreSQL for the database

---

## Project Structure

```
├── app.js
├── controllers
│   └── messageController.js
├── db
│   ├── pool.js
│   ├── populatedb.js
│   └── queries.js
├── merged.txt
├── middleware
│   ├── errorHandler.js
│   └── validateInput.js
├── package-lock.json
├── package.json
├── public
│   └── css
│       ├── form.css
│       └── styles.css
├── README.md
├── routes
│   ├── formRouter.js
│   ├── index.js
│   └── messageRoutes.js
└── views
    ├── layouts
    │   ├── 404.ejs
    │   ├── form.ejs
    │   ├── layout.ejs
    │   └── messageDetail.ejs
    └── messages
        ├── detail.ejs
        └── list.ejs
```

## Usage

- Visit the homepage to see all messages displayed as sticky notes.  
- Click on any message to see its details on a separate page.  
- Add new messages functionality coming soon!

---

## Security & Performance

- Uses Helmet to secure HTTP headers.  
- Rate limiting applied to protect from brute-force attacks.  
- Limits JSON and URL-encoded body size to 10kb.  

---

## Future Improvements

- Persist data to a database instead of in-memory.  
- Add message creation, editing, and deletion.  
- Implement comprehensive input validation and sanitization.  
- Add user authentication and authorization.


---

## Author

Rasool Vahid - [GitHub](https://github.com/mutopia7)
