import CameraController from './clock/CameraController';
import SceneController from './clock/SceneController';
import Clock from './clock/Clock';

const RENDERER_PARAMETER = {
  clearColor: 0xEEEEEE,
  width: window.innerWidth,
  height: window.innerHeight
};

class MainController {
  constructor(target, param){
    this.targetDOM = document.getElementById(target);
    this.param = Object.assign({}, RENDERER_PARAMETER, param);
    this.scene = new SceneController();
    this.camera = new CameraController();
    this.renderer = new THREE.WebGLRenderer();
    this.clock = new Clock();
    this.update = () => this._update();
    this.isPlay = false;
    this.currentTime = performance.now();
    this.init();
  }
  init(){
    this.renderer.setClearColor(new THREE.Color(RENDERER_PARAMETER.clearColor));
    this.renderer.setSize(RENDERER_PARAMETER.width, RENDERER_PARAMETER.height);
    this.targetDOM.appendChild(this.renderer.domElement);
    window.scene = this.scene.core;
    this.scene.add(this.clock.core)
  }
  play(){
    this.update();
  }
  pause(){
  }
  _update(){
    requestAnimationFrame(this.update);
    this.clock.setTimeCount(new Date().getHours() + '', new Date().getMinutes() + '', new Date().getSeconds() + '');
    this.clock.update();
    this.renderer.render(this.scene.core, this.camera.core);
  }
}

let mainController = new MainController('webgl');
mainController.play();