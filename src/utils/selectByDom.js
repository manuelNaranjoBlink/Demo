// import { param } from "./utils";

// export default class SelectByDom {
//     constructor() {
//         switch (param) {
//             case "DominioA":
//                 this.actualLib = require("@/libs/libA");
//                 this.actualTheme = require("@/themes/themeA");
//                 break;
//             case "DominioB":
//                 this.actualLib = require("@/libs/libB");
//                 this.actualTheme = require("@/themes/themeB");
//                 break;
//             default:
//                 this.actualLib = require("@/libs/libA");
//                 this.actualTheme = require("@/themes/themeA");
//                 break;
//         }
//     }

//     static getLibrary() {
//         if (!this.instance) {
//             this.instance = new SelectByDom();
//         }
//         return this.instance.actualLib.default;
//     }
//     static getTheme() {
//         if (!this.instance) {
//             this.instance = new SelectByDom();
//         }
//         return this.instance.actualTheme.default;
//     }
// }