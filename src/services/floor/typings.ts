declare namespace API {
    type Floor = {
        data: {
            data: FloorResult[];
            totalCount: number;
        };
    }
    type FloorResult = {
        floorId?: string;
        floorName?: string;
        floorTitle?: string;
        sortNo?: number;
    }
    type FloorParams = {
        pageIndex: number;
        pageSize: number;
    }

    type SelectOptions = {
        label?: string;
        value?: string;
    }
}