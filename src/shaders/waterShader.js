export const waterVertexShader = `
  uniform float uTime;
  uniform vec2 uMouse;
  uniform float uIntensity;
  
  varying vec2 vUv;
  varying float vElevation;
  
  // Simplex noise function
  vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec3 permute(vec3 x) { return mod289(((x*34.0)+1.0)*x); }

  float snoise(vec2 v) {
    const vec4 C = vec4(0.211324865405187,  // (3.0-sqrt(3.0))/6.0
                        0.366025403784439,  // 0.5*(sqrt(3.0)-1.0)
                       -0.577350269189626,  // -1.0 + 2.0 * C.x
                        0.024390243902439); // 1.0 / 41.0
    vec2 i  = floor(v + dot(v, C.yy) );
    vec2 x0 = v -   i + dot(i, C.xx);
    vec2 i1;
    i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
    vec4 x12 = x0.xyxy + C.xxzz;
    x12.xy -= i1;
    i = mod289(i);
    vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
      + i.x + vec3(0.0, i1.x, 1.0 ));
    vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
    m = m*m ;
    m = m*m ;
    vec3 x = 2.0 * fract(p * C.www) - 1.0;
    vec3 h = abs(x) - 0.5;
    vec3 ox = floor(x + 0.5);
    vec3 a0 = x - ox;
    m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
    vec3 g;
    g.x  = a0.x  * x0.x  + h.x  * x0.y;
    g.yz = a0.yz * x12.xz + h.yz * x12.yw;
    return 130.0 * dot(m, g);
  }
  
  void main() {
    vUv = uv;
    
    vec3 pos = position;
    
    // Distance from mouse
    float distanceFromMouse = distance(uv, uMouse);
    
    // Create ripple effect from mouse
    float mouseRipple = sin(distanceFromMouse * 15.0 - uTime * 3.0) * 0.03;
    mouseRipple *= smoothstep(0.5, 0.0, distanceFromMouse);
    
    // Flowing water waves
    float wave1 = sin(pos.x * 2.0 + uTime * 0.5) * 0.02;
    float wave2 = sin(pos.y * 1.5 - uTime * 0.3) * 0.015;
    
    // Noise for organic movement
    float noise1 = snoise(vec2(pos.x * 3.0 + uTime * 0.2, pos.y * 3.0)) * 0.01;
    float noise2 = snoise(vec2(pos.x * 1.5 - uTime * 0.15, pos.y * 2.0 + uTime * 0.1)) * 0.015;
    
    // Mouse influence - pull vertices towards mouse
    vec2 toMouse = uMouse - uv;
    float mousePull = length(toMouse);
    mousePull = smoothstep(0.3, 0.0, mousePull) * 0.05;
    pos.xy += toMouse * mousePull;
    
    // Combine all effects
    float elevation = wave1 + wave2 + noise1 + noise2 + mouseRipple;
    pos.z += elevation * uIntensity;
    
    vElevation = elevation;
    
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`

export const waterFragmentShader = `
  uniform float uTime;
  uniform vec3 uColorDeep;
  uniform vec3 uColorShallow;
  uniform vec2 uMouse;
  
  varying vec2 vUv;
  varying float vElevation;
  
  void main() {
    // Distance from mouse for glow effect
    float distanceFromMouse = distance(vUv, uMouse);
    float mouseGlow = smoothstep(0.3, 0.0, distanceFromMouse) * 0.4;
    
    // Color based on elevation (shallow = lighter, deep = darker)
    vec3 waterColor = mix(uColorDeep, uColorShallow, vElevation * 3.0 + 0.5);
    
    // Add shimmer effect
    float shimmer = sin(vUv.x * 20.0 + uTime * 2.0) * 0.05;
    shimmer += sin(vUv.y * 15.0 - uTime * 1.5) * 0.03;
    
    waterColor += shimmer;
    waterColor += mouseGlow;
    
    // Subtle transparency gradient
    float alpha = 0.85 - distanceFromMouse * 0.2;
    
    gl_FragColor = vec4(waterColor, alpha);
  }
`

