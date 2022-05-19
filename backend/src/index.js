"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const v1_1 = __importDefault(require("../routes/api/v1"));
const app = (0, express_1.default)();
const port = process.env.PORT || 6969;
app.use(require('body-parser').urlencoded({ extended: false }));
app.use('/api/v1', v1_1.default);
app.get('/', (req, res) => res.send('server up'));
app.listen(port, () => console.log(`up @${port}`));
//TODO: session management