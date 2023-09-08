import React, { useEffect, useState } from 'react';
import * as THREE from 'three';
import styles from './index.less';
import { OrbitControls } from '../../../../../node_modules/three/examples/jsm/controls/OrbitControls.js';
import { getResourceDeploymentList } from '@/services/resource/resource';

const Platform = (props) => {
  console.log(props, '====');

  const [floorTabList, setFloorTabList] = useState([]);
  const [resourceLayoutList, setResourceLayoutList] = useState([]);

  const getPoliceLayout = () => {
    getResourceDeploymentList({ pageIndex: 0, floorId: props?.floorId }).then(async (res) => {
      console.log(res, '====');
      await setResourceLayoutList(res.data.data);
      initPage(res.data.data);
    });
  };

  const initPage = (data) => {
    const scene = new THREE.Scene();

    const geometry = new THREE.BoxGeometry(15, 200, 10); //长宽高
    const material = new THREE.MeshBasicMaterial({
      color: 0x0000ff, //设置材质颜色
    }); //材质
    // const material = new THREE.MeshLambertMaterial();
    // const pointLight = new THREE.PointLight(0xffffff, 1.0);
    // pointLight.position.set(150, 0, 0);//点光源放在x轴上
    // scene.add(pointLight);

    // const mesh = new THREE.Mesh(geometry, material); //生成网格
    // mesh.position.set(20,10,0);
    // scene.add(mesh);

    // 北京粉色
    // const geometry1 = new THREE.BoxGeometry(300, 50, 200); //长宽高
    // const material1 = new THREE.MeshBasicMaterial({
    //     color: 0x00ff00, //设置材质颜色
    // }); //材质
    // const mesh1 = new THREE.Mesh(geometry1, material1); //网格模型对象Mesh
    // mesh1.position.set(20,20,20);
    // scene.add(mesh1); //网格模型添加到场景中
    console.log(resourceLayoutList, 'resourceLayoutList');
    data.map((item, index) => {
      const mesh = new THREE.Mesh(geometry, material); //网格模型对象Mesh
      // 沿着x轴分布
      mesh.position.set(item.positionX, item.positionY, item.positionZ);
      scene.add(mesh); //网格模型添加到场景中
    });

    const axesHelper = new THREE.AxesHelper(150);
    scene.add(axesHelper);

    const container = document.getElementById('container');
    const width = container.clientWidth;
    const height = container.clientHeight;
    const camera = new THREE.PerspectiveCamera(30, width / height, 0.1, 2000); //创建相机
    camera.position.set(0, 0, 400); //设置相机坐标
    camera.lookAt(0, 0, 0); //指向mesh对应的位置
    const renderer = new THREE.WebGLRenderer(); //生成渲染实例
    renderer.setSize(width, height); //设置宽高
    renderer.setClearColor('#000', 0.3); //背景颜色
    renderer.render(scene, camera);
    container.appendChild(renderer.domElement); //生成的渲染的实例, 这个要放到对应的dom容器里面

    // 设置相机控件轨道控制器OrbitControls
    const controls = new OrbitControls(camera, renderer.domElement);
    // 如果OrbitControls改变了相机参数，重新调用渲染器渲染三维场景
    controls.addEventListener('change', function () {
      renderer.render(scene, camera); //执行渲染操作
    }); //监听鼠标、键盘事件

    // const render = () => {
    //     renderer.render(scene, camera); //执行渲染操作
    //     mesh.rotateY(0.01);//每次绕y轴旋转0.01弧度
    //     requestAnimationFrame(render);//请求再次执行函数render
    // }

    // render();
  };

  useEffect(() => {
    // 获取资源部署
    getPoliceLayout();
  }, []);
  return <div className={styles.platform} id="container"></div>;
};

export default Platform;
