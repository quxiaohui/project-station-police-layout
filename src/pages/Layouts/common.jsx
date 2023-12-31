import * as THREE from 'three';
//模型对象
import back_model from '../../components/ThreeDModels/background-model.jsx'; //背景
import outsideground_model from '../../components/ThreeDModels/outsideground-model.jsx'; //外边界
import inside_ground_model from '../../components/ThreeDModels/insideground-model.jsx'; //内边界
import wc_model from '../../components/ThreeDModels/wc-model.jsx'; //卫生间
import office_model from '../../components/ThreeDModels/office-model.jsx'; //办公室
import ticket_room_model from '../../components/ThreeDModels/ticket-room-model.jsx'; //票厅
import water_room_model from '../../components/ThreeDModels/water-room-model.jsx'; //开水间
import equipment_room_model from '../../components/ThreeDModels/equipment-room-model.jsx'; //设备间
import duty_room_model from '../../components/ThreeDModels/duty-room-model.jsx'; //执勤室
import empty_room_model from '../../components/ThreeDModels/empty-room-model.jsx'; //空房间
import men_model from '../../components/ThreeDModels/men-model.jsx'; //门
import zuowei_model from '../../components/ThreeDModels/zuowei-model.jsx'; //座椅
import zhantai_model from '../../components/ThreeDModels/zhantai-model.jsx'; //站台
import jianpiaokou_model from '../../components/ThreeDModels/jianpiaokou-model.jsx'; //检票口
import bupiao_model from '../../components/ThreeDModels/bupiao-model.jsx'; //补票
import dianti_model from '../../components/ThreeDModels/dianti-model.jsx'; //站台

import jingche_model from '../../components/ThreeDModels/jingche-model.jsx'; //警车
import diandongche_model from '../../components/ThreeDModels/diandongche-model.jsx'; //警用电动车
import jingquan_model from '../../components/ThreeDModels/jingquan-model.jsx'; //警犬
import gangting_model from '../../components/ThreeDModels/gangting-model.jsx'; //岗厅
import minjing_model from '../../components/ThreeDModels/minjing-model.jsx'; //民警
import tejing_model from '../../components/ThreeDModels/tejing-model.jsx'; //特警

export function addModelByTypeName(typeName, positionX, positionY, positionZ, scene) {
  if (typeName == '文字') return;
  var model;
  switch (typeName) {
    case '背景':
      model = back_model.clone();
      console.log('背景');
      break;
    case '外边界':
      model = outsideground_model.clone();
      break;
    case '内边界':
      model = inside_ground_model.clone();
      break;
    case '卫生间':
      model = wc_model.clone();
      break;
    case '办公室':
      model = office_model.clone();
      break;
    case '票厅':
      model = ticket_room_model.clone();
      break;
    case '开水房':
      model = water_room_model.clone();
      break;
    case '设备间':
      model = equipment_room_model.clone();
      break;
    case '执勤室':
      model = duty_room_model.clone();
      break;
    case '空房间':
      model = empty_room_model.clone();
      break;
    case '进站口':
      model = men_model.clone();
      break;
    case '座椅':
      model = zuowei_model.clone();
      break;
    case '站台':
      model = zhantai_model.clone();
      break;
    case '检票口':
      model = jianpiaokou_model.clone();
      break;
    case '补票':
      model = bupiao_model.clone();
    case '电梯':
      model = dianti_model.clone();
      break;

    case '警车':
      model = jingche_model.clone();
      break;
    case '警用电动车':
      model = diandongche_model.clone();
      break;
    case '警犬':
      model = jingquan_model.clone();
      break;
    case '岗厅':
      model = gangting_model.clone();
      break;
    case '民警':
      console.log('民警')
      model = minjing_model.clone();
      break;
    case '特警':
      model = tejing_model.clone();
      break;
    default:
      model = empty_room_model.clone();
      break;
  }
  if (typeName != '背景' && typeName != '外边界' && typeName != '内边界') {
    model.position.set(positionX, positionY, positionZ);
  }
  if (positionZ < 0) {
    model.rotateY(Math.PI);
  }
  if ((positionX > 500 || positionX < -500)&& (typeName=='警车' || typeName=='警用电动车'|| typeName=='警犬'|| typeName=='岗厅'|| typeName=='民警'|| typeName=='特警'|| typeName=='进站口')) {
    model.rotateY(Math.PI / 2);
  }
  scene.add(model);
}
