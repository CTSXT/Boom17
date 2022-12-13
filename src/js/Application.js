import EventEmitter from "eventemitter3";

export default class Application extends EventEmitter {
  static get events() {
    return {
      READY: "ready"
    };
  }

  constructor() {
    super();
    this.emojis = [];
    this.banana = "🍌";
    this.emit(Application.events.READY);
  }
  setEmojis(emojis) {
    this.emojis = emojis;
    const div = document.querySelector("#emojis");
    this.emojis.forEach((elem) => {
      let p = document.createElement("p");
      p.textContent = elem;
      div.appendChild(p);
    });
  }

  addBananas() {
    document.querySelector('#emojis').replaceChildren();
    this.emojis.map(elem=>{
      return elem+=this.banana;
    })
    const div = document.querySelector("#emojis");
    this.emojis.forEach((elem) => {
      let p = document.createElement("p");
      p.textContent = elem;
      div.appendChild(p);
    });
  }
}
