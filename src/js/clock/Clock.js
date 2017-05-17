import NumberBox from './NumberBox';

class Clock {
  constructor(){
    this.core = new THREE.Group();
    this.boxs = [];
    this.currentTime = performance.now();
    this._init();
  }
  _init(){
    for(let i = 0; i < 6; i++){
      this.boxs[i] = new NumberBox({
        position: {x: i * 4 - 12, y: 0, z: 0}
      });
      this.core.add(this.boxs[i].core);
    }
  }
  update(){
    for(let i = 0; i < 6; i++){
      this.boxs[i].update();
    }
    this.core.rotation.y += 0.005;
    this.core.rotation.x += 0.0005;
    this.core.rotation.z += 0.0005;
  }
  setTimeCount(hour, minute, second) {
    if(hour >= 10){
      this.boxs[0].setCount(hour.slice(-2,1));
    }else{
      this.boxs[0].setCount(0);
    }
    this.boxs[1].setCount(hour.slice(-1));

    if(minute >= 10){
      this.boxs[2].setCount(minute.slice(-2,1));
    }else{
      this.boxs[2].setCount(0);
    }
    this.boxs[3].setCount(minute.slice(-1));

    if(second >= 10){
      this.boxs[4].setCount(second.slice(-2,1));
    }else{
      this.boxs[4].setCount(0);
    }
    this.boxs[5].setCount(second.slice(-1));
  }
}

export default Clock;