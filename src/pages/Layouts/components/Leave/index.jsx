import React, { useEffect, useState } from 'react';
import * as THREE from 'three';
import styles from './index.less';
import { OrbitControls } from '../../../../../node_modules/three/examples/jsm/controls/OrbitControls.js';
import { getResourceDeploymentList } from '@/services/resource/resource';
import { getPoliceDeploymentList } from '@/services/police/police';
import { addModelByTypeName } from '../../common.jsx';
import { async } from './../../../../services/swagger/user';

const Leave = () => {
  // console.log(props, '====');

  const [floorTabList, setFloorTabList] = useState([]);
  const [resourceLayoutList, setResourceLayoutList] = useState([]);
  const [policeLayoutList, setPoliceLayoutList] = useState([]);

  const getResourceLayout = () => {
    getResourceDeploymentList({
      pageIndex: 0,
      floorId: '71895aa6-d77f-43e9-8fdf-ab2e543a7286',
    }).then(async (res) => {
      console.log(res, '====');
      await setResourceLayoutList(res.data.data);
      addModel(res.data.data);
    });
  };

  const getPoliceLayout = () => {
    getPoliceDeploymentList({ pageIndex: 0, floorId: '71895aa6-d77f-43e9-8fdf-ab2e543a7286' }).then(
      async (res) => {
        console.log(res, '====');
        await setPoliceLayoutList(res.data.data);
        addModel(res.data.data);
      },
    );
  };

  //场景
  const scene = new THREE.Scene();
  addModelByTypeName('背景', 0, 0, 0, scene);
  addModelByTypeName('外边界', 0, 0, 0, scene);
  addModelByTypeName('内边界', 0, 0, 0, scene);

  const initPage = () => {
    console.log('initPage');

    //光源设置
    const directionalLight = new THREE.DirectionalLight(0xffffff, 3);
    directionalLight.position.set(500, 500, 500);
    scene.add(directionalLight);
    const ambient = new THREE.AmbientLight(0xffffff, 1);
    scene.add(ambient);

    //渲染器和相机
    const container = document.getElementById('container');
    const width = container.clientWidth;
    const height = container.clientHeight;
    const camera = new THREE.PerspectiveCamera(30, width / height, 1, 3000);
    camera.position.set(200, 800, 1200);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(width, height);
    //解决加载gltf格式模型颜色偏差问题
    renderer.outputEncoding = THREE.sRGBEncoding;
    container.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true; // an animation loop is required when either damping or auto-rotation are enabled
    controls.dampingFactor = 0.05;
    controls.screenSpacePanning = false;
    controls.minDistance = 150;
    controls.maxDistance = 1500;
    controls.maxPolarAngle = Math.PI / 3;

    function animate() {
      requestAnimationFrame(animate);
      controls.update(); // only required if controls.enableDamping = true, or if controls.autoRotate = true
      render();
    }

    function render() {
      renderer.render(scene, camera);
    }

    animate();

    // 画布跟随窗口变化
    window.onresize = function () {
      renderer.setSize(container.clientWidth, container.clientHeight);
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
    };
  };

  const addModel = (data) => {
    data.map((item, index) => {
      addModelByTypeName(item.typeName, item.positionX, item.positionY, item.positionZ, scene);
    });
  };

  useEffect(() => {
    // 获取资源、警力部署
    getResourceLayout();
    getPoliceLayout();
    initPage();
    //setTimeout(() => { initPage(); }, 1000);
  }, []);
  return <div className={styles.leave} id="container"></div>;
};

export default Leave;