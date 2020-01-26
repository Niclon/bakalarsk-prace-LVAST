let frustum = new CustomFrustum(plane1, plane2, plane3, plane4);

let lineForRecreation = {
    position: line.position,
    rotationEuler: line.rotation,
    xLength: line.userData.xLength,
    yLength: line.userData.yLength
};
let eachResult = {};
eachResult.line = lineForRecreation;
spheres.children.forEach(function (sphere) {
    if (frustum.containsPoint(sphere.position)) {
        eachResult[index] = sphere.position;
        index++;
    }
});