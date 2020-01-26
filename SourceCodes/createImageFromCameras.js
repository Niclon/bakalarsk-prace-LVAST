createImageFromCameras(scene, renderer, groupOfCameras) {
    let dataToSend = [];
    for (let i = 0; i < groupOfCameras.children.length; i++) {
        renderer.render(scene.object3D, groupOfCameras.children[i]);
        let dataURL = renderer.domElement.toDataURL();
        dataToSend.push({
            key: 'camera' + i,
            value: dataURL
        });
    }
    this.sendImagesToServer(JSON.stringify(dataToSend));
}