import './style.css'

import * as THREE from "three"

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector("#bg"),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);

camera.position.setZ(30);

renderer.render(scene, camera);

const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
const material = new THREE.MeshBasicMaterial({color: "blue", wireframe: true});
const torus = new THREE.Mesh(geometry, material);

const sphereGeometry = new THREE.SphereGeometry(12, 32, 32);
const sphereMaterial = new THREE.MeshBasicMaterial({color: "yellow", wireframe: true});

const helene = new THREE.Mesh(sphereGeometry, sphereMaterial)

const light = new THREE.AmbientLight(0xffffff);


// scene.add(torus);
// scene.add(light);
scene.add(helene);

renderer.render(scene, camera);

function animate() {
    requestAnimationFrame(animate)

    torus.rotation.x += 0.01;
    torus.rotation.y += 0.03;
    torus.rotation.z += 0.04;

    helene.rotation.y += 0.01;

    // helene.position.y += 0.01;
    // helene.position.z = Math.sin(torus.rotation.x) * 20
    helene.position.y = Math.sin(torus.rotation.x) * 20
    helene.position.x = Math.sin(torus.rotation.x) * 20

    renderer.render(scene, camera)
}

animate()