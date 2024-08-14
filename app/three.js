// const c = document.createElement("canvas");
//     // Scene
//     const scene = new THREE.Scene();
//     const size = {
//       width: 400,
//       height: 400,
//     }
//     // Camera
//     const camera = new THREE.PerspectiveCamera(45, size.width / size.height, 1, 1000);
//     camera.position.z = 3;

//     // Rendered
//     const renderer = new THREE.WebGLRenderer({
//       canvas: canvas.current || undefined,
//     });
//     renderer.setSize(size.width, size.height)
//     renderer.setAnimationLoop(animation);
//     // Object
//     const geometry = new THREE.BoxGeometry(1, 1, 1);
//     geometry.scale(1.3, 1.3, 1.3);
//     const material = new THREE.MeshBasicMaterial({ color: "#2AD87F" });
//     const cube = new THREE.Mesh(geometry, material);
//     scene.add(cube);
//     // Controls
//     const controls = new OrbitControls(camera, canvas.current || c);
//     controls.enableDamping = true;
//     controls.autoRotate = true;

//     function animation() {
//       renderer.render(scene, camera);
//       controls.update();
//     }