export const param =
    "libA"
    // "libB"

let actualLib;

console.log("Llamada a la libreria")

switch (param) {
    case "libA":
        actualLib = require("@/libs/lib-a");
        break;
    case "libB":
        actualLib = require("@/libs/lib-b");
        break;
    default:
        actualLib = require("@/libs/lib-a");
        break;
}

export default actualLib.default;