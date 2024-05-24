"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const carro_1 = __importDefault(require("./carro"));
const cliente_1 = __importDefault(require("./cliente"));
const compraCarro_1 = __importDefault(require("./compraCarro"));
const funcionario_1 = __importDefault(require("./funcionario"));
const carro01 = new carro_1.default("Gol", 10000, 1999);
const cliente01 = new cliente_1.default("Susan", 23, 4999);
const funcionario01 = new funcionario_1.default("boris");
const compra01 = new compraCarro_1.default(cliente01, funcionario01, carro01);
compra01.detalharCompra();
//tsc --watch
