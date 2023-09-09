import * as THREE from 'three';

const shape = new THREE.Shape();
shape.lineTo(530, 0); //.currentPoint变为(530,0)
shape.lineTo(530, 200);
// 圆弧.arc参数的圆心0,0坐标是相对当前.currentPoint而言，而不是坐标原点
shape.arc(-30, 0, 30, 0, Math.PI / 2); //.currentPoint变为圆弧线结束点坐标
// 绘制直线，直线起点：圆弧绘制结束的点  直线结束点：(0, 0)
shape.lineTo(-500, 230);
shape.arc(0, -30, 30, Math.PI / 2, Math.PI);
shape.lineTo(-530, -230);
shape.arc(30, 30, 30, Math.PI, Math.PI + Math.PI / 2);
shape.lineTo(530, -230);
shape.arc(-30, 30, 30, Math.PI + Math.PI / 2, Math.PI * 2);
shape.lineTo(530, 200);

// shape:填充轮廓  shape有直线之外的曲线，如果默认渲染不光滑，可以设置参数2提升
const geometry = new THREE.ShapeGeometry(shape, 20);

const material = new THREE.MeshLambertMaterial({
  color: 0xd0d0d0,
  // wireframe:true,//辅助观察三角形计算结果
});
const mesh = new THREE.Mesh(geometry, material);

// 旋转矩形平面
mesh.rotateX(-Math.PI / 2);
mesh.position.setY(0);

export default mesh;
