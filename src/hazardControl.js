import Hazard from './hazard'; // Import Hazard if it's in a separate module

export default class Control {
    constructor(hazardList, map) {
        this.size = hazardList.length;
        this.current = 0;
        var temp = this.size;
        this.container;
        this.map =map;
        if (this.size < 50) {
            this.size *= 2;
            this.container = new Array(2 * this.size);
        } else {
            this.size = 100;
            this.container = new Array(100);
        }
        for (let i = 0; i < temp; i++) {
            this.insert(hazardList[i]);
        }
    }

    insert(hazard) {
        console.log("test")
        var newHazard = new Hazard(hazard, this.map);
        if (this.current == this.size) {
            this.grow();
        }
        this.container[this.current++] = newHazard;
    }

    grow() {
        var temp = this.container;
        this.container = new Array(2 * this.size);
        for (let i = 0; i < this.size; i++) {
            this.container[i] = temp[i];
        }
    }

    at(index) {
        return this.container[index];
    }

    viewAll() {
        for (let i = 0; i < this.current; i++) {
            this.container[i].show();
        }
    }

    removeAll() {
        for (let i = 0; i < this.current; i++) {
            this.container[i].remove();
        }
    }
}