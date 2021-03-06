# Scrabble Calculator

![Alt Text](./gitAsset/scrabble.gif)

#### by Muzamir

## Table of Contents

- [Overview](#Overview)
  - [Features](#Features)
  - [Admin Features](#Admin-Features)
- [Configurations](#Configurations)

- [How to run](#How-to-run-scrabble-calculator)
  - [API Backend](#backend)
  - [React FrontEnd](#frontend)

## Overview

This App allows the user to key in words and retrieve the score based on the score reference of each letter.
The app is build with Django REST Frameworks and ReactJS

## Features

---

- Calculate Scrabble Word and return score
- View History of Entries

## Admin Features

---

- CRUD on Score Table

## Configurations

You will need to create your own `.env` file in the following folder.

```
root folder
|__ frontend
    |__scrabble
```

write the following line in the `.env` file

`REACT_APP_DEV_API_URL= "<BACKEND_API_URL>"`

\*\*replace the angled brackets with actual URL

## How to run Scrabble Calculator

Note: In order to run the frontend with database, you need to run the backend first.

### BACKEND

Go to the backend folder

`$ cd backend`

You should see your pipfile and pipfile.lock folder.
You will need [pipenv](https://pypi.org/project/pipenv/) package tool installed

run the following command. This will install all the packages required to run the REST API backend.

`$ pipenv install`

This will run your environment locally

`$ pipenv shell`

Running Django

`$ cd scrabble`

You should be able to see manager.py now

`$ python manage.py runserver`

Typically the url will be http://127.0.0.1:8000/ .
You will be directed to the default API root view

Admin page

http://127.0.0.1:8000/admin

![Alt Text](./gitAsset/scrabble_admin.gif)

Testing Django

`$ python manage.py test`

Create SuperUser (Admin Access)

`$ python manage.py createsuperuser`

\*\* You will be prompted to set email, username and password

### FRONTEND

Go to the frontend folder

`$ cd frontend\scrabble`

You should see `yarn.lock` file.
You will need to have [yarn](https://yarnpkg.com/) package manager to run this

Run react programme

`$ yarn start`
