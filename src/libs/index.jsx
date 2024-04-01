import libA from "@/libs/lib-a";
import libB from "@/libs/lib-b";

const param =
    // "libA"
    "libB"

export default class LibraryComponents {
    constructor() {
        switch (param) {
            case "libA":
                this.actualLib = libA;
                break;
            case "libB":
                this.actualLib = libB;
                break;
            default:
                this.actualLib = libA;
                break;
        }
    }

    static getInstance() {
        if (!this.instance) {
            this.instance = new LibraryComponents();
        }
        return this.instance.actualLib;
    }
}