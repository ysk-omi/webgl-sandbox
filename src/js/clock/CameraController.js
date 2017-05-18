const CAMERA_PARAMETER = {
  fovy: 60,
  aspect: window.innerWidth / window.innerHeight,
  near: 0.1,
  far: 1000.0,
  x: 0.0,
  y: -2.0,
  z: 40.0,
  lookAt: new THREE.Vector3(0.0, 0.0, 0.0)
};

class CameraController {
  constructor(param){
    this.param = Object.assign({}, CAMERA_PARAMETER, param);
    this.core = null;
    this.init();
  }
  init(){
    this.core = new THREE.PerspectiveCamera(
      this.param.fovy,
      this.param.aspect,
      this.param.near,
      this.param.far
    );
    this.core.position.x = this.param.x;
    this.core.position.y = this.param.y;
    this.core.position.z = this.param.z;
    this.core.lookAt(this.param.lookAt);
  }
  update(){
    this.core.position.x = this.param.x;
    this.core.position.x = this.param.y;
    this.core.position.x = this.param.z;
    this.core.lookAt(this.param.lookAt);
  }
}

export default CameraController;