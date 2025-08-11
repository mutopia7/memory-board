
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

---

## Project Structure

```
├── app.js               # Main application entry
├── controllers          # Controllers handle business logic
│   └── messageController.js
├── middleware           # Custom middleware for validation, errors etc.
│   ├── errorHandler.js
│   └── validateInput.js
├── models               # Data models (in-memory for now)
│   └── messageModel.js
├── public               # Static assets (CSS, JS)
│   └── css
│       └── styles.css
        └── form.css
├── routes               # Express route handlers
│   ├── index.js
│   └── messageRoutes.js
└── views                # EJS view templates
    ├── layouts
        └── layout.ejs
        └── 404.ejs
        └── form.ejs
        └── messageDetail.ejs
        
    └── messages
        ├── list.ejs
        └── detail.ejs
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
