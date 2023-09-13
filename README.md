# Vidi

# Description
Vidi is a full-stack web application that allows users to explore and review their favorite films. The application offers a user-friendly interface with login and signup functionality, enabling users to create their personalized accounts and access exclusive features. The site is modeled off of Letterboxd's design.
- Project-URL https://vidi-app.onrender.com/

## Index
- [Wiki](https://github.com/alexjbasso/vidi-capstone-proj/wiki)

- [Feature List](https://github.com/alexjbasso/vidi-capstone-proj/wiki/Feature-List)

- [Frontend and Backend Routes](https://github.com/alexjbasso/vidi-capstone-proj/wiki/Routes)

- [React Components List](https://github.com/alexjbasso/vidi-capstone-proj/wiki/React-Components-List)

- [Redux Store State Tree](https://github.com/alexjbasso/vidi-capstone-proj/wiki/Redux-Store-State)
  

# Technologies Used
- Frontend:
   - JavaScript
   - HTML
   - CSS
   - React
   - Redux

- Backend:
    - Python
    - Flask
    - AWS

# Screenshots:

![image](./react-app/public/film-page-screenshot.png)
![image](./react-app/public/person-page-screenshot.png)

## Installation Instructions

1. Install dependencies
```bash
pipenv install -r requirements.txt
```
2. Create a **.env** file based on the example with proper settings for your development environment

4. Replace the value for `SCHEMA` with a unique name, **making sure you use the snake_case convention**.

6. Get into your pipenv, migrate your database, seed your database, and run your Flask app

```bash
pipenv shell
```
```bash
flask db upgrade
```
```bash
flask seed all
```
```bash
flask run
```

7. To run the React App in development, checkout the [README](./react-app/README.md) inside the `react-app` directory.

## Future Features
- Allowing the user to create lists of films
- Search functionality

# Creator
Alex Basso
https://www.linkedin.com/in/alexjbasso
