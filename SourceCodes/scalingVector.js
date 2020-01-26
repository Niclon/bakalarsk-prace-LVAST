let length = Math.sqrt(mouse3D.x ** 2 + (mouse3D.y - cameraYOffset) ** 2 + mouse3D.z ** 2);
let scalingFactor = 3 / Math.abs(length);
return new THREE.Vector3((scalingFactor * mouse3D.x), ((scalingFactor * (mouse3D.y - cameraYOffset)) + cameraYOffset), (scalingFactor * mouse3D.z));