if (selected) {
    let positionOfRotationCenter = selected.position.clone();
    let vectorToWantedCenter = new THREE.Vector3(selected.userData.xLength / 2, selected.userData.yLength / 2, 0);
    vectorToWantedCenter.applyEuler(selected.rotation.clone());
    positionOfRotationCenter.add(vectorToWantedCenter);
    selected.userData.camera.lookAt(positionOfRotationCenter);
    selected = null;
}