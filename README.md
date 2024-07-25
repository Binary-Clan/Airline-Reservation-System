![Screenshot 2024-07-25 092142](https://github.com/user-attachments/assets/53cae6e6-c2f5-4a24-a05d-9bc0a801d434)

Air-Line Reservation System

A distributed microservice architecture is designed to enable efficient airline operations, including booking and viewing tickets🎟️, as well as checking flight schedules✅, to accommodate high traffic volumes🚦. This system ensures scalability, reliability, and seamless user experiences across all functionalities.🛠️

---

# Introduction

Hello everyone! Welcome to this demonstration of our online airline reservation system architecture. Today, I'll walk you through the various components of our system, how they interact with each other, and the technologies we used to build it. Let's start with an overview. Our system is designed using a microservices architecture to ensure scalability and flexibility. It consists of several layers and components that work together to provide a seamless booking experience.

## Client Applications

First, we have the client applications. Currently, we have a web application, and in the future, we'll be developing a mobile application. Users can interact with our system through these client apps.

## Frontend

The frontend of our web application is built using React. This user interface layer handles all user interactions and communicates with the backend services through our API Gateway.

To manage data fetching and state management, we use **Axios** and **React Tanstack Query**.

- **Axios**: This is our HTTP client library. It simplifies making requests to our backend services and handling responses.
- **React Tanstack Query**: This library helps manage server state in React applications. It provides powerful tools for caching, synchronizing, and updating data in the application, improving both performance and user experience.

## Backend Services

Our backend services are built using Java Spring Boot and follow a microservices architecture. Each service is responsible for a specific functionality and has its own separate PostgreSQL database for data storage. Here are the key microservices:

1. **User Service**:
    - Manages user registration, authentication, and profile management.
    - Uses JWT tokens for authentication, ensuring secure communication.
    - Uses MongoDB database for storing media data.
2. **Flight Information Service**:
    - Handles flight data, including schedules, availability, and details.
    - Keeps the information up-to-date by interacting with airline databases.
3. **Reservation Service**:
    - Manages the process of booking flights.
    - Handles seat selection, payment processing, and reservation confirmation.
4. **Reservation View Service**:
    - Allows users to view their booking details and itineraries.
    - Provides an interface for users to manage their reservations.

## Load Balancer

To distribute incoming requests evenly across our backend services, we use a load balancer. This ensures high availability and reliability by preventing any single service from becoming a bottleneck.

## Security

Security is a crucial aspect of our system. We use Spring Security to implement authentication and authorization. JWT tokens are used to authenticate users, ensuring that only authorized users can access specific services.

### JWT Service Authentication
![jwt](https://github.com/user-attachments/assets/8bf095c4-4012-463d-8e15-63cfeff9d0f1)

For secure access control, this application employs JSON Web Tokens (JWT) for authentication. We've implemented a JwtService utilizing a dedicated spring security library to handle JWT token generation, validation, and parsing. This ensures secure communication between clients and microservices.

Here only /Register and /authenticate end points are open endpoints for any user without a valid JWT token. Above two endpoints supply JWT tokens for the user. For accessing the other services in the airline application this token should be sent with the request in the authentication bearer token. Valid users with correct JWT token are granted.

## Databases

Each microservice has its own PostgreSQL database, ensuring data separation and easier management. For media storage, such as user profile pictures, we use MongoDB due to its ability to handle large volumes of unstructured data efficiently.


# Architecture

## Architectural Diagram
![Architecture](https://github.com/user-attachments/assets/603b26a8-30ce-4ac9-8b9c-b53bf500ca17)

## Design Decisions

The decision to split the airline reservation system into multiple microservices was driven by the need for scalability, maintainability, and flexibility. This decomposition allows each service to be developed, deployed, and scaled independently, enhancing the system's overall robustness. The Frontend Service acts as the user interface, interacting with backend services through the API Gateway, ensuring seamless user experiences for searching flights, making reservations, and viewing bookings. 

The Flight Information Service manages and provides flight data, ensuring up-to-date flight details are available for search and booking, and can be scaled to handle high loads efficiently. The Reservation Service handles booking operations, maintaining data integrity and consistency, and can be optimized for peak booking periods. The Reservation Viewer Service allows users to view and manage reservations, providing easy access to booking information and ensuring responsive performance. Each microservice contributes to a modular and scalable architecture, with the API Gateway offering a unified entry point, managing routing, security, and request aggregation. This design ensures the system can evolve with changing requirements, handle varying loads, and be maintained with minimal disruption, ultimately enhancing the reliability and performance of the airline reservation system.

## Microservices

### Implementaion Methods

The implementation of the microservices for the airline reservation system primarily utilized Spring Boot and Netflix Eureka. Each microservice, including the frontend service, flight information service, reservation service, and reservation viewer service, was developed using Spring Boot, which facilitated rapid development and deployment.

Netflix Eureka served as the service registry, where each microservice registered itself upon startup. This enabled the API Gateway to discover and route requests dynamically to the appropriate service instances. The service discovery mechanism provided by Eureka ensured that the microservices could scale independently and handle failover efficiently, as it automatically updated the registry with the available instances of each service.

For load balancing, Spring Cloud Load Balancer was used. This approach distributed incoming requests evenly across the available service instances registered with Eureka, ensuring efficient utilization of resources and improving the system's responsiveness and reliability. By leveraging Spring's built-in load balancing capabilities, we avoided the complexity of integrating additional tools like Netflix Ribbon.

This implementation method, combining Netflix Eureka for service discovery and Spring Cloud Load Balancer for load balancing, provided an effective solution for managing the microservices in the airline reservation system. This setup allowed for independent scaling, ensuring the system could handle the demands of a dynamic and high-traffic application while maintaining simplicity and ease of management.


### Core Services

#### Flight-Information-Service
- **Functionality:**
    - Provides flight schedule information.
    - Manages flight schedules and availability.
    - Provides endpoints to search for available flights based on criteria like date, destination, etc.
    - Handles the persistence of flight data and schedules.
- **REST API Endpoints:**
  - **POST /airline_reservation/api/flights**
    - Input Parameters: `FlightInformationDto` as RequestBody
    - Description: Add a flight
  - **GET /airline_reservation/api/flights/{id}**
    - Input Parameters: `flightId` as path variable (Long)
    - Description: Get a flight's details by its ID
  - **GET /airline_reservation/api/flights**
    - Description: Get all flight details
  - **PUT /airline_reservation/api/flights/{id}**
    - Input Parameters: `flightId` as path variable (Long), `FlightInformationDto` as RequestBody
    - Description: Update a flight by its ID
  - **DELETE /airline_reservation/api/flights/{id}**
    - Input Parameters: `flightId` as path variable (Long)
    - Description: Delete a flight by its ID
  - **POST /airline_reservation/api/flight-schedules**
    - Input Parameters: `FlightScheduleInputDto` as RequestBody
    - Description: Add a flight schedule
  - **GET /airline_reservation/api/flight-schedules/{id}**
    - Input Parameters: `scheduleId` as path variable (Long)
    - Description: Get a flight schedule by its ID
  - **GET /airline_reservation/api/flight-schedules**
    - Description: Get all flight schedules
  - **PUT /airline_reservation/api/flight-schedules/{id}**
    - Input Parameters: `flightScheduleId` as path variable (Long), `FlightScheduleInputDto` as RequestBody
    - Description: Update a flight schedule
  - **DELETE /airline_reservation/api/flight-schedules/{id}**
    - Input Parameters: `scheduleId` as path variable (Long)
    - Description: Delete a flight schedule
  - **GET /airline_reservation/api/flight-schedules/flight/{flightId}**
    - Input Parameters: `flightId` as path variable (Long)
    - Description: Get all flight schedules by flight ID
  - **POST /airline_reservation/api/seats**
    - Input Parameters: `FlightScheduleSeatInformationInputDto` as RequestBody
    - Description: Add seat information
  - **GET /airline_reservation/api/seats/{id}**
    - Input Parameters: `seatId` as path variable (Long)
    - Description: Get seat information by its ID
  - **GET /airline_reservation/api/seats**
    - Description: Get all seat information
  - **PUT /airline_reservation/api/seats/{id}**
    - Input Parameters: `seatId` as path variable (Long), `FlightScheduleSeatInformationInputDto` as RequestBody
    - Description: Update seat information by its ID
  - **DELETE /airline_reservation/api/seats/{id}**
    - Input Parameters: `seatId` as path variable (Long)
    - Description: Delete seat information
  - **GET /airline_reservation/api/seats/flight-schedule/{flightScheduleId}**
    - Input Parameters: `flightScheduleId` as path variable (Long)
    - Description: Get seat information by flight schedule ID
  - **GET /airline_reservation/api/seats/booking-status**
    - Input Parameters: `bookingStatus` as Request parameter (Boolean)
    - Description: Get seat information by booking status
  - **GET /airline_reservation/api/seats/seat-type**
    - Input Parameters: `seatType` as Request parameter (String)
    - Description: Get seat information by seat type
- **Inter-service Interactions:** Consumed by `Frontend-Service` for displaying flight information.

#### User-Service
- **Functionality:**
    - Allows customers to register, update their information, and manage their preferences.
    - It interacts with a database to store and retrieve customer data.
    - This service can be used by other services to associate reservations with customers.
- **REST API Endpoints:**
  - **GET /airline_reservation/api/users**
    - Description: Get all customers, create new customers.
  - **GET /airline_reservation/api/users{id}**
    - Description:  Get customer details by ID
  - **POST /airline_reservation/api**
    - Description: Register a user
  - **PUT /airline_reservation/api/users{id}**
    - Input Parameters: `id` as path variable (Long)
    - Description: Update a user
  - **DELETE /airline_reservation/api/users{id}**
    - Input Parameters: `id` as path variable (Long)
    - Description: Delete a user

#### Reservation-Service
- **Functionality:** 
    - Handles the creation, modification, and cancellation of flight reservations.
    - Validates customer information and flight availability before confirming a reservation.
    - Communicates with the Customer Service to associate reservations with customers.
    - Manages the persistence of reservation data.
- **REST API Endpoints:**
  - **GET /airline_reservation/api/reservations**
    - Description: Retrieve all reservations
  - **GET /airline_reservation/api/reservations/{id}**
    - Input Parameters: `reservationId` as path variable (Long)
    - Description: Retrieve reservation by its ID
  - **POST /airline_reservation/api/reservations**
    - Input Parameters: `ReservationDto` as RequestBody
    - Description: Create a new reservation
  - **PUT /airline_reservation/api/reservations/{id}**
    - Input Parameters: `reservationId` as path variable (Long), `ReservationDto` as RequestBody
    - Description: Update reservation by its ID
  - **DELETE /airline_reservation/api/reservations/{id}**
    - Input Parameters: `reservationId` as path variable (Long)
    - Description: Delete reservation by its ID
- **Inter-service Interactions:** Consumed by `Frontend-Service` and `Reservation-Viewer-Service`.

#### Reservation-Viewer-Service
- **Functionality:** 
    - Provides customers with a view of their existing reservations.
    - Retrieves reservation data from the Reservation Service based on customer ID.
    - Allows customers to view details of individual reservations.
- **REST API Endpoints:**
  - **GET /airline_reservation/api/view-reservations**
    - Description: Retrieve all reservation views
  - **GET /airline_reservation/api/view-reservations/{id}**
    - Input Parameters: `reservationId` as path variable (Long)
    - Description: View reservation by its ID
  - **GET /airline_reservation/api/view-reservations/flight/{flightId}**
    - Input Parameters: `flightId` as path variable (Long)
    - Description: Retrieve reservations by flight ID
  - **GET /airline_reservation/api/view-reservations/customer/{customerId}**
    - Input Parameters: `customerId` as path variable (Long)
    - Description: Retrieve reservations by customer ID
- **Inter-service Interactions:** Consumes services from `Reservation-Service`.

## Discovery Server
![Service_Registry](https://github.com/user-attachments/assets/ec6adb78-9081-4975-a7e3-0fbb067e5145)

Service discovery is a key component in microservices architecture, enabling services to dynamically find and communicate with each other. This mechanism ensures that each service can discover the network locations of other services, facilitating seamless interaction. Using tools like Spring Cloud Eureka, services can register themselves at runtime, updating their instances in a centralized registry. This registry maintains the current locations of all services, providing clients with the necessary information to call other services without hardcoding their addresses.

In this project, we have four microservices running as Eureka clients, each registered with the Eureka server as shown in the image. The Flight-Information-Service provides flight details, while the Frontend-Service handles the user interface, enabling users to interact with the system. The Reservation-Service manages booking details and communicates with the Reservation-Viewer-Service, which allows users to view their reservations. These services register with Eureka, ensuring they can be dynamically discovered and scaled, enhancing the robustness and flexibility of the application. To implement the Service discovery, we created a new microservice “service-registry”. This has the dependency of Eureka Server in the pom.xml file. Other microservices were registered as Eureka clients by defining related dependencies in them. This slide shows how our services has registered as instances. in the Eureka server. This helps to direct API requests to the correct service without hardcoding their service URLs.

## API Gateway
![2 (1)](https://github.com/user-attachments/assets/b99dcabf-dfc2-47c7-bc91-438aac1b509c)

API Gateway acts as a reverse proxy, providing a single entry point for all client requests to our microservices-based airline reservation system. It routes requests to the appropriate services—frontend, flight information, reservation, and reservation viewer—ensuring simplified client interaction and consistent request handling. The gateway enforces security policies, including authentication and authorization, and implements rate limiting to protect against abuse. It also manages service discovery and load balancing, ensuring high availability and reliability. Centralized logging and monitoring aid in performance optimization and debugging. By transforming and aggregating requests and responses, the API Gateway enhances efficiency and reduces client-side complexity, making it an essential component of our system's architecture.

![4](https://github.com/user-attachments/assets/d5f27af5-3135-40a5-8c19-0c54ee098305)

In this setup, an API request is sent through the API Gateway to the FLIGHT-INFORMATION-SERVICE. The service is registered on the Eureka server, which acts as a service registry. When a client sends a request to the API Gateway at http://localhost:8765/FLIGHT-INFORMATION-SERVICE/airline_reservation/api/flights, the gateway uses the service discovery mechanism to locate the FLIGHT-INFORMATION-SERVICE from Eureka. It then forwards the request to the appropriate instance of the flight information service. The gateway dynamically routes the request based on the service name, and the flight information service processes the request and returns the response. This setup simplifies client interactions by providing a single access point, handles service discovery and routing, and ensures that the client doesn't need to know the actual locations of the microservices.


## User Interface

### Implementation
#### Frameworks, and Tools Used
In the development of the Aero Express Airline Reservation System, we utilized a combination of modern frameworks and tools to create a seamless, efficient, and user-friendly interface. The following sections detail the implementation of the UI, along with the frameworks and tools employed.

##### UI Implementation
The User Interface (UI) of the Aero Express system was meticulously designed to ensure an intuitive and responsive user experience. The key aspects of our UI implementation included:

- React: As the core framework for building the user interface, React was chosen for its component-based architecture, which promotes reusability and maintainability. React's virtual DOM enabled efficient updates and rendering, enhancing the overall performance of the application.
- Material-UI: To create a visually appealing and consistent design, we integrated Material-UI, a popular React component library that adheres to Google's Material Design principles. Material-UI provided pre-built components like buttons, grids, text fields, and icons, which helped in rapidly developing a professional-looking interface.
- Figma: The design and prototyping of the UI were accomplished using Figma. This collaborative design tool allowed our team to create detailed wireframes and prototypes, ensuring that the design aligned with user expectations and requirements. Figma's real-time collaboration features facilitated efficient feedback and iterations.

##### Frameworks and Tools
To enhance the functionality and maintainability of the Aero Express system, we leveraged several frameworks and tools:

- Axios: For handling API requests, Axios was employed due to its simplicity and promise-based approach. Axios allowed us to easily fetch and send data to the server, manage request headers, and handle responses and errors effectively.
- Tanstack Query: Formerly known as React Query, this library was used for data fetching, caching, and synchronization. Tanstack Query simplified the management of server state, providing hooks for queries and mutations, which facilitated efficient data handling and ensured that the UI was always in sync with the server data.
- React Hot Toast: To improve user feedback and interaction, we integrated React Hot Toast for displaying notifications. This lightweight and customizable toast notification library helped us inform users about the success or failure of their actions, enhancing the overall user experience.
- Material Icons: To enrich the visual appeal and improve the usability of the application, Material Icons were incorporated. These icons, provided by Google, are a part of the Material Design system and ensured that the icons used were consistent and visually appealing.


#### User Flow
![Demo mp4_snapshot_00 00 843](https://github.com/user-attachments/assets/3c8b66ad-9432-41ad-940d-a80276075cf1)
*Home screen of the user*

After logging in, users can navigate to their profile to update and edit their personal details. This feature ensures that user information is always up-to-date and accurate, enhancing personalized service and communication.
![Demo mp4_snapshot_00 21 271](https://github.com/user-attachments/assets/52b2bbc7-90a4-40c5-8885-0ff414d266fa)
*User profile edit interface*

To book a flight, users can access the "Book a Flight" option. The process is intuitive and user-friendly, starting with browsing and searching through available flight schedules. The search functionality allows users to find flights that match their criteria easily.
![Demo mp4_snapshot_00 31 281](https://github.com/user-attachments/assets/c1f1f946-09af-4b7f-94b0-48f84486aacb)
*Available flight schedules interface*

Once a suitable flight schedule is found, users can select it to view detailed information, including flight details, available seats, and remaining capacity.
![Demo mp4_snapshot_00 56 306](https://github.com/user-attachments/assets/e9fba14f-e693-49c2-b678-a910fae13982)
*Information about the flight schedule*

Selecting preferred seats is straightforward, with clear visibility of seat availability. After choosing seats, users proceed to the checkout page where they can review the details of their selection. The interface also includes a search function to help users locate specific seats if needed. 
![Demo mp4_snapshot_01 21 331](https://github.com/user-attachments/assets/d498f7a9-5e98-4850-9353-7c7af6940a00)
*Information about the selected seats*

In the payment interface, users enter their card details to finalize the booking, with the process being secure and straightforward. 
![Demo mp4_snapshot_01 26 336](https://github.com/user-attachments/assets/f578578d-007a-4b59-8a96-cc62503254d4)
*Payment interface*

After a successful payment, users receive a confirmation message indicating that their booking is complete, providing assurance and clarity about their booking status.
![Demo mp4_snapshot_01 46 356](https://github.com/user-attachments/assets/b92dcf93-c0e0-4483-98e5-6dab3619e620)
*Payment successful interface*

#### Admin Flow
Admins, upon logging in, are greeted with the Admin Home dashboard. This central hub provides access to manage flights, schedules, and other admin users. Admins have comprehensive control over flight management, including the ability to add new flights to keep the schedule current, view detailed information about each flight for effective monitoring, update flight details to ensure accuracy, and delete flights that are no longer needed to keep the schedule relevant and uncluttered.
![Demo mp4_snapshot_01 56 366](https://github.com/user-attachments/assets/6d79a10d-17d6-40c5-9809-e5c64bb83a6a)
*Admin home interface*

Managing flight schedules is another critical function for admins. They can add new schedules to accommodate changes in flight plans and customer demand, view existing schedules in detail for effective monitoring, update schedules to reflect any changes, and delete outdated or incorrect schedules to maintain the integrity of the information provided to users.
![Demo mp4_snapshot_02 01 371](https://github.com/user-attachments/assets/8824cd4c-02dc-4c7c-abdd-e886dbbde756)
*Flight management interface*

![Demo mp4_snapshot_02 31 401](https://github.com/user-attachments/assets/5e7fa3e9-f4cd-435e-9a0d-99e73f0d256c)
*Add new flight interface*

![Demo mp4_snapshot_03 01 431](https://github.com/user-attachments/assets/019b3a7b-7a74-449c-89d7-afbf57dce262)
*Add new schedule interface*

Admins also have the capability to manage other admin users, ensuring effective delegation and oversight. They can add new admin users to expand administrative capabilities, view details about current admin users to monitor their activities and roles, and delete admin users as necessary to ensure that only authorized personnel have access to administrative functions.
![Demo mp4_snapshot_03 26 456](https://github.com/user-attachments/assets/a3fb142b-182e-4a08-b41f-bb56a2732919)
*Admin Management interface*

### API Testing Tools
![4](https://github.com/user-attachments/assets/c88dda74-f348-4c26-b70b-58b5dad3e394)

API testing tools like Postman were essential in testing the application's APIs to ensure they functioned correctly and met the requirements. Postman was used to send requests to various endpoints exposed by the microservices, such as the flight information service, reservation service, and reservation viewer service, through the API Gateway. It allowed for the verification of request and response formats, ensuring that the APIs returned the expected data. Postman's features, such as automated testing scripts and environment variables, facilitated efficient testing across different scenarios and environments. By using Postman, we were able to validate the behavior of each microservice independently, ensuring they communicated correctly through the API Gateway and delivered the expected results to the frontend. This rigorous testing process helped identify and fix issues early, ensuring the reliability and performance of the airline reservation system.



## Deployment

Our application consists of five microservices and four databases, resulting in a total of nine Docker containers. Each component plays a crucial role in ensuring that our system operates smoothly and efficiently.

![2 (2)](https://github.com/user-attachments/assets/2800843b-19c4-475b-93d9-c94c7e92fd0f)

### Microservices Containers:

- **Frontend Service**: Hosts the user interface, allowing users to interact with the application. It runs on port 8081.
- **Reservation Viewer Service**: Manages and displays reservation data, running on port 8084.
- **Flight Information Service**: Handles flight details and schedules, operating on port 8083.
- **Reservation Service**: Manages reservations, including creation and updates, running on port 8082.
- **Service Registry**: A Eureka server that facilitates microservice discovery, running on port 8761.

### Database Containers:

- **Frontend Database**: Stores user data for the frontend service using PostgreSQL.
- **Reservation Database**: Holds reservation data used by the reservation service, also PostgreSQL.
- **Reservation Viewer Database**: Contains data for the reservation viewer service, PostgreSQL.
- **Flight Information Database**: Manages flight-related data accessed by the flight information service, PostgreSQL.

### Deployment on Cloud Services
![3](https://github.com/user-attachments/assets/2c0ed0d5-2b62-4d8e-ba0d-3b1a621188d8)

Currently, our Docker containers are running locally. We plan to deploy them on cloud services to benefit from greater scalability and reliability, while being mindful of the cost implications.

1. **Choose a Cloud Service Provider**: Based on your budget and requirements. Options include Google Cloud Platform (GCP), Microsoft Azure, DigitalOcean, and others, which may offer free or lower-cost solutions compared to AWS.
2. **Create Virtual Machines or Manage Kubernetes Clusters**: On the chosen cloud platform, these resources will host our Docker containers and handle application traffic.

### Running the Containers on Cloud

1. **Build Docker Images**: For each microservice and database.
2. **Push Images to Container Registry**: Available on the selected cloud platform, such as Google Container Registry (GCR) or Azure Container Registry (ACR).
3. **Deploy Containers**: Use the cloud provider’s deployment tools to run your Docker containers. This might involve setting up virtual machines and manually deploying the containers or using managed services like Google Kubernetes Engine (GKE) or Azure Kubernetes Service (AKS) for automated deployments.

### Managing Containers

- **Monitoring**: Utilize the cloud provider’s monitoring tools to track the performance of your containers.
- **Auto-Scaling**: Set up auto-scaling policies to handle traffic spikes by dynamically adjusting the number of running containers.
- **Updates and Redeployment**: Regularly update your Docker images and redeploy them as needed. Implement rolling updates to ensure minimal downtime during deployments.


## Source Code

### GitHub Link
https://github.com/Binary-Clan/Airline-Reservation-System


## Development Challenges
Developing a distributed airline reservation system presents several challenges, each requiring strategic solutions to ensure seamless operation. Here are some common roadblocks and how we overcome using relevant technologies:

### Inter-Service Communication

**Challenge:**
Efficient communication between microservices in a distributed system is crucial but complex.

**Solution:**
Implement a service discovery mechanism like **Eureka Server** from Netflix OSS to enable microservices to discover each other dynamically. Additionally, used **Spring Cloud Gateway** as an API Gateway to manage all API traffic and enforce security policies.

### Debugging and Tracing

**Challenge:**
Debugging issues in a distributed system is difficult as requests flow across multiple services.

**Solution:**
Utilize tools like **Postman** to test and verify all API requests in the system. 

### Time Constraints and Learning New Technologies

**Challenge:**
Rapid development and learning new technologies were time-consuming.

**Solution:**
Use **Spring Boot** for rapid application development, simplifying the configuration process and allowing focus on core functionalities. Start with smaller, well-defined services and gradually introduce more complexity. Leverage online resources, tutorials, and communities for efficient learning.

### Other Challenges

1. **Scalability**
   - **Challenge:** Scaling the system horizontally to handle increasing user base and flight volume.
   - **Solution:** Leverage cloud platforms like **AWS** or **Azure** for automatic scaling based on demand.

2. **Security**
   - **Challenge:** Ensuring robust security in an airline reservation system.
   - **Solution:** Implement strong authentication, authorization, and data encryption mechanisms using standards like **JWT**.

3. **System Modularity and Maintenance**
   - **Challenge:** Maintaining a large, complex system.
   - **Solution:** Divide the system into smaller, independent microservices with well-defined APIs to promote modularity and ease of maintenance.

5. **Documentation**
   - **Challenge:** Facilitating collaboration and future development.
   - **Solution:** Create clear and concise documentation (READ ME File) for API endpoints and system architecture.

6. **Testing**
   - **Challenge:** Ensuring the functionality and reliability of the system.
   - **Solution:** Implement comprehensive unit, integration, and end-to-end tests.

![Thank you](https://github.com/user-attachments/assets/6e516961-0f88-474a-93b5-45be8f489a06)

