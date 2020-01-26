raycaster.setFromCamera(mouse, camera);
var intersects = raycaster.intersectObjects(objects);

if (intersects.length > 0) {
    selected = intersects[0].object;
    if (raycaster.ray.intersectSphere(sphere, intersection)) {
        offset.copy(intersection).sub(selected.position);
    }
}