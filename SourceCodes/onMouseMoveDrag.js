var rect = domElement.getBoundingClientRect();

mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

raycaster.setFromCamera(mouse, camera);

if (selected && scope.enabled) {
    if (raycaster.ray.intersectSphere(sphere, intersection)) {
        selected.position.copy(intersection.sub(offset)).setLength(radius);
        worldRotation = camera.getWorldRotation();
        selected.rotation.set(worldRotation._x, worldRotation._y, worldRotation._z);
    }
    return;
}