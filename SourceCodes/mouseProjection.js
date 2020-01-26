let x = (screenX / window.innerWidth) * 2 - 1;
let y = -(screenY / window.innerHeight) * 2 + 1;

let mouse3D = new THREE.Vector3(x, y, 0);
mouse3D.unproject(mainCamera);