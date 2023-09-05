import React, { useEffect, useState } from "react";
import * as THREE from 'three';
import styles from './index.less';

const Platform: React.FC = () => {
    
    const initPage = () => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 1, 1000);  //创建相机
        camera.position.z = 40;  //设置相机坐标
        camera.position.set(3, 3, 20);
        const container = document.getElementById('container')
        const renderer = new THREE.WebGLRenderer();  //生成渲染实例
        renderer.setSize(window.innerWidth, window.innerHeight); //设置宽高
        renderer.setClearColor('#af3', .5) //背景颜色
        container.appendChild(renderer.domElement); //生成的渲染的实例, 这个要放到对应的dom容器里面
        // const axisHelper = new THREE.AxisHelper(2)
        // scene.add(axisHelper)//插入辅助线长度为2的坐标系
        const geometry = new THREE.BoxGeometry(1, 2, 3); //长宽高
        const material = new THREE.MeshBasicMaterial({ color: '#ead' }); //材质
        const cube = new THREE.Mesh(geometry, material); //生成网格
        scene.add(cube);
        renderer.render(scene, camera);
    }

    useEffect(() => {
        initPage()
    }, []);
    return (
        <div className={styles.platform} id="container">
            站台
        </div>
    );
  };

  export default Platform;