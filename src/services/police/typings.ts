declare namespace API {
    type Police = {
        data: {
            data: PoliceTypeResult[];
            totalCount: number;
        };
    }
    type PoliceTypeResult = {
        image?: string;
        name: string;
        typeId: string;
        sortNo?: number;
    }
    type PoliceTypeParams = {
        pageIndex: number;
        pageSize: number;
    }

    type PoliceDeploymentParams = {
        pageIndex: number;
        pageSize: number;
        floorId?: string;
    }

    type PoliceDeployment = {
        data: {
            data: PoliceDeploymentResult[]
            totalCount: number;
        }
    }

    type PoliceDeploymentResult = {
        deploymentId: string;
        typeId: string;
        floorId: string;
        title: string;
        typeName: string;
        floorName: string;
        positionX: number;
        positionY: number;
        positionZ: number;
    }
}