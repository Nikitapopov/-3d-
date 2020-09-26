import GLC from '../../GLCommander/GLCommander'
import VertexSource from './vertex'
import FragmentSource from './fragment'
import Locations from './locations'

export default class ModelShader {
    constructor(){
        const vertexShader = GLC.createVertexShader();
        GLC.addShaderSource(vertexShader, VertexSource);
        GLC.compileShader(vertexShader);

        const fragmentShader = GLC.createFragmentShader();
        GLC.addShaderSource(fragmentShader, FragmentSource);
        GLC.compileShader(fragmentShader);

        const program = GLC.createShaderProgram();
        GLC.attachShaderToProgram(program, vertexShader);
        GLC.attachShaderToProgram(program, fragmentShader);
        GLC.linkProgram(program);

        this.positionAttribure = GLC.getAttribLocation(program, Locations.POSITION);
        this.transformationMatrix = GLC.getUniformLocation(program, 'transformationMatrix');
        this.program = program;
    }

    use = () => {
        GLC.useProgram(this.program);
    }

    enablePosition = () => {
        GLC.enableVertexAttribArray(this.positionAttribure);
        GLC.pointToAttribute(this.positionAttribure, 3);
    }

    enableTransformationMatrix = (matrix) => {
        GLC.uploadMatrix4fv(this.transformationMatrix, matrix);
    }
}