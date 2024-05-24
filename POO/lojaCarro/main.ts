import Carro from "./carro";
import Cliente from "./cliente";
import CompraCarro from "./compraCarro";
import Funcionario from "./funcionario";

const carro01 = new Carro("Gol", 10000, 1999);

const cliente01 = new Cliente("Susan", 23, 4999);

const funcionario01 = new Funcionario("boris");


const compra01 = new CompraCarro(cliente01, funcionario01, carro01);

compra01.detalharCompra()

//tsc --watch