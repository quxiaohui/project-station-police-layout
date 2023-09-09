import * as THREE from 'three';

const geometry = new THREE.PlaneGeometry(5000, 5000); //1200, 700
const material = new THREE.MeshBasicMaterial({
  color: 0xa9a9a9,
});
const mesh = new THREE.Mesh(geometry, material);

// 旋转矩形平面
mesh.rotateX(-Math.PI / 2);
mesh.position.setY(-1);

export default mesh;
