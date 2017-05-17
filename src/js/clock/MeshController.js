const NUMBER = [
  [
    [1, 1, 1],
    [1, 0, 1],
    [1, 0, 1],
    [1, 0, 1],
    [1, 1, 1]
  ],
  [
    [0, 0, 1],
    [0, 0, 1],
    [0, 0, 1],
    [0, 0, 1],
    [0, 0, 1]
  ],
  [
    [1, 1, 1],
    [0, 0, 1],
    [1, 1, 1],
    [1, 0, 0],
    [1, 1, 1],
  ],
  [
    [1, 1, 1],
    [0, 0, 1],
    [1, 1, 1],
    [0, 0, 1],
    [1, 1, 1],
  ],
  [
    [1, 0, 1],
    [1, 0, 1],
    [1, 1, 1],
    [0, 0, 1],
    [0, 0, 1],
  ],
  [
    [1, 1, 1],
    [1, 0, 0],
    [1, 1, 1],
    [0, 0, 1],
    [1, 1, 1],
  ],
  [
    [1, 1, 1],
    [1, 0, 0],
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
  ],
  [
    [1, 1, 1],
    [0, 0, 1],
    [0, 0, 1],
    [0, 0, 1],
    [0, 0, 1],
  ],
  [
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
  ],
  [
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
    [0, 0, 1],
    [1, 1, 1],
  ]
];

class NumberBox {
  constructor(){
    this.size = 1;
    this.count = 0;
    this.group = new THREE.Group();
    this.geometry = new THREE.BoxGeometry(this.size, this.size, this.size);
    this.material = new THREE.MeshPhongMaterial({
      color: 0x8FCBDC,
      specular: 0xffffff
    });
    this.item = [];
  }
  init(){
    for(var y = 0; y < 5; y++){
      for(var x = 0; x < 3; x++){
        let index = y * x + x;
        this.item[index] = new THREE.Mesh(this.geometry, this.material);
        this.item[index].position.x = x - this.size;
        this.item[index].position.y = (y - this.size * 2) * - this.size;
        this.item[index].scale.x = 0;
        this.item[index].scale.y = 0;
        this.item[index].scale.z = 0;
        this.group.add(this.item[index]);
      }
    }
  }
  update(){
    for(var y = 0; y < 5; y++){
      for(var x = 0; x < 3; x++){
        let index = y * x + x;
        let scale = NUMBER[this.count][y][x];
        item[index].scale.x += (scale - item[index].scale.x) * 0.2;
        item[index].scale.y += (scale - item[index].scale.y) * 0.2;
        item[index].scale.z += (scale - item[index].scale.z) * 0.2;
      }
    }
  }
  setCount(count){
    this.count = count;
  }
}

class Clock {
  constructor(){
    this.group = new THREE.Group();
    this.second = [];
    this.hour = [];
    this.currentTime = performance.now();
    this.init();
  }
  init(){
    this.hour[0] = this.NumberBox();
    this.hour[1] = this.NumberBox();
    this.second[0] = this.NumberBox();
    this.second[1] = this.NumberBox();

    this.group.add(this.hour[0].core);
    this.group.add(this.hour[1].core);
    this.group.add(this.second[0].core);
    this.group.add(this.second[1].core);
  }
  update(){
    this.updateTime();
  }
  updateTime(){
    this.second[0].update();
    this.second[1].update();
    this.hour[0].update();
    this.hour[1].update();
  }
}

export default Clock;