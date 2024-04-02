import { param } from "@/utils";

export default class ComponentsLibrary {
    constructor() {
        switch (param) {
            case "DominioA":
                this.actualLib = require("@/libs/lib-a");
                break;
            case "DominioB":
                this.actualLib = require("@/libs/lib-b");
                break;
            default:
                this.actualLib = require("@/libs/lib-a");
                break;
        }
    }

    static getInstance() {
        if (!this.instance) {
            this.instance = new ComponentsLibrary();
        }
        return this.instance.actualLib.default;
    }
}