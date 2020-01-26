function create3DLine(xLength, yLength) {
    var rectShape = new THREE.Shape();
    rectShape.moveTo(-xLength / 2, yLength / 2);
    rectShape.lineTo(xLength / 2, yLength / 2);
    rectShape.lineTo(xLength / 2, -yLength / 2);
    rectShape.lineTo(-xLength / 2, -yLength / 2);
    rectShape.lineTo(-xLength / 2, yLength / 2);
    rectShape.moveTo(0, 0);

    let geometry = new THREE.ShapeBufferGeometry(rectShape);
    return new THREE.Line(geometry, material);
}