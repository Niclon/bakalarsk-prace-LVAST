renderPointsFromData() {
    let spheres = this.groups.groupOfPoints;
    let geometry = new THREE.SphereGeometry(0.005, 5, 5);
    let material = new THREE.MeshLambertMaterial({color: 0x39ff14});

    let thatPoints = this.state.lidarPoints;

    for (let index in thatPoints) {
        let value = thatPoints[index];
        let sphere = new THREE.Mesh(geometry, material);
        sphere.dynamic = true;
        sphere.verticesNeedUpdate = true;
        sphere.position.set(value[0], value[2], -value[1]);
        spheres.add(sphere);
    }
} 