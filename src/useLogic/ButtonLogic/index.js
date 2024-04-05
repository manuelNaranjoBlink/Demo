// import { param } from "@/utils/utils";

// // Al importar la lógica por "domain" nos evitaríamos importar desde diferentes archivos pero se estaría obligando a utilizar siempre la misma
// // (Ejemplo: si tenemos dos botones y queremos que funcionen con lógica diferente no sería posible).
// export default class LogicLibrary {
//     constructor() {
//         switch (param) {
//             case "DominioA":
//                 this.actualLogic = require("@/useLogic/ButtonLogic/useDefault");
//                 break;
//             case "DominioB":
//                 this.actualLogic = require("@/useLogic/ButtonLogic/useModified");
//                 break;
//             default:
//                 this.actualLogic = require("@/useLogic/ButtonLogic/useDefault");
//                 break;
//         }
//     }

//     static getLibrary() {
//         if (!this.instance) {
//             this.instance = new LogicLibrary();
//         }
//         return this.instance.actualLogic.default;
//     }
// }