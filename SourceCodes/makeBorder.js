function makeBorder() {
    scene = document.querySelector('a-scene');
    mainCamera = scene.camera;
    let worldRotation = mainCamera.getWorldRotation();
    firstPoint = create3DPoint(startPointX, startPointY);
    secondPoint = createSecondPointFromPlane(endPointX, endPointY, firstPoint);
    yLength = -(firstPoint.distanceTo(new THREE.Vector3(firstPoint.x, secondPoint.y, firstPoint.z)));
    xLength = firstPoint.distanceTo(new THREE.Vector3(secondPoint.x, firstPoint.y, secondPoint.z));
    let line = create3DLine(xLength, yLength);
    line.rotation.set(worldRotation._x, worldRotation._y, worldRotation._z);
    line.position.set(firstPoint.x, firstPoint.y, firstPoint.z);
    line.userData = {camera: camera, xLength: xLength, yLength: yLength, name: '_Selection_' + selectionCounter};
    groupOfLines.add(line);
}