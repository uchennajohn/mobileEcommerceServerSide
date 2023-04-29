"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Express_1 = __importDefault(require("./services/Express"));
const Database_1 = __importDefault(require("./services/Database"));
const port = 4500;
const startSterver = async () => {
    const app = (0, express_1.default)();
    await (0, Database_1.default)();
    await (0, Express_1.default)(app);
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
};
startSterver();
