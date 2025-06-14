
export default class Slide {
  constructor(startTime, endTime) {
    this.startTime = startTime;
    this.endTime = endTime;
    this.items = [];
  }

  addItem(item) {
    if (typeof item.showAt !== "number") {
      throw new Error("Missing showAt in item");
    }
    if (item.showAt > this.endTime) {
      throw new Error(`Item showAt=${item.showAt} is beyond slide endTime=${this.endTime}`);
    }
    this.items.push(item);
  }

  addItems(...items) {
    for (const item of items) {
      this.addItem(item);
    }
  }

  toJSON() {
    return {
      startTime: this.startTime,
      endTime: this.endTime,
      background: this.background || null,
      items: this.items
    };
  }
  
}
