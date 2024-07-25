![2 (2)](https://github.com/user-attachments/assets/2800843b-19c4-475b-93d9-c94c7e92fd0f)# ✈️Air-Line Reservation System

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

**Structure:**
- Diagram representing the microservices architecture
- Explanation of the main components: services, API gateway, discovery server, database


## Microservices

#### Introduction to the Netflix OSS Stack
For our Airline Reservation System, we utilized several components from the Netflix OSS (Open Source Software) stack to ensure a robust, scalable, and resilient microservices architecture. The tools we used include:
- **Eureka**: A service registry for service discovery, allowing microservices to find each other.
- **Ribbon**: A client-side load balancer that distributes the load among multiple instances of a microservice.
- **Hystrix**: A latency and fault tolerance library designed to isolate points of access to remote systems, services, and 3rd-party libraries.
- **Zuul**: An edge service that provides dynamic routing, monitoring, resiliency, security, and more.

#### Explanation of Why These Tools Were Chosen
- **Eureka**: Simplifies service discovery and registration, making the system more dynamic and scalable.
- **Ribbon**: Provides efficient client-side load balancing, improving response times and system reliability.
- **Hystrix**: Ensures system resilience by preventing cascading failures and providing fallback options during service disruptions.
- **Zuul**: Acts as a gateway for routing requests, enhancing security and allowing for centralized monitoring and management.

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

Next, we have the API Gateway, implemented with Spring Cloud. The API Gateway acts as a single entry point for all client requests. It routes these requests to the appropriate backend services, handles load balancing, and provides security features.

![4](https://github.com/user-attachments/assets/d5f27af5-3135-40a5-8c19-0c54ee098305)
Our API Gateway is a crucial component that manages and routes client requests to various backend services. It leverages Netflix Eureka for service discovery, allowing it to dynamically locate services and route traffic accordingly.

## User Interface

### Implementation Details
Describe the implementation of the UI, the frameworks, and tools used.

**Structure:**
- Overview of the frontend framework (e.g., React, Angular)
- Tools and libraries used
- User interface design principles

### API Testing Tools
Explain how API testing tools (e.g., Postman) were used to test the application's APIs.

**Structure:**
- Introduction to API testing tools
- Description of test cases and scenarios
- Continuous integration and automated testing practices

## Deployment
![Uploading 2 (2).png…]()

Our application consists of five microservices and four databases, resulting in a total of nine Docker containers. Each component plays a crucial role in ensuring that our system operates smoothly and efficiently.

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

