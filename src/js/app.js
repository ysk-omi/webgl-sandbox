import CameraController from './clock/CameraController';
import SceneController from './clock/SceneController';
import DegitalClock from './clock/DegitalClock';
import AnalogClock from './clock/AnalogClock';

const RENDERER_PARAMETER = {
  clearColor: 0xEEEEEE,
  width: window.innerWidth,
  height: window.innerHeight
};

class MainController {
  constructor(target, param){
    this.targetDOM = document.getElementById(target);
    this.param = Object.assign({}, RENDERER_PARAMETER, param);
    this.renderer = new THREE.WebGLRenderer();
    this.scene = new SceneController();
    this.camera = new CameraController();
    this.degitalClock = new DegitalClock();
    this.analogClock = new AnalogClock();
    this.update = () => this._update();
    this.isPlay = false;
    this.currentSecond = new Date().getSeconds();
    this.currentTime = performance.now();
    this.init();
  }
  init(){
    this.renderer.setClearColor(new THREE.Color(RENDERER_PARAMETER.clearColor));
    this.renderer.setSize(RENDERER_PARAMETER.width, RENDERER_PARAMETER.height);
    this.targetDOM.appendChild(this.renderer.domElement);
    this.scene.add(this.degitalClock.core);
    this.scene.add(this.analogClock.core);

    //three.js inspector用
    window.scene = this.scene.core;
  }
  play(){
    this.update();
  }
  pause(){
  }
  _update(){
    requestAnimationFrame(this.update);
    //時間の取得
    let hour = new Date().getHours();
    let minute = new Date().getMinutes();
    let second = new Date().getSeconds();
    if(this.currentSecond !== second){
      //一秒ごとにランダムなカメラアングルを設定する
      this.camera.setTargetAngle(
        (Math.random() * 10 - 5) / (2 * Math.PI), (Math.random() * 10 - 5) / (2 * Math.PI)
      );
      this.currentSecond = second;
    }
    //デジタル時計のアップデート
    this.degitalClock.setTimeCount(hour, minute, second);
    this.degitalClock.update();

    //アナログ時計の針を進める
    this.analogClock.setTimeCount(hour, minute, second);

    //カメラのアップデート
    this.camera.update();

    //描画
    this.renderer.render(this.scene.core, this.camera.core);
  }
}

let mainController = new MainController('webgl');
mainController.play();


