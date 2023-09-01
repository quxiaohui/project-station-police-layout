declare namespace API {
    type Resource = {
        data: {
            data: ResourceTypeResult[];
            totalCount: number;
        };
    }
    type ResourceTypeResult = {
        image?: string;
        name: string;
        typeId: string;
        sortNo?: number;
    }
    type ResourceTypeParams = {
        pageIndex: number;
        pageSize: number;
    }

    type ResourceDeploymentParams = {
        pageIndex: number;
        pageSize: number;
        floorId?: string;
    }

    type ResourceDeployment = {
        data: {
            data: ResourceDeploymentResult[]
            totalCount: number;
        }
    }

    type ResourceDeploymentResult = {
        deploymentId: string;
        typeId: string;
        floorId: string;
        title: string;
        positionX: number;
        positionY: number;
        positionZ: number;
    }
}