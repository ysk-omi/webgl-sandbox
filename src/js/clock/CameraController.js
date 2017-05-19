const CAMERA_PARAMETER = {
  fovy: 60,
  aspect: window.innerWidth / window.innerHeight,
  near: 0.1,
  far: 1000.0,
  x: 0.0,
  y: 0.0,
  z: 40.0,
  lookAt: new THREE.Vector3(0.0, 0.0, 0.0),
  r: 40.0
};

class CameraController {
  constructor(param){
    this.param = Object.assign({}, CAMERA_PARAMETER, param);
    this.targetAngle = {
      x: 0.0,
      y: 0.0
    };
    this.angle = {
      x: 0.0,
      y: 0.0
    };
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

    //ポジション設定
    this.setPosition();

    this.core.lookAt(this.param.lookAt);
  }
  update(){
    //ターゲットとなるアングルへ値を変化させる
    this.angle.x += (this.targetAngle.x - this.angle.x) * 0.09;
    this.angle.y += (this.targetAngle.y - this.angle.y) * 0.09;
    this.angle.z+= (this.targetAngle.z - this.angle.z) * 0.09;

    //ポジション設定
    this.setPosition();

    this.core.lookAt(this.param.lookAt);
  }
  //yの場所を求めて、その高さで水平に球を切ったときの円の半径を求めてx,zを求める
  setPosition(){
    this.core.position.y = Math.sin(this.angle.y) * this.param.r;
    this.core.position.x = Math.cos(this.angle.y) * this.param.r * Math.sin(this.angle.x);
    this.core.position.z = Math.cos(this.angle.y) * this.param.r * Math.cos(this.angle.x);
  }
  //移動したいアングルを設定
  setTargetAngle(x, y, z){
    this.targetAngle.x = x;
    this.targetAngle.y = y;
    this.targetAngle.z = z;
  }
}

export default CameraController;