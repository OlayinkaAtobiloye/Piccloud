# Piccloud
Piccloud is a full-stack application built with Angular & Spring Boot. It is an online image clipboard that lets you share images over the internet by generating a unique URL. Others can access the image via this URL.


Click [here](https://piccloud.netlify.app/) to use the application.

# Demo

[![Demo](<img width="1595" alt="Piccloud Demo" src="https://user-images.githubusercontent.com/69689414/193955361-03335b12-43d3-4787-9795-ff5c6ed174fe.png">
)](https://user-images.githubusercontent.com/69689414/193954297-4afd20a5-1e35-4ea1-b248-ef4b4e850fd9.mov)

The backend API is hosted on Heroku and can be accessed using the following BASE_URL - `https://piccloud.herokuapp.com`. Click here to view the [Piccloud API documentation](./backend/README.md#api-reference).

## Getting Started (Run Locally)

This project makes use of **Angular** for the frontend, with **Spring Boot**, and **PostgreSQL** for the backend. To be able to run this project locally, all the aforementioned tools have to be set up properly.

### Backend

The `./backend` directory contains a completed Spring Bootk application. You would need to set up your environment and some environment variables to run the application successfully.

[Find the steps to set up the backend server locally in the backend's README](./backend/README.md).

### Frontend

The `./frontend` directory contains a completed Angular web application that consumes the data from the Spring Boot server. You would also need to set up some environment variables to run the frontend application successfully.

[Find the steps to set up the front-end web application locally in the front-end's README](./frontend/README.md)/

## Author

[Olayinka Atobiloye](https://github.com/OlayinkaAtobiloye)


