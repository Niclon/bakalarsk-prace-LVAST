function createSecondPointFromPlane(screenX, screenY, firstpoint) {
    let raycaster = new THREE.Raycaster();
    let plane = new THREE.Plane();
    mouse.x = (screenX / window.innerWidth) * 2 - 1;
    mouse.y = -(screenY / window.innerHeight) * 2 + 1;
    var result = new THREE.Vector3();

    raycaster.setFromCamera(mouse, mainCamera);
    plane.setFromNormalAndCoplanarPoint(mainCamera.getWorldDirection(plane.normal), firstpoint);
    raycaster.ray.intersectPlane(plane, result);
    return result;
}