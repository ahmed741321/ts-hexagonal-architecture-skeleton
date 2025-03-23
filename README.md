# Hexagonal Architecture Skeleton

This project is a skeleton implementation of the Hexagonal Architecture (also known as Ports and Adapters) pattern. It is structured to separate the application into distinct layers, promoting maintainability and testability.

## Project Structure

```
hexagonal-architecture-skeleton
├── src
│   ├── application
│   │   ├── services
│   │   │   └── ServiceInterface.ts
│   │   └── usecases
│   │       └── UseCase.ts
│   ├── domain
│   │   ├── entities
│   │   │   └── Entity.ts
│   │   ├── repositories
│   │   │   └── RepositoryInterface.ts
│   │   └── valueobjects
│   │       └── ValueObject.ts
│   ├── infrastructure
│   │   ├── adapters
│   │   │   └── Adapter.ts
│   │   ├── config
│   │   │   └── Config.ts
│   │   └── persistence
│   │       └── RepositoryImplementation.ts
│   └── presentation
│       ├── controllers
│       │   └── Controller.ts
│       └── views
│           └── View.ts
├── package.json
├── tsconfig.json
└── README.md
```

## Layers Overview

- **Application Layer**: Contains services and use cases that define the application's business logic.
- **Domain Layer**: Contains entities, repositories, and value objects that represent the core business model.
- **Infrastructure Layer**: Contains adapters, configuration, and persistence mechanisms that interact with external systems.
- **Presentation Layer**: Contains controllers and views that handle user interactions and display information.

## Getting Started

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd hexagonal-architecture-skeleton
   ```

3. Install dependencies:
   ```
   npm install
   ```

4. Run the application:
   ```
   npm start
   ```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.# ts-hexagonal-architecture-skeleton
