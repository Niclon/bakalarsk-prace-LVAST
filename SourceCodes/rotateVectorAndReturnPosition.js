vec8 = that.rotateVectorAndReturnPosition(
        new THREE.Vector3(line.userData.xLength/2, -line.userData.yLength/2, 0), line);

rotateVectorAndReturnPosition(vector, line) {
    let positionOfRotationCenter = line.position.clone();
    vector.applyEuler(line.rotation.clone());
    return positionOfRotationCenter.add(vector);
}