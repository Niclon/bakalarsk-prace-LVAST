import {Component, h} from 'preact';
import {Entity, Scene} from 'aframe-react';

class basicScene extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <Scene vr-mode-ui="enabled: false">
                <Entity
                    primitive="a-sphere"
                    src="/static/dist/img/360IMGStreet.jpg"
                    material={{side: 'back', shader: 'flat'}}
                    geometry={{radius: 5000, segmentsWidth: 64, segmentsHeight: 32}}
                />
                <Entity primitive="a-camera"
                        camera="active: true"
                        look-controls
                        position={{x: 0, y: 0.4, z: 0}}
                        wasd-controls-enabled="false"
                >
                    <Entity
                        primitive="a-cursor"
                        cursor={{fuse: false}}
                        material={{color: 'white', shader: 'flat', opacity: 2.75}}
                        geometry={{radiusInner: 0.005, radiusOuter: 0.007}}
                    />  
                </Entity>
                <Entity id="lidarPoints"/>
            </Scene>
        )
    }
}

export default basicScene