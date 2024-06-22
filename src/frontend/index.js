import { backend } from '../declarations/backend';
import * as PROPRIUM from '@heavymeta/proprium';


const SCENE =  new PROPRIUM.HVYM_DefaultScene();
SCENE.createCameraOrbitControls();

const ORIGIN = new PROPRIUM.InvisibleBox(SCENE.scene).box;
SCENE.setOrigin(ORIGIN);
ORIGIN.name = "ORIGIN";
// const IC_MINTER = SCENE.addICModelMinterClient( './test.glb', AuthClient, HttpAgent, createActor, ID_PROVIDER, MINTER_BACKEND, true);


SCENE.scene.add( ORIGIN );

SCENE.animate();