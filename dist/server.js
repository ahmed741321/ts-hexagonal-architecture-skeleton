"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Controller_1 = require("./presentation/controllers/Controller");
const RepositoryImplementation_1 = require("./infrastructure/persistence/RepositoryImplementation");
const Entity_1 = require("./domain/entities/Entity");
const View_1 = require("./presentation/views/View");
const app = (0, express_1.default)();
const port = 3000;
// Middleware to parse JSON requests
app.use(express_1.default.json());
// Initialize components
const repository = new RepositoryImplementation_1.RepositoryImplementation();
const controller = new Controller_1.Controller();
const view = new View_1.View();
// Example route to demonstrate the architecture
app.post("/entities", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.body;
        // Create a new entity
        const entity = new Entity_1.Entity(id);
        // Save the entity using the repository
        yield repository.save(entity);
        // Format the response using the view
        const response = view.formatResponse({
            message: "Entity created successfully",
            entity,
        });
        res.status(201).json(response);
    }
    catch (error) {
        res.status(500).json({
            status: "error",
            message: error instanceof Error ? error.message : "An unknown error occurred",
        });
    }
}));
app.get("/entities", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Retrieve all entities from the repository
        const entities = yield repository.findAll();
        // Format the response using the view
        const response = view.formatResponse({ entities });
        res.status(200).json(response);
    }
    catch (error) {
        res.status(500).json({
            status: "error",
            message: error instanceof Error ? error.message : "An unknown error occurred",
        });
    }
}));
// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
