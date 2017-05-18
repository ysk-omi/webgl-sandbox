import NumberBox from './NumberBox';

class AnalogClock {
  constructor(){
    this.core = new THREE.Group();
    this.hourHand = new THREE.Group();
    this.minuteHand = new THREE.Group();
    this.secondHand = new THREE.Group();
    this._init();
  }
  _init(){
    this.material = new THREE.MeshPhongMaterial({
      color: 0x8fb5dc,
      specular: 0xffffff
    });

    this.hour = new THREE.Mesh(new THREE.BoxGeometry(0.3, 10, 0.3), this.material);
    this.hour.position.y = 5;
    this.hourHand.add(this.hour);

    this.minute = new THREE.Mesh(new THREE.BoxGeometry(0.3, 7, 0.3), this.material);
    this.minute.position.y = 3.5;
    this.minuteHand.add(this.minute);

    this.second = new THREE.Mesh(new THREE.BoxGeometry(0.3, 5, 0.3), this.material);
    this.second.position.y = 2.5;
    this.secondHand.add(this.second);

    this.core.add(this.hourHand);
    this.core.add(this.minuteHand);
    this.core.add(this.secondHand);
  }
  update(){

  }
  setTimeCount(hour, minute, second) {
    this.hourHand.rotation.z = -Math.PI * 2 * (hour % 12 / 12);
    this.minuteHand.rotation.z = -Math.PI * 2 * (minute % 60 / 60);
    this.secondHand.rotation.z = -Math.PI * 2 * (second % 60 / 60);
  }
}

export default AnalogClock;