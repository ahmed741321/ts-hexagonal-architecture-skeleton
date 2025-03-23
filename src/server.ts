import express, { Request, Response } from "express";
import { Controller } from "./presentation/controllers/Controller";
import { RepositoryImplementation } from "./infrastructure/persistence/RepositoryImplementation";
import { Entity } from "./domain/entities/Entity";
import { View } from "./presentation/views/View";

const app = express();
const port = 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Initialize components
const repository = new RepositoryImplementation();
const controller = new Controller();
const view = new View();

// Example route to demonstrate the architecture
app.post("/entities", async (req: Request, res: Response) => {
  try {
    const { id } = req.body;

    // Create a new entity
    const entity = new Entity(id);

    // Save the entity using the repository
    await repository.save(entity);

    // Format the response using the view
    const response = view.formatResponse({
      message: "Entity created successfully",
      entity,
    });

    res.status(201).json(response);
  } catch (error) {
    res.status(500).json({
      status: "error",
      message:
        error instanceof Error ? error.message : "An unknown error occurred",
    });
  }
});

app.get("/entities", async (req: Request, res: Response) => {
  try {
    // Retrieve all entities from the repository
    const entities = await repository.findAll();

    // Format the response using the view
    const response = view.formatResponse({ entities });

    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({
      status: "error",
      message:
        error instanceof Error ? error.message : "An unknown error occurred",
    });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
