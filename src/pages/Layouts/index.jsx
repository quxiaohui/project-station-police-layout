import React, { useEffect, useState } from 'react';
import styles from './index.less';
import { getFloorList } from '@/services/floor/floor';
import Arrive from './components/Arrive';
import Platform from './components/Platform';
import Leave from './components/Leave';
import { getPoliceTypeList } from '@/services/police/police';

const LayoutManagement = () => {
  const [floorTabList, setFloorTabList] = useState([]);
  const [policeTypeList, setPoliceTypeList] = useState([]);
  const [currentFloorTab, setCurrentFloorTab] = useState();
  const [currentIndex, setCurrentIndex] = useState(0);

  const getFloorTabList = () => {
    getFloorList({ pageIndex: 0 }).then((res) => {
      setFloorTabList(res.data.data);
      setCurrentFloorTab(res.data.data[0]);
    });
  };

  // 点击tab
  const clickFloorTab = (floorTabItem, index) => {
    setCurrentFloorTab(floorTabItem);
    setCurrentIndex(index);
  };

  useEffect(() => {
    // 获取楼层信息
    getFloorTabList();
    // 获取警力类型
    getPoliceTypeList().then((res) => {
      setPoliceTypeList(res.data.data);
    });
  }, []);

  return (
    <div className={styles.layoutManagement}>
      {/* <div className={styles.header}>{currentFloorTab?.floorTitle}</div> */}
      <div className={styles.content}>
        <div className={styles?.inner}>
        {currentIndex === 0 ? (
            <Leave floorId={currentFloorTab?.floorId} />
        ) : currentIndex === 1 ? (
            <Platform floorId={currentFloorTab?.floorId} />
        ) : currentIndex === 2 ? (
            <Arrive floorId={currentFloorTab?.floorId} />
        ) : (
            <div>其他</div>
        )}
        </div>
        <div className={styles.tabList}>
        {floorTabList?.map((tab, index) => {
            return (
            <span
                key={index}
                className={
                currentFloorTab?.floorId === tab?.floorId ? styles.active : styles.tabitem
                }
                onClick={() => clickFloorTab(tab, index)}
            >
                {tab?.floorName}
            </span>
            );
        })}
        </div>
      </div>
    </div>
  );
};

export default LayoutManagement;
