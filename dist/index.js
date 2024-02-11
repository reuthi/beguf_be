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
const Item = require('./models/item');
const cors = require('cors');
const app = (0, express_1.default)();
const port = 4000;
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://root:opoCxdf0cozCoOaF@cluster0.ynkwr2g.mongodb.net/onebody')
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err));
app.use(cors());
app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
app.get('/items', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const items = yield Item.find();
        res.send(items);
    }
    catch (error) {
        console.error(error);
        res.status(500).send(error);
    }
}));
app.get('/item/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const item = yield Item.findById(req.params.id);
        res.send(item);
    }
    catch (error) {
        console.error(error);
        res.status(500).send(error);
    }
}));
//# sourceMappingURL=index.js.map