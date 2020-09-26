import {mat4, vec3} from 'gl-matrix';

const toRadians = (deg) => deg * (Math.PI/180);

export const createTransformationMatrix = (x, y, z, rx, ry, rz, scaleX, scaleY) => {
    const matrix = [];
    mat4.identity(matrix);
    mat4.translate(matrix, matrix, vec3.fromValues(x,y,z));
    mat4.rotateX(matrix, matrix, toRadians(rx));
    mat4.rotateY(matrix, matrix, toRadians(ry));
    mat4.rotateZ(matrix, matrix, toRadians(rz));
    mat4.scale(matrix, matrix, vec3.fromValues(scaleX, scaleY, 1));
    return matrix;
}