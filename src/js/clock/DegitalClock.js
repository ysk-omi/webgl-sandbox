import NumberBox from './NumberBox';

class DegitalClock {
  constructor(){
    this.core = new THREE.Group();
    this.numberBoxs = [];
    this.currentTime = performance.now();
    this._init();
  }
  _init(){
    for(let i = 0; i < 8; i++){
      this.numberBoxs[i] = new NumberBox({
        position: {x: i * 4 - 16, y: 0.5*5/2, z: 0},
        size: 0.5
      });
      this.core.add(this.numberBoxs[i].core);
    }
    this.numberBoxs[2].setCount(10);
    this.numberBoxs[5].setCount(10);
  }
  update(){
    for(let i = 0; i < 8; i++){
      this.numberBoxs[i].update();
    }
    // this.core.rotation.y += 0.005;
    // this.core.rotation.x += 0.0005;
    // this.core.rotation.z += 0.0005;
  }
  setTimeCount(hour, minute, second) {
    if(hour >= 10){
      this.numberBoxs[0].setCount(hour.slice(-2,1));
    }else{
      this.numberBoxs[0].setCount(0);
    }
    this.numberBoxs[1].setCount(hour.slice(-1));

    if(minute >= 10){
      this.numberBoxs[3].setCount(minute.slice(-2,1));
    }else{
      this.numberBoxs[3].setCount(0);
    }
    this.numberBoxs[4].setCount(minute.slice(-1));

    if(second >= 10){
      this.numberBoxs[6].setCount(second.slice(-2,1));
    }else{
      this.numberBoxs[6].setCount(0);
    }
    this.numberBoxs[7].setCount(second.slice(-1));
  }
}

export default DegitalClock;