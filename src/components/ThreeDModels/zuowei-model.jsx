// 引入three.js
import * as THREE from 'three';

// 创建一个层级模型对象
const group = new THREE.Group();

//纹理贴图加载器TextureLoader
const texLoader = new THREE.TextureLoader();
// .load()方法加载图像，返回一个纹理对象Texture
const texture = texLoader.load('textures/boli.jpg');

// 设置阵列
texture.wrapS = THREE.RepeatWrapping;
texture.wrapT = THREE.RepeatWrapping;
// uv两个方向纹理重复数量
texture.repeat.set(2, 1); //注意选择合适的阵列数量

//创建两个网格模型mesh1、mesh2
const material = new THREE.MeshLambertMaterial({ map: texture });

const geometry = new THREE.BoxGeometry(25, 5, 5);
const mesh1 = new THREE.Mesh(geometry, material);
const geometry1 = new THREE.BoxGeometry(30, 5, 5);
const mesh2 = new THREE.Mesh(geometry1, material);
mesh2.translateX(35);
const mesh3 = new THREE.Mesh(geometry1, material);
mesh3.translateX(80);
const mesh4 = new THREE.Mesh(geometry, material);
mesh4.translateX(115);


group.add(mesh1, mesh2, mesh3, mesh4);

//沿着Y轴平移mesh1和mesh2的父对象，mesh1和mesh2跟着平移
//group.translateY(100);

//父对象旋转，子对象跟着旋转
group.rotateY(Math.PI / 2);

// group也会作为场景scene的子对象插入到场景中
export default group;
