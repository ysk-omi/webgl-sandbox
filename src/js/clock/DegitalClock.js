import NumberBox from './NumberBox';

class DegitalClock {
  constructor(){
    this.core = new THREE.Group();
    this.numberBoxs = [];
    this.currentTime = performance.now();
    this._init();
  }
  _init(){
    //ボックスを８つ用意する
    for(let i = 0; i < 8; i++){
      this.numberBoxs[i] = new NumberBox({
        position: {x: i * 4 - 16, y: 0.5*5/2, z: 0},
        size: 0.5
      });
      this.core.add(this.numberBoxs[i].core);
    }
    //３つ目と５目は：を設定
    this.numberBoxs[2].setCount(10);
    this.numberBoxs[5].setCount(10);
  }
  update(){
    for(let i = 0; i < 8; i++){
      this.numberBoxs[i].update();
    }
  }
  setTimeCount(hour, minute, second) {
    //文字列変換
    let _hour = hour + '';
    let _minute = minute + '';
    let _second = second + '';

    //時間
    if(hour >= 10){
      this.numberBoxs[0].setCount(_hour.slice(-2,1));
    }else{
      this.numberBoxs[0].setCount(0);
    }
    this.numberBoxs[1].setCount(_hour.slice(-1));

    //分
    if(minute >= 10){
      this.numberBoxs[3].setCount(_minute.slice(-2,1));
    }else{
      this.numberBoxs[3].setCount(0);
    }
    this.numberBoxs[4].setCount(_minute.slice(-1));

    //秒
    if(second >= 10){
      this.numberBoxs[6].setCount(_second.slice(-2,1));
    }else{
      this.numberBoxs[6].setCount(0);
    }
    this.numberBoxs[7].setCount(_second.slice(-1));
  }
}

export default DegitalClock;