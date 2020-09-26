import GLC from "../GLCommander/GLCommander";
import ModelRenderer from "../Render/ModelRenderer";
import ModelType from "../Models/ModelType";
import ModelInstance from "../Models/ModelInstance";

export default (id) => {
    const canvas = document.querySelector(`#${id}`);
    if(!canvas) return;

    const gl = canvas.getContext(`webgl`);
    if(!gl) return;

    GLC.init(gl);

    const LINES = 'LINES';
    const TRIANGLE = 'TRIANGLE';

    const objects = [
        {
            vertices: [
                0.3, 0.7, 0.3,
                -0.5, 0.3, 0.0,
                0.3, -0.5, 0.0,
                0, -0.5, 1.0
            ],
            indices: [0,1,2,3],
            primitive: LINES
        },
        {
            vertices: [
                0.3, 0.3, 0.3,
                -0.5, -0.3, 0.0,
                0.3, -0.1, 0.0
            ],
            indices: [0,1,2],
            primitive: TRIANGLE
        },
    ];

    const modelRender = new ModelRenderer();
    let instances = [];
    objects.forEach((object, index) => {
        modelRender.registerNewModel(new ModelType(object.vertices, object.indices), index);
        instances.push(new ModelInstance(0,0,0,0,0,0,1, object.primitive));
        modelRender.addInstance(instances[instances.length-1], index);
    })

    const render = () => {
        const translateX = document.querySelector(`#translateX`).value;
        const translateY = document.querySelector(`#translateY`).value;
        const rotateX = document.querySelector(`#rotateX`).value;
        const rotateY = document.querySelector(`#rotateY`).value;
        const rotateZ = document.querySelector(`#rotateZ`).value;
        const scaleX = document.querySelector(`#scaleX`).value;
        const scaleY = document.querySelector(`#scaleY`).value;
        GLC.clear(1.0,1.0,1.0,1.0);
        instances.forEach(instance => {
            instance.updateTranslation(translateX, translateY);
            instance.updateRotation(rotateX,rotateY,rotateZ);
            instance.updateScale(scaleX, scaleY);
        });
        modelRender.render();
        window.requestAnimationFrame(render)
    }
    window.requestAnimationFrame(render);
}