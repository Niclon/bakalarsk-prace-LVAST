import {Component, h} from 'preact'
var THREE = require('three');

class lidarPoints extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lidarPoints: null,
            stepNumber: props.stepNumber,
        };
    }
    
    removeSpheres() {
        .
        .
    }
   
    loadDataFromServerAndRenderPoints() {
        .
        .
    }
    
    renderPointsFromData() {
        .
        .
    }

    render() {
        this.removeSpheres();
        this.loadDataFromServerAndRenderPoints();
        return (null);
    }
}

export default (lidarPoints)