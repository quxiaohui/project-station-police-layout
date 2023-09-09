import * as THREE from 'three';

const geometry = new THREE.BoxGeometry(10, 20, 30);
//纹理贴图加载器TextureLoader
const texLoader = new THREE.TextureLoader();
// .load()方法加载图像，返回一个纹理对象Texture
const texture = texLoader.load('textures/dalishi.jpg');

const material = new THREE.MeshLambertMaterial({
  // 设置纹理贴图：Texture对象作为材质map属性的属性值
  map: texture, //map表示材质的颜色贴图属性
});

const mesh = new THREE.Mesh(geometry, material);
export default mesh;
