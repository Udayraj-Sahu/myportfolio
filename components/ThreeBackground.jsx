"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";

export function ThreeBackground() {
	const containerRef = useRef(null);

	useEffect(() => {
		if (!containerRef.current) return;

		// Scene setup
		const scene = new THREE.Scene();
		const camera = new THREE.PerspectiveCamera(
			75,
			window.innerWidth / window.innerHeight,
			0.1,
			1000
		);
		camera.position.z = 50;

		const renderer = new THREE.WebGLRenderer({
			alpha: true,
			antialias: true,
		});
		renderer.setSize(window.innerWidth, window.innerHeight);
		renderer.setPixelRatio(window.devicePixelRatio);
		containerRef.current.appendChild(renderer.domElement);

		// Particle system
		const particlesGeometry = new THREE.BufferGeometry();
		const particlesCount = 1500;
		const posArray = new Float32Array(particlesCount * 3);

		for (let i = 0; i < particlesCount * 3; i++) {
			posArray[i] = (Math.random() - 0.5) * 100;
		}

		particlesGeometry.setAttribute(
			"position",
			new THREE.BufferAttribute(posArray, 3)
		);

		// Particle material with neon green glow
		const particlesMaterial = new THREE.PointsMaterial({
			size: 0.15,
			color: 0x00ff88,
			transparent: true,
			opacity: 0.8,
			blending: THREE.AdditiveBlending,
		});

		const particlesMesh = new THREE.Points(
			particlesGeometry,
			particlesMaterial
		);
		scene.add(particlesMesh);

		// Add glowing nodes
		const nodesGeometry = new THREE.SphereGeometry(0.5, 16, 16);
		const nodesMaterial = new THREE.MeshBasicMaterial({
			color: 0x00bfff,
			transparent: true,
			opacity: 0.6,
		});

		const nodes = [];
		for (let i = 0; i < 20; i++) {
			const node = new THREE.Mesh(nodesGeometry, nodesMaterial.clone());
			node.position.set(
				(Math.random() - 0.5) * 80,
				(Math.random() - 0.5) * 80,
				(Math.random() - 0.5) * 80
			);
			nodes.push(node);
			scene.add(node);
		}

		// Add connecting lines
		const linesMaterial = new THREE.LineBasicMaterial({
			color: 0x00ff88,
			transparent: true,
			opacity: 0.2,
		});

		const lines = [];
		for (let i = 0; i < nodes.length - 1; i++) {
			const points = [];
			points.push(nodes[i].position);
			points.push(nodes[i + 1].position);
			const geometry = new THREE.BufferGeometry().setFromPoints(points);
			const line = new THREE.Line(geometry, linesMaterial);
			lines.push(line);
			scene.add(line);
		}

		// Mouse interaction
		let mouseX = 0;
		let mouseY = 0;

		const handleMouseMove = (event) => {
			mouseX = (event.clientX / window.innerWidth) * 2 - 1;
			mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
		};

		window.addEventListener("mousemove", handleMouseMove);

		// Animation loop
		const animate = () => {
			requestAnimationFrame(animate);

			// Rotate particles
			particlesMesh.rotation.y += 0.0005;
			particlesMesh.rotation.x += 0.0002;

			// Animate nodes
			nodes.forEach((node, i) => {
				node.rotation.x += 0.01;
				node.rotation.y += 0.01;
				node.position.y += Math.sin(Date.now() * 0.001 + i) * 0.01;
			});

			// Mouse interaction
			camera.position.x += (mouseX * 5 - camera.position.x) * 0.05;
			camera.position.y += (mouseY * 5 - camera.position.y) * 0.05;
			camera.lookAt(scene.position);

			renderer.render(scene, camera);
		};

		animate();

		// Handle resize
		const handleResize = () => {
			camera.aspect = window.innerWidth / window.innerHeight;
			camera.updateProjectionMatrix();
			renderer.setSize(window.innerWidth, window.innerHeight);
		};

		window.addEventListener("resize", handleResize);

		// Cleanup
		return () => {
			window.removeEventListener("mousemove", handleMouseMove);
			window.removeEventListener("resize", handleResize);
			if (containerRef.current) {
				containerRef.current.removeChild(renderer.domElement);
			}
			renderer.dispose();
		};
	}, []);

	return (
		<div
			ref={containerRef}
			className="fixed top-0 left-0 w-full h-full -z-10"
			style={{ pointerEvents: "none" }}
		/>
	);
}
