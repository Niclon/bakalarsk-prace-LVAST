removeSpheres() {
    let scenel = document.querySelector('a-scene').object3D;
    let selectedObject = scenel.getObjectByName("groupOfPoints");
    if (selectedObject) {
        selectedObject.children = [];
    }
}