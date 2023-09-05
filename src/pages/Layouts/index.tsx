import React, { useEffect, useState } from "react";
import styles from './index.less';
import { getFloorList } from "@/services/floor/floor";
import Arrive from "./components/Arrive";
import Platform from "./components/Platform";
import Leave from "./components/Leave";

const LayoutManagement: React.FC = () => {
    const [floorTabList, setFloorTabList] = useState<API.FloorResult[]>([]);
    const [currentFloorTab, setCurrentFloorTab] = useState<API.FloorResult>();

    const getFloorTabList = () => {
        getFloorList({pageIndex: 0})
            .then(res => {
                setFloorTabList(res.data.data);
                setCurrentFloorTab(res.data.data[0]);
            })
    }

    // 点击tab
    const clickFloorTab = (floorTabItem: API.FloorResult) => {
        setCurrentFloorTab(floorTabItem);
    }
    
    useEffect(()=>{
        // 获取楼层信息
        getFloorTabList();
    }, []);

    return (
        <div className={styles.layoutManagement}>
            <div className={styles.tabList}>
                {
                    floorTabList?.map((tab, index) => {
                        return <span key={index} className={currentFloorTab?.floorId===tab?.floorId ? styles.active : styles.tabitem} onClick={() => clickFloorTab(tab)}>{tab?.floorName}</span>
                    })
                }
                <div className={styles.content}>
                    {
                        currentFloorTab?.floorId === '71895aa6-d77f-43e9-8fdf-ab2e543a7286' ? 
                            <Leave/>
                            : currentFloorTab?.floorId === '06d964d1-dea7-4d1d-bac1-f18199bf7b82' ? 
                            <Platform/>
                            : currentFloorTab?.floorId === '5b5d9b0d-82f4-40fc-97bf-3d9a5ef2df75' ? 
                            <Arrive/>
                            :
                            <div>其他</div>

                    }
                </div>
                
            </div>
        </div>
    );
  };

  export default LayoutManagement;