import * as THREE from 'three';

// Shape外轮廓：矩形
const shape = new THREE.Shape();
shape.lineTo(30, 0);
shape.lineTo(30, 40);
shape.lineTo(0, 40);

//Shape内孔轮廓
const path3 = new THREE.Path();// 方形孔
path3.moveTo(3, 3);
path3.lineTo(27, 3);
path3.lineTo(27, 37);
path3.lineTo(3, 37);
//三个内孔轮廓分别插入到holes属性中
shape.holes.push(path3);

const geometry = new THREE.ExtrudeGeometry(shape, {
    depth: 2,//拉伸长度
    bevelEnabled: false,//禁止倒角
    curveSegments: 50,
});

const texLoader = new THREE.TextureLoader();
// .load()方法加载图像，返回一个纹理对象Texture
const texture = texLoader.load('textures/shuizuan.jpg');

// 设置阵列
texture.wrapS = THREE.RepeatWrapping;
texture.wrapT = THREE.RepeatWrapping;
// uv两个方向纹理重复数量
texture.repeat.set(2, 1); //注意选择合适的阵列数量

const material = new THREE.MeshLambertMaterial({
    map: texture
});
const mesh = new THREE.Mesh(geometry, material);

export default mesh;