import {render, h} from 'preact';
import Main from './main';

document.addEventListener('DOMContentLoaded', () => {
    render(<Main/>, document.querySelector('#app'));
});