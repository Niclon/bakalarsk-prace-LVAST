let camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 100);
camera.position.set(0, 0, 0);
camera.lookAt(new THREE.Vector3((firstPoint.x + secondPoint.x), (firstPoint.y + secondPoint.y) , (firstPoint.z + secondPoint.z)));
groupOfCameras.add(camera);