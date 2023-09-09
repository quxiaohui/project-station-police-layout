// 引入Three.js
import * as THREE from 'three';
// import { FontLoader as fontl } from 'three/addons/loaders/FontLoader.js';
// import { TextGeometry as textl } from 'three/addons/geometries/TextGeometry.js';

import { FontLoader as fontL } from '../../../node_modules/three/examples/jsm/loaders/FontLoader.js';
import { TextGeometry as textL } from '../../../node_modules/three/examples/jsm/geometries/TextGeometry.js';

export function createTextModel(data, scene) {
    const loader = new fontL();
    loader.load('../fonts/SimSun_Regular.json', function (font) {
        console.log("加载文字");
        var mat = new THREE.MeshPhongMaterial({
            color: "#00FFFF",
            opacity: 0.8,
            shininess: 1,
        });
        var blackMat = new THREE.MeshPhongMaterial({
            color: "#000000",
            opacity: 0.8,
            shininess: 1,
        });
        var redMat = new THREE.MeshPhongMaterial({
            color: "#ff0000",
            opacity: 0.8,
            shininess: 1,
        });
        data.map((item, index) => {
            if (item.typeName != "座椅" && item.typeName != "岗厅" && item.typeName != "进站口" && item.typeName != "空" && item.title != "空" && item.title != "") {
                var geometry;
                var material;

                if (item.typeName == 'title') {
                    geometry = new textL(item.title, {
                        font: font,          // 字体格式
                        size: 14,           // 字体大小
                        height: 1,          // 字体深度
                    });
                } else {
                    var geometry = new textL(item.title, {
                        font: font,          // 字体格式
                        size: 8,           // 字体大小
                        height: 1,          // 字体深度
                    });
                }

                if (item.typeName == 'title' && (item.positionX > 500 || item.positionX < -500 || item.positionZ > 200 || item.positionZ < -200)) {
                    material = blackMat;
                } else if (item.typeName == 'title') {
                    material = redMat;
                } else {
                    material = mat;
                }

                var mesh = new THREE.Mesh(geometry, material);
                mesh.position.set(item.positionX, item.positionY, item.positionZ)
                if (item.typeName == "民警" || item.typeName == "特警" || item.typeName == "警车" || item.typeName == "警用电动车" || item.typeName == "警犬") {
                    mesh.translateY(30);
                } else if (item.typeName == "title") {
                    mesh.translateY(40);
                }
                else if (item.typeName == "站台") {
                    mesh.translateY(30);
                } else {
                    mesh.translateY(20);
                }
                mesh.rotateX(-Math.PI / 6);
                scene.add(mesh);
            }
        });
    })
};