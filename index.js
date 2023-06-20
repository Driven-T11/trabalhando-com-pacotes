import chalk from "chalk"
import somar from "./somar.js"          // ES Modules
// const somar = require("./somar.js")  // => Common JS

const resultado = somar(60, 2)
console.log(chalk.red(resultado))

// ES Modules => .mjs
// Common JS => .cjs

console.log(chalk.blue("Hellooooo ") + chalk.red("woooorld!"))
console.log(`Esse é o ${chalk.blue("módulo de back")}! ${chalk.red("<3")} `)