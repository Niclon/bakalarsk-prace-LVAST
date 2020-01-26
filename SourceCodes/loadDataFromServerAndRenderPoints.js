loadDataFromServerAndRenderPoints() {
    let that = this;
    let request = new XMLHttpRequest();
    request.open('GET', '/rawData/' + that.state.menuId + '/' + that.state.stepNumber, true);

    request.setRequestHeader('Content-Type', 'application/json');
    request.onreadystatechange = function () {
        if (request.readyState === 4 && request.status === 200) {
            that.state.lidarPoints = JSON.parse(request.response);
            that.renderPointsFromData();
        }
     };
    request.send(null);
}