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
  ],
  [
    [0, 0, 0],
    [0, 1, 0],
    [0, 0, 0],
    [0, 1, 0],
    [0, 0, 0],
  ]
];

const NUMBER_BOX_PARAM = {
  position: {
    x: 0,
    y: 0,
    z: 0
  },
  size: 1
};

class NumberBox {
  constructor(param){
    this.count = 0;
    this.core = new THREE.Group();
    this.param = Object.assign({}, NUMBER_BOX_PARAM, param);
    this.geometry = new THREE.BoxGeometry(this.param.size, this.param.size, this.param.size);
    this.material = new THREE.MeshPhongMaterial({
      color: 0x8fb5dc,
      specular: 0xffffff
    });
    this.item = [];
    this.init();
  }
  init(){
    for(var y = 0; y < 5; y++){
      this.item[y] = [];
      for(var x = 0; x < 3; x++){
        let index = 1;
        this.item[y][x] = new THREE.Mesh(this.geometry, this.material);
        this.item[y][x].position.x = x * this.param.size - this.param.size;
        this.item[y][x].position.y = (y - this.param.size * 2) * - this.param.size;
        this.item[y][x].scale.x = 1;
        this.item[y][x].scale.y = 1;
        this.item[y][x].scale.z = 1;
        console.log(this.item[y][x]);
        this.core.add(this.item[y][x]);
      }
    }
    this.updatePosition();
  }
  update(){
    for(var y = 0; y < 5; y++){
      for(var x = 0; x < 3; x++){
        let index = 1;
        let scale = NUMBER[this.count][y][x];
        this.item[y][x].scale.x += (scale - this.item[y][x].scale.x) * 0.2;
        this.item[y][x].scale.y += (scale - this.item[y][x].scale.y) * 0.2;
        this.item[y][x].scale.z += (scale - this.item[y][x].scale.z) * 0.2;
      }
    }
  }
  updatePosition(){
    this.core.position.x = this.param.position.x;
    this.core.position.y = this.param.position.y;
    this.core.position.z = this.param.position.z;
  }
  setCount(count){
    this.count = count;
  }
}

export default NumberBox;