import {createTransformationMatrix} from "../../Utils/maths";

export default class ModelInstance {
    constructor(x,y,z,rx,ry,rz,scale, primitive) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.rx = rx;
        this.ry = ry;
        this.rz = rz;
        this.scale = scale;
        this.primitive = primitive;
    }

    updateTranslation = (x, y) => {
        this.x = x;
        this.y = y;
        this.updateTransformationMatrix();
    }

    updateRotation = (rx, ry, rz) => {
        this.rx = rx;
        this.ry = ry;
        this.rz = rz;
        this.updateTransformationMatrix();
    }

    updateScale = (scaleX, scaleY) => {
        this.scaleX = scaleX;
        this.scaleY = scaleY;
        this.updateTransformationMatrix();
    }

    updateTransformationMatrix = () => {
        this.transformationMatrix = createTransformationMatrix(this.x, this.y, this.z, this.rx, this.ry, this.rz, this.scaleX, this.scaleY);
    }

    getTransformationMatrix = () => this.transformationMatrix;
}