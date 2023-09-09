import React, { useEffect, useState } from 'react';
import * as THREE from 'three';
import { getResourceDeploymentList } from '@/services/resource/resource';
import styles from './index.less';
import { OrbitControls } from '../../../../../node_modules/three/examples/jsm/controls/OrbitControls.js';
import { FontLoader } from '../../../../../node_modules/three/examples/jsm/loaders/FontLoader.js';
// import { FontLoader } from 'three/addons/loaders/FontLoader.js';
// /loaders/FontLoader.js

const Platform = (props) => {
  const [resourceLayoutList, setResourceLayoutList] = useState([]);

  // 获取资源部署数据
  const getPoliceLayout = () => {
    getResourceDeploymentList({
      pageIndex: 0,
      floorId: props?.floorId,
    }).then(async (res) => {
      await setResourceLayoutList(res?.data?.data);
      if (!res?.data?.data) {
        return;
      }
      // 控制页面布局
      initPage(res?.data?.data);
    });
  };

  const getTextCanvas1 = (text, color) => {
    var width = 20,
      height = 20;
    var canvas = document.createElement('canvas');
    console.log(canvas);
    canvas.width = width;
    canvas.height = height;
    var ctx = canvas.getContext('2d');
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, width, height);
    ctx.font = 5 + 'px " bold';
    ctx.color = '#000';
    // ctx.textAlign = 'center'
    ctx.fillStyle = '#2891FF';
    ctx.fillText(`${text}`, 0, 10);
    return canvas;
  };

  //   控制页面布局
  const initPage = (data) => {
    const scene = new THREE.Scene();

    // 站台
    const zhantai = new THREE.BoxGeometry(15, 200, 10); //站台长宽高
    const zhantaiMaterial = new THREE.MeshBasicMaterial({
      color: 0xffffcf, //设置站台材质颜色
    });
    data
      .filter((x) => x.typeName === '站台')
      .map((item, index) => {
        const mesh = new THREE.Mesh(zhantai, zhantaiMaterial); //网格模型对象Mesh
        // 沿着x轴分布
        mesh.position.set(item.positionX, item.positionY, item.positionZ);
        scene.add(mesh); //网格模型添加到场景中
      });

    // 电梯
    const dianti = new THREE.BoxGeometry(20, 20, 10); //电梯长宽高
    const diantimaterial = new THREE.MeshBasicMaterial({
      color: 0xe5e5e7, //设置材质颜色
    }); //材质

    data
      .filter((x) => x.typeName === '电梯')
      .map((item, index) => {
        const mesh = new THREE.Mesh(dianti, diantimaterial); //网格模型对象Mesh
        // 沿着x轴分布
        mesh.position.set(item.positionX, item.positionY, item.positionZ);
        const load = new THREE.TextureLoader();
        const text = load.load();
        scene.add(mesh); //网格模型添加到场景中
      });

    // 换乘大厅
    const zhanting = new THREE.BoxGeometry(50, 160, 10); //长宽高
    const zhantingmaterial = new THREE.MeshBasicMaterial({
      color: 0xf6cecc, //设置材质颜色
    }); //材质
    data
      .filter((x) => x.typeName === '换乘厅')
      .map((item, index) => {
        const mesh = new THREE.Mesh(zhanting, zhantingmaterial); //网格模型对象Mesh
        // 沿着x轴分布
        mesh.position.set(item.positionX, item.positionY, item.positionZ);
        scene.add(mesh); //网格模型添加到场景中
      });

    // 文字
    const loader = new FontLoader();
    loader.load('../../../../assets/fonts/helvetiker_regular.typeface.json', (font) => {
      console.log('font', font);

      const geometry = new TextGeometry('Hello three.js!', {
        font: font,
        size: 80,
        height: 5,
        curveSegments: 12,
        bevelEnabled: true,
        bevelThickness: 10,
        bevelSize: 8,
        bevelSegments: 5,
      });
      // 创建材质
      const meshMaterial = new THREE.MeshStandardMaterial({
        color: 0xeeffff,
      });
      // 创建文字网格对象
      mesh = new THREE.Mesh(geometry, meshMaterial);
      mesh.position.set(40, -30, 100);
      // 网格对象添加到场景中
      scene.add(mesh);
    });
    // var text = new THREE.BoxGeometry( 30,30, 30 );
    // var textMaterials = [
    //     new THREE.MeshBasicMaterial( { color: 'blue' } ), // right
    //     new THREE.MeshBasicMaterial( { color: 'yellow' } ), // left
    //     new THREE.MeshBasicMaterial( { color: 'red' } ),// top
    //     new THREE.MeshBasicMaterial( { color: 'black' } ), // bottom
    //     new THREE.MeshBasicMaterial( { map: new THREE.CanvasTexture(getTextCanvas1()) } ),// back
    //     new THREE.MeshBasicMaterial( { color: 'green' } ), // front
    // ];
    // var cube = new THREE.Mesh( text, textMaterials );
    // cube.position.set(-160, 40 , 0)
    // scene.add(cube);

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

    // for (let i =0; i<5;i++) {
    //     const mesh = new THREE.Mesh(dianti, diantimaterial); //网格模型对象Mesh
    //     // 沿着x轴分布
    //     mesh.position.set(-160, -10, -1);
    //     scene.add(mesh); //网格模型添加到场景中
    // }

    // const axesHelper = new THREE.AxesHelper(150);
    // scene.add(axesHelper);

    const container = document.getElementById('container');
    const width = container.clientWidth;
    const height = container.clientHeight;
    // 设置相机
    const camera = new THREE.PerspectiveCamera(30, width / height, 0.1, 2000); //创建相机
    camera.position.set(0, 0, 500); //设置相机坐标
    camera.lookAt(0, 0, 0); //指向mesh对应的位置
    const renderer = new THREE.WebGLRenderer(); //生成渲染实例
    // 设置渲染器大小样式
    renderer.setSize(width, height); //设置宽高
    renderer.setClearColor('#e5e5e5'); //背景颜色
    renderer.render(scene, camera);
    container.appendChild(renderer.domElement); //生成的渲染的实例, 这个要放到对应的dom容器里面

    // 设置相机控件轨道控制器OrbitControls
    const controls = new OrbitControls(camera, renderer.domElement);
    // 如果OrbitControls改变了相机参数，重新调用渲染器渲染三维场景
    controls.addEventListener('change', function () {
      renderer.render(scene, camera); //执行渲染操作
    }); //监听鼠标、键盘事件
  };

  useEffect(() => {
    // 获取资源部署
    getPoliceLayout();
  }, []);

  return <div className={styles.platform} id="container"></div>;
};
export default Platform;
