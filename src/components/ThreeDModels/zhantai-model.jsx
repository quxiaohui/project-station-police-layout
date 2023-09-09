import * as THREE from 'three';

// 创建一个层级模型对象
const group = new THREE.Group();

// Shape外轮廓：矩形
const shape = new THREE.Shape();
// 绘制直线线段，线段起点：.currentPoint，线段结束点：(100,0)
shape.lineTo(22, 0);//.currentPoint变为(100, 0)
shape.lineTo(22, 30);//.currentPoint变为(100, 100)
shape.lineTo(0, 30);//.currentPoint变为(0, 100)

//Shape内孔轮廓
const path3 = new THREE.Path();// 方形孔
path3.moveTo(3, 0);
path3.lineTo(19, 0);
path3.lineTo(19, 27);
path3.lineTo(0, 27);
//三个内孔轮廓分别插入到holes属性中
shape.holes.push(path3);

const geometry = new THREE.ExtrudeGeometry(shape, {
    depth: 40,//拉伸长度
    bevelEnabled: false,//禁止倒角
    curveSegments: 50,
});

const texLoader = new THREE.TextureLoader();
// .load()方法加载图像，返回一个纹理对象Texture
const texture = texLoader.load('textures/dalishi.jpg');

// 设置阵列
texture.wrapS = THREE.RepeatWrapping;
texture.wrapT = THREE.RepeatWrapping;
// uv两个方向纹理重复数量
texture.repeat.set(2, 1); //注意选择合适的阵列数量

const material = new THREE.MeshLambertMaterial({
    map: texture
});
const mesh = new THREE.Mesh(geometry, material);

const geometry1 = new THREE.BoxGeometry(22, 30, 2);
const mesh1 = new THREE.Mesh(geometry1, material);
mesh1.translateY(15);
mesh1.translateX(11);
mesh1.translateZ(40);
group.add(mesh, mesh1);

export default group;