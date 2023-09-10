// 引入Three.js
import * as THREE from 'three';
// 引入gltf模型加载库GLTFLoader.js
import { GLTFLoader } from '../../../node_modules/three/examples/jsm/loaders/GLTFLoader.js';

const loader = new GLTFLoader(); //创建一个GLTF加载器
const model = new THREE.Group(); //声明一个组对象，用来添加加载成功的三维场景

loader.load('gltfs/jingquan1.glb', function (gltf) {
  model.add(gltf.scene);
  model.scale.set(20, 20, 20);
  model.rotateY(Math.PI / 2);
});

export default model;
