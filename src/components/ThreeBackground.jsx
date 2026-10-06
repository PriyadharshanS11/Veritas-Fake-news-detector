import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ThreeBackground() {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      55,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 28);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // 1. Cyber Constellation Starfield Particles (Background Layer)
    const particleCount = 180;
    const pGeo = new THREE.BufferGeometry();
    const pPos = new Float32Array(particleCount * 3);
    const pCol = new Float32Array(particleCount * 3);

    const colorCyan = new THREE.Color(0x06b6d4);
    const colorGold = new THREE.Color(0xdfc8a5);
    const colorEmerald = new THREE.Color(0x10b981);

    for (let i = 0; i < particleCount; i++) {
      pPos[i * 3] = (Math.random() - 0.5) * 75;
      pPos[i * 3 + 1] = (Math.random() - 0.5) * 55;
      pPos[i * 3 + 2] = (Math.random() - 0.5) * 35 - 8;

      const r = Math.random();
      const c = r < 0.4 ? colorGold : r < 0.7 ? colorCyan : colorEmerald;
      pCol[i * 3] = c.r;
      pCol[i * 3 + 1] = c.g;
      pCol[i * 3 + 2] = c.b;
    }

    pGeo.setAttribute('position', new THREE.BufferAttribute(pPos, 3));
    pGeo.setAttribute('color', new THREE.BufferAttribute(pCol, 3));

    const pMat = new THREE.PointsMaterial({
      size: 0.6,
      vertexColors: true,
      transparent: true,
      opacity: 0.55
    });

    const particleCloud = new THREE.Points(pGeo, pMat);
    scene.add(particleCloud);

    // Helper to generate crisp 2D Canvas Newspaper Textures
    const createNewspaperTexture = (title, volume, headline, lines, accentColor = '#dfc8a5') => {
      const canvas = document.createElement('canvas');
      canvas.width = 1024;
      canvas.height = 1400;
      const ctx = canvas.getContext('2d');

      // Deep Parchment Press Texture
      ctx.fillStyle = '#14110d';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Gold & Accent Double Border
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 12;
      ctx.strokeRect(30, 30, canvas.width - 60, canvas.height - 60);

      ctx.strokeStyle = accentColor;
      ctx.lineWidth = 4;
      ctx.strokeRect(46, 46, canvas.width - 92, canvas.height - 92);

      // Header Banner
      ctx.font = '900 72px "Cinzel", "Playfair Display", Georgia, serif';
      ctx.fillStyle = '#ffffff';
      ctx.textAlign = 'center';
      ctx.fillText(title, canvas.width / 2, 135);

      ctx.font = '700 22px "Merriweather", Georgia, serif';
      ctx.fillStyle = '#f0e6d2';
      ctx.fillText(volume, canvas.width / 2, 178);

      // Line Separator
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.moveTo(60, 205);
      ctx.lineTo(canvas.width - 60, 205);
      ctx.stroke();

      // Main Headline
      ctx.font = '900 52px "Playfair Display", Georgia, serif';
      ctx.fillStyle = '#ffffff';
      ctx.textAlign = 'left';
      ctx.fillText(headline[0], 65, 275);
      if (headline[1]) {
        ctx.fillText(headline[1], 65, 335);
      }

      // Editorial Article Column Box
      ctx.fillStyle = '#221d17';
      ctx.fillRect(65, 375, 410, 280);

      // Editorial Content Text
      ctx.fillStyle = '#f0e6d2';
      ctx.font = '600 18px Georgia, serif';
      lines.forEach((line, idx) => {
        ctx.fillText(line, 510, 405 + idx * 34);
      });

      // Subtle Vintage Grid Lines
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)';
      ctx.lineWidth = 1;
      for (let y = 700; y < canvas.height - 80; y += 30) {
        ctx.beginPath();
        ctx.moveTo(65, y);
        ctx.lineTo(canvas.width - 65, y);
        ctx.stroke();
      }

      const texture = new THREE.CanvasTexture(canvas);
      texture.anisotropy = renderer.capabilities.getMaxAnisotropy();
      return texture;
    };

    // 3 Distinct 3D Newspaper Textures
    const tex1 = createNewspaperTexture(
      'THE VERITAS GAZETTE',
      'DAILY TRUTH INTELLIGENCE — VOL. 2026 // NO. 104',
      ['AI DETECTS GLOBAL FAKE NEWS', 'REAL-TIME TRUTH VERIFICATION'],
      [
        'LONDON — Multi-layered AI neural models scan',
        'millions of live headlines across Indian Express, BBC,',
        'The Hindu, and regional Tamil Nadu press feeds.',
        'Linguistic bias analysis isolates sensationalism',
        'and verifies source authenticity in milliseconds.',
        'Restoring integrity in public news broadcasting.'
      ],
      '#dfc8a5'
    );

    const tex2 = createNewspaperTexture(
      'THE DAILY TRUTH HERALD',
      'SPECIAL EDITION — VERIFIED NEWS WIRE',
      ['NLP CLASSIFIERS FLAG VIRAL HOAXES', 'AUTOMATED DEBUNK SYSTEM'],
      [
        'NEW DELHI — Deep learning algorithms decompose',
        'news text into N-gram term frequencies, detecting',
        'clickbait patterns and fabricated claims.',
        'Empowering editors worldwide with instant fact-check',
        'confidence scoring and editorial diagnostics.'
      ],
      '#06b6d4'
    );

    const tex3 = createNewspaperTexture(
      'PRESS INTEGRITY CHRONICLE',
      'INTERNATIONAL JOURNAL OF FACT VERIFICATION',
      ['UNESCO ANTHEM HOAX DEBUNKER', 'AI ISOLATES DISINFORMATION'],
      [
        'WASHINGTON — Viral claims regarding national anthem',
        'awards and fake viral statistics are instantly identified',
        'using machine learning linguistic features.',
        'The Veritas platform provides confidence scoring',
        'and source cross-validation for instant clarity.'
      ],
      '#10b981'
    );

    // Perfectly Separated Sized Geometries
    const newsGeoMain = new THREE.PlaneGeometry(12, 16, 16, 16);
    const newsGeoSub = new THREE.PlaneGeometry(11, 15, 16, 16);

    const mat1 = new THREE.MeshBasicMaterial({ map: tex1, side: THREE.DoubleSide, transparent: true, opacity: 0.88 });
    const mat2 = new THREE.MeshBasicMaterial({ map: tex2, side: THREE.DoubleSide, transparent: true, opacity: 0.72 });
    const mat3 = new THREE.MeshBasicMaterial({ map: tex3, side: THREE.DoubleSide, transparent: true, opacity: 0.76 });

    // Explicit Non-Overlapping Spatial Positions with Wide Gaps
    const paper1 = new THREE.Mesh(newsGeoMain, mat1);
    paper1.position.set(8.0, -1.0, -12); // Right Side Gazette
    paper1.rotation.z = -0.05;

    const paper2 = new THREE.Mesh(newsGeoSub, mat2);
    paper2.position.set(-9.5, 5.5, -15); // Top-Left Herald (4+ units gap above paper 3)
    paper2.rotation.z = 0.08;

    const paper3 = new THREE.Mesh(newsGeoSub, mat3);
    paper3.position.set(-8.5, -5.5, -13); // Bottom-Left Chronicle
    paper3.rotation.z = -0.08;

    const papersGroup = new THREE.Group();
    papersGroup.add(paper1);
    papersGroup.add(paper2);
    papersGroup.add(paper3);
    scene.add(papersGroup);

    // Mouse Cursor Tracking Physics with Damped Spring Interpolation
    const mouse = new THREE.Vector2(0, 0);
    const targetRot = { x: 0, y: 0 };
    const currentRot = { x: 0, y: 0 };

    const handleMouseMove = (e) => {
      mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;

      targetRot.x = mouse.y * 0.30;
      targetRot.y = mouse.x * 0.38;
    };

    window.addEventListener('mousemove', handleMouseMove);

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    let animationFrameId;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      // Heavy Damped Interpolation (0.04 factor for silky smooth motion with zero jitter)
      currentRot.x += (targetRot.x - currentRot.x) * 0.04;
      currentRot.y += (targetRot.y - currentRot.y) * 0.04;

      papersGroup.rotation.x = -currentRot.x * 0.40;
      papersGroup.rotation.y = currentRot.y * 0.40;

      // Independent Parallax Motion Shifts while Preserving Separation Gaps
      paper1.position.x = 8.0 + mouse.x * 0.8;
      paper1.position.y = -1.0 + mouse.y * 0.6;

      paper2.position.x = -9.5 + mouse.x * 0.5;
      paper2.position.y = 5.5 + mouse.y * 0.4;

      paper3.position.x = -8.5 + mouse.x * 0.6;
      paper3.position.y = -5.5 + mouse.y * 0.5;

      particleCloud.rotation.y += 0.0004;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      newsGeoMain.dispose();
      newsGeoSub.dispose();
      mat1.dispose();
      mat2.dispose();
      mat3.dispose();
      tex1.dispose();
      tex2.dispose();
      tex3.dispose();
      pGeo.dispose();
      pMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: -1 // Behind all UI elements
      }}
    />
  );
}
