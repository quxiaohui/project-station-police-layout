import * as THREE from 'three';

const geometry = new THREE.BoxGeometry(40, 20, 30);
//纹理贴图加载器TextureLoader
const texLoader = new THREE.TextureLoader();
// .load()方法加载图像，返回一个纹理对象Texture
const texture = texLoader.load('textures/wc.png');

// 设置阵列
texture.wrapS = THREE.RepeatWrapping;
texture.wrapT = THREE.RepeatWrapping;
// uv两个方向纹理重复数量
texture.repeat.set(2, 1); //注意选择合适的阵列数量

const material = new THREE.MeshLambertMaterial({
  // 设置纹理贴图：Texture对象作为材质map属性的属性值
  map: texture, //map表示材质的颜色贴图属性
});

const mesh = new THREE.Mesh(geometry, material);

export default mesh;
