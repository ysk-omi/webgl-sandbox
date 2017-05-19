class SceneController {
  constructor(){
    this.core = new THREE.Scene();
    this.core.fog = new THREE.FogExp2(0x000020, 0.015);
    this.directional = new THREE.DirectionalLight(0xffffff);
    this.directional.position.set(100, 100, 100)
    this.ambient = new THREE.AmbientLight(0xffffff, 0.2);
    this.core.add(this.directional);
    this.core.add(this.ambient);
  }
  add(item){
    this.core.add(item);
  }
  getCore(){
    return this.core;
  }
}

export default SceneController;