import { backend } from '../declarations/backend';
import * as PROPRIUM from 'hvym-proprium';


const SCENE =  new PROPRIUM.HVYM_DefaultScene();
SCENE.createCameraOrbitControls();

const ORIGIN = new PROPRIUM.InvisibleBox(SCENE.scene).box;
SCENE.setOrigin(ORIGIN);
ORIGIN.name = "ORIGIN";
const IC_CLIENT = SCENE.addICCustomClient('monkey_test1.glb', backend );


SCENE.scene.add( ORIGIN );

SCENE.animate();