import {vec3} from 'gl-matrix';

const numPoints = 5000;
const vertices = [
  vec3(-1.0, -1.0, 0.0),
  vec3(0.0, 1.0, 0.0),
  vec3(1.0, -1.0, 0.0),
];
const u = mix(vertices[0], vertices[1], 0.5);
const v = mix(vertices[0], vertices[2], 0.5);
let p = mix(u, v, 0.5);

const points = [p];

for(let i = 1; i < numPoints; i++) {
  const j = Math.floor(Math.random() * 3);
  p = mix(vertices[j], points[i - 1], 0.5);
  points.push(p);
}

function mix(t1, t2, s) {
  return s * vec3(t1) + (1 - s) * vec3(t2);
}
