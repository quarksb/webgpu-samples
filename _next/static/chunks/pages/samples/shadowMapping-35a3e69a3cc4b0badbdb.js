_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[22],{DELu:function(e,n,t){"use strict";t.r(n);var r=t("o0o1"),a=t.n(r),o=t("HaE+"),i=t("IOcx"),s=t("SoUo"),c=t("QqoD"),u=1024;function f(){return(f=Object(o.a)(a.a.mark((function e(n){var t,r,o,s,f,l,p,m,h,g,v,b,x,w,y,P,S,M,E,j,B,O,T,V,U,G,F,R,_,A,D,C,L,N,k,I,z,q,Y,X,W,H,Q,K;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Q=function(){var e=i.b.fromValues(0,50,-100),n=Math.PI*(Date.now()/2e3);i.b.rotateY(e,e,A,n);var t=i.a.create();return i.a.lookAt(t,e,A,_),i.a.multiply(z,D,t),z},e.next=3,navigator.gpu.requestAdapter();case 3:return t=e.sent,e.next=6,t.requestDevice();case 6:for(r=e.sent,o=Math.abs(n.width/n.height),s=n.getContext("gpupresent"),f="bgra8unorm",l=s.configureSwapChain({device:r,format:f}),p=r.createBuffer({size:3*c.a.positions.length*2*Float32Array.BYTES_PER_ELEMENT,usage:GPUBufferUsage.VERTEX,mappedAtCreation:!0}),m=new Float32Array(p.getMappedRange()),h=0;h<c.a.positions.length;++h)m.set(c.a.positions[h],6*h),m.set(c.a.normals[h],6*h+3);for(p.unmap(),g=3*c.a.triangles.length,v=r.createBuffer({size:g*Uint16Array.BYTES_PER_ELEMENT,usage:GPUBufferUsage.INDEX,mappedAtCreation:!0}),b=new Uint16Array(v.getMappedRange()),x=0;x<c.a.triangles.length;++x)b.set(c.a.triangles[x],3*x);return v.unmap(),w=r.createTexture({size:[u,u,1],usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.SAMPLED,format:"depth32float"}),y=w.createView(),P=[{arrayStride:6*Float32Array.BYTES_PER_ELEMENT,attributes:[{shaderLocation:0,offset:0,format:"float32x3"},{shaderLocation:1,offset:3*Float32Array.BYTES_PER_ELEMENT,format:"float32x3"}]}],S={topology:"triangle-list",cullMode:"back"},M=r.createRenderPipeline({vertex:{module:r.createShaderModule({code:d.vertexShadow}),entryPoint:"main",buffers:P},fragment:{module:r.createShaderModule({code:d.fragmentShadow}),entryPoint:"main",targets:[]},depthStencil:{depthWriteEnabled:!0,depthCompare:"less",format:"depth32float"},primitive:S}),E=r.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,texture:{sampleType:"depth"}},{binding:2,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,sampler:{type:"comparison"}}]}),j=r.createRenderPipeline({layout:r.createPipelineLayout({bindGroupLayouts:[E,M.getBindGroupLayout(1)]}),vertex:{module:r.createShaderModule({code:d.vertex}),entryPoint:"main",buffers:P},fragment:{module:r.createShaderModule({code:d.fragment}),entryPoint:"main",targets:[{format:f}]},depthStencil:{depthWriteEnabled:!0,depthCompare:"less",format:"depth24plus-stencil8"},primitive:S}),B=r.createTexture({size:{width:n.width,height:n.height},format:"depth24plus-stencil8",usage:GPUTextureUsage.RENDER_ATTACHMENT}),O={colorAttachments:[{view:void 0,loadValue:{r:.5,g:.5,b:.5,a:1},storeOp:"store"}],depthStencilAttachment:{view:B.createView(),depthLoadValue:1,depthStoreOp:"store",stencilLoadValue:0,stencilStoreOp:"store"}},T=r.createBuffer({size:64,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),V=r.createBuffer({size:140,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),U=r.createBindGroup({layout:M.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:V}}]}),G=r.createBindGroup({layout:E,entries:[{binding:0,resource:{buffer:V}},{binding:1,resource:y},{binding:2,resource:r.createSampler({compare:"less"})}]}),F=r.createBindGroup({layout:M.getBindGroupLayout(1),entries:[{binding:0,resource:{buffer:T}}]}),R=i.b.fromValues(0,50,-100),_=i.b.fromValues(0,1,0),A=i.b.fromValues(0,0,0),D=i.a.create(),i.a.perspective(D,2*Math.PI/5,o,1,2e3),C=i.a.create(),i.a.lookAt(C,R,A,_),L=i.b.fromValues(50,100,-100),N=i.a.create(),i.a.lookAt(N,L,A,_),k=i.a.create(),-80,80,-80,80,-200,300,i.a.ortho(k,-80,80,-80,80,-200,300),I=i.a.create(),i.a.multiply(I,k,N),z=i.a.create(),i.a.multiply(z,D,C),q=i.a.create(),i.a.translate(q,q,i.b.fromValues(0,-5,0)),i.a.translate(q,q,i.b.fromValues(0,-40,0)),Y=I,r.queue.writeBuffer(V,0,Y.buffer,Y.byteOffset,Y.byteLength),X=z,r.queue.writeBuffer(V,64,X.buffer,X.byteOffset,X.byteLength),W=L,r.queue.writeBuffer(V,128,W.buffer,W.byteOffset,W.byteLength),H=q,r.queue.writeBuffer(T,0,H.buffer,H.byteOffset,H.byteLength),K={colorAttachments:[],depthStencilAttachment:{view:y,depthLoadValue:1,depthStoreOp:"store",stencilLoadValue:0,stencilStoreOp:"store"}},e.abrupt("return",(function(){var e=Q();r.queue.writeBuffer(V,64,e.buffer,e.byteOffset,e.byteLength),O.colorAttachments[0].view=l.getCurrentTexture().createView();var n=r.createCommandEncoder(),t=n.beginRenderPass(K);t.setPipeline(M),t.setBindGroup(0,U),t.setBindGroup(1,F),t.setVertexBuffer(0,p),t.setIndexBuffer(v,"uint16"),t.drawIndexed(g),t.endPass();var a=n.beginRenderPass(O);a.setPipeline(j),a.setBindGroup(0,G),a.setBindGroup(1,F),a.setVertexBuffer(0,p),a.setIndexBuffer(v,"uint16"),a.drawIndexed(g),a.endPass(),r.queue.submit([n.finish()])}));case 69:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var d={vertexShadow:"\n[[block]] struct Scene {\n  lightViewProjMatrix : mat4x4<f32>;\n  cameraViewProjMatrix : mat4x4<f32>;\n  lightPos : vec3<f32>;\n};\n\n[[block]] struct Model {\n  modelMatrix : mat4x4<f32>;\n};\n\n[[group(0), binding(0)]] var<uniform> scene : Scene;\n[[group(1), binding(0)]] var<uniform> model : Model;\n\n[[stage(vertex)]]\nfn main([[location(0)]] position : vec3<f32>)\n     -> [[builtin(position)]] vec4<f32> {\n  return scene.lightViewProjMatrix * model.modelMatrix * vec4<f32>(position, 1.0);\n}\n",fragmentShadow:"\n[[stage(fragment)]]\nfn main() {\n}\n",vertex:"\n[[block]] struct Scene {\n  lightViewProjMatrix : mat4x4<f32>;\n  cameraViewProjMatrix : mat4x4<f32>;\n  lightPos : vec3<f32>;\n};\n\n[[block]] struct Model {\n  modelMatrix : mat4x4<f32>;\n};\n\n[[group(0), binding(0)]] var<uniform> scene : Scene;\n[[group(1), binding(0)]] var<uniform> model : Model;\n\nstruct VertexOutput {\n  [[location(0)]] shadowPos : vec3<f32>;\n  [[location(1)]] fragPos : vec3<f32>;\n  [[location(2)]] fragNorm : vec3<f32>;\n\n  [[builtin(position)]] Position : vec4<f32>;\n};\n\n[[stage(vertex)]]\nfn main([[location(0)]] position : vec3<f32>,\n        [[location(1)]] normal : vec3<f32>) -> VertexOutput {\n  var output : VertexOutput;\n\n  // XY is in (-1, 1) space, Z is in (0, 1) space\n  let posFromLight : vec4<f32> = scene.lightViewProjMatrix * model.modelMatrix * vec4<f32>(position, 1.0);\n\n  // Convert XY to (0, 1)\n  // Y is flipped because texture coords are Y-down.\n  output.shadowPos = vec3<f32>(\n    posFromLight.xy * vec2<f32>(0.5, -0.5) + vec2<f32>(0.5, 0.5),\n    posFromLight.z\n  );\n\n  output.Position = scene.cameraViewProjMatrix * model.modelMatrix * vec4<f32>(position, 1.0);\n  output.fragPos = output.Position.xyz;\n  output.fragNorm = normal;\n  return output;\n}\n",fragment:"\n[[block]] struct Scene {\n  lightViewProjMatrix : mat4x4<f32>;\n  cameraViewProjMatrix : mat4x4<f32>;\n  lightPos : vec3<f32>;\n};\n\n[[group(0), binding(0)]] var<uniform> scene : Scene;\n[[group(0), binding(1)]] var shadowMap: texture_depth_2d;\n[[group(0), binding(2)]] var shadowSampler: sampler_comparison;\n\nstruct FragmentInput {\n  [[location(0)]] shadowPos : vec3<f32>;\n  [[location(1)]] fragPos : vec3<f32>;\n  [[location(2)]] fragNorm : vec3<f32>;\n};\n\nlet albedo : vec3<f32> = vec3<f32>(0.9, 0.9, 0.9);\nlet ambientFactor : f32 = 0.2;\n\n[[stage(fragment)]]\nfn main(input : FragmentInput) -> [[location(0)]] vec4<f32> {\n  // Percentage-closer filtering. Sample texels in the region\n  // to smooth the result.\n  var shadowFactor : f32 = 0.0;\n  for (var y : i32 = -1 ; y <= 1 ; y = y + 1) {\n      for (var x : i32 = -1 ; x <= 1 ; x = x + 1) {\n        let offset : vec2<f32> = vec2<f32>(\n          f32(x) * ".concat(.0009765625,",\n          f32(y) * ").concat(.0009765625,");\n\n        shadowFactor = shadowFactor + textureSampleCompare(\n          shadowMap, shadowSampler,\n          input.shadowPos.xy + offset, input.shadowPos.z - 0.007);\n      }\n  }\n\n  shadowFactor = ambientFactor + shadowFactor / 9.0;\n\n  let lambertFactor : f32 = abs(dot(normalize(scene.lightPos - input.fragPos), input.fragNorm));\n\n  let lightingFactor : f32 = min(shadowFactor * lambertFactor, 1.0);\n  return vec4<f32>(lightingFactor * albedo, 1.0);\n}\n")};n.default=Object(s.c)({name:"Shadow Mapping",description:"This example shows how to sample from a depth texture to render shadows.",slug:"shadowMapping",init:function(e){return f.apply(this,arguments)},source:"import { mat4, vec3 } from 'gl-matrix';\nimport { makeBasicExample } from '../../components/basicExample';\n\nimport { mesh } from '../../meshes/stanfordDragon';\n\nconst shadowDepthTextureSize = 1024;\n\nasync function init(canvas: HTMLCanvasElement) {\n  const adapter = await navigator.gpu.requestAdapter();\n  const device = await adapter.requestDevice();\n\n  const aspect = Math.abs(canvas.width / canvas.height);\n\n  const context = canvas.getContext('gpupresent');\n\n  const swapChainFormat = 'bgra8unorm';\n  const swapChain = context.configureSwapChain({\n    device,\n    format: swapChainFormat,\n  });\n\n  // Create the model vertex buffer.\n  const vertexBuffer = device.createBuffer({\n    size: mesh.positions.length * 3 * 2 * Float32Array.BYTES_PER_ELEMENT,\n    usage: GPUBufferUsage.VERTEX,\n    mappedAtCreation: true,\n  });\n  {\n    const mapping = new Float32Array(vertexBuffer.getMappedRange());\n    for (let i = 0; i < mesh.positions.length; ++i) {\n      mapping.set(mesh.positions[i], 6 * i);\n      mapping.set(mesh.normals[i], 6 * i + 3);\n    }\n    vertexBuffer.unmap();\n  }\n\n  // Create the model index buffer.\n  const indexCount = mesh.triangles.length * 3;\n  const indexBuffer = device.createBuffer({\n    size: indexCount * Uint16Array.BYTES_PER_ELEMENT,\n    usage: GPUBufferUsage.INDEX,\n    mappedAtCreation: true,\n  });\n  {\n    const mapping = new Uint16Array(indexBuffer.getMappedRange());\n    for (let i = 0; i < mesh.triangles.length; ++i) {\n      mapping.set(mesh.triangles[i], 3 * i);\n    }\n    indexBuffer.unmap();\n  }\n\n  // Create the depth texture for rendering/sampling the shadow map.\n  const shadowDepthTexture = device.createTexture({\n    size: [shadowDepthTextureSize, shadowDepthTextureSize, 1],\n    usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.SAMPLED,\n    format: 'depth32float',\n  });\n  const shadowDepthTextureView = shadowDepthTexture.createView();\n\n  // Create some common descriptors used for both the shadow pipeline\n  // and the color rendering pipeline.\n  const vertexBuffers: Iterable<GPUVertexBufferLayout> = [\n    {\n      arrayStride: Float32Array.BYTES_PER_ELEMENT * 6,\n      attributes: [\n        {\n          // position\n          shaderLocation: 0,\n          offset: 0,\n          format: 'float32x3',\n        },\n        {\n          // normal\n          shaderLocation: 1,\n          offset: Float32Array.BYTES_PER_ELEMENT * 3,\n          format: 'float32x3',\n        },\n      ],\n    },\n  ];\n\n  const primitive: GPUPrimitiveState = {\n    topology: 'triangle-list',\n    cullMode: 'back',\n  };\n\n  const shadowPipeline = device.createRenderPipeline({\n    vertex: {\n      module: device.createShaderModule({\n        code: wgslShaders.vertexShadow,\n      }),\n      entryPoint: 'main',\n      buffers: vertexBuffers,\n    },\n    fragment: {\n      // This should be omitted and we can use a vertex-only pipeline, but it's\n      // not yet implemented.\n      module: device.createShaderModule({\n        code: wgslShaders.fragmentShadow,\n      }),\n      entryPoint: 'main',\n      targets: [],\n    },\n    depthStencil: {\n      depthWriteEnabled: true,\n      depthCompare: 'less',\n      format: 'depth32float',\n    },\n    primitive,\n  });\n\n  // Create a bind group layout which holds the scene uniforms and\n  // the texture+sampler for depth. We create it manually because the WebPU\n  // implementation doesn't infer this from the shader (yet).\n  const bglForRender = device.createBindGroupLayout({\n    entries: [\n      {\n        binding: 0,\n        visibility: GPUShaderStage.VERTEX | GPUShaderStage.FRAGMENT,\n        buffer: {\n          type: 'uniform',\n        },\n      },\n      {\n        binding: 1,\n        visibility: GPUShaderStage.VERTEX | GPUShaderStage.FRAGMENT,\n        texture: {\n          sampleType: 'depth',\n        },\n      },\n      {\n        binding: 2,\n        visibility: GPUShaderStage.VERTEX | GPUShaderStage.FRAGMENT,\n        sampler: {\n          type: 'comparison',\n        },\n      },\n    ],\n  });\n\n  const pipeline = device.createRenderPipeline({\n    // Specify the pipeline layout. The layout for the model is the same, so\n    // reuse it from the shadow pipeline.\n    layout: device.createPipelineLayout({\n      bindGroupLayouts: [bglForRender, shadowPipeline.getBindGroupLayout(1)],\n    }),\n    vertex: {\n      module: device.createShaderModule({\n        code: wgslShaders.vertex,\n      }),\n      entryPoint: 'main',\n      buffers: vertexBuffers,\n    },\n    fragment: {\n      module: device.createShaderModule({\n        code: wgslShaders.fragment,\n      }),\n      entryPoint: 'main',\n      targets: [\n        {\n          format: swapChainFormat,\n        },\n      ],\n    },\n    depthStencil: {\n      depthWriteEnabled: true,\n      depthCompare: 'less',\n      format: 'depth24plus-stencil8',\n    },\n    primitive,\n  });\n\n  const depthTexture = device.createTexture({\n    size: {\n      width: canvas.width,\n      height: canvas.height,\n    },\n    format: 'depth24plus-stencil8',\n    usage: GPUTextureUsage.RENDER_ATTACHMENT,\n  });\n\n  const renderPassDescriptor: GPURenderPassDescriptor = {\n    colorAttachments: [\n      {\n        // view is acquired and set in render loop.\n        view: undefined,\n\n        loadValue: { r: 0.5, g: 0.5, b: 0.5, a: 1.0 },\n        storeOp: 'store',\n      },\n    ],\n    depthStencilAttachment: {\n      view: depthTexture.createView(),\n\n      depthLoadValue: 1.0,\n      depthStoreOp: 'store',\n      stencilLoadValue: 0,\n      stencilStoreOp: 'store',\n    },\n  };\n\n  const modelUniformBuffer = device.createBuffer({\n    size: 4 * 16, // 4x4 matrix\n    usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST,\n  });\n\n  const sceneUniformBuffer = device.createBuffer({\n    // Two 4x4 viewProj matrices,\n    // one for the camera and one for the light.\n    // Then a vec3 for the light position.\n    size: 2 * 4 * 16 + 3 * 4,\n    usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST,\n  });\n\n  const sceneBindGroupForShadow = device.createBindGroup({\n    layout: shadowPipeline.getBindGroupLayout(0),\n    entries: [\n      {\n        binding: 0,\n        resource: {\n          buffer: sceneUniformBuffer,\n        },\n      },\n    ],\n  });\n\n  const sceneBindGroupForRender = device.createBindGroup({\n    layout: bglForRender,\n    entries: [\n      {\n        binding: 0,\n        resource: {\n          buffer: sceneUniformBuffer,\n        },\n      },\n      {\n        binding: 1,\n        resource: shadowDepthTextureView,\n      },\n      {\n        binding: 2,\n        resource: device.createSampler({\n          compare: 'less',\n        }),\n      },\n    ],\n  });\n\n  const modelBindGroup = device.createBindGroup({\n    layout: shadowPipeline.getBindGroupLayout(1),\n    entries: [\n      {\n        binding: 0,\n        resource: {\n          buffer: modelUniformBuffer,\n        },\n      },\n    ],\n  });\n\n  const eyePosition = vec3.fromValues(0, 50, -100);\n  const upVector = vec3.fromValues(0, 1, 0);\n  const origin = vec3.fromValues(0, 0, 0);\n\n  const projectionMatrix = mat4.create();\n  mat4.perspective(projectionMatrix, (2 * Math.PI) / 5, aspect, 1, 2000.0);\n\n  const viewMatrix = mat4.create();\n  mat4.lookAt(viewMatrix, eyePosition, origin, upVector);\n\n  const lightPosition = vec3.fromValues(50, 100, -100);\n  const lightViewMatrix = mat4.create();\n  mat4.lookAt(lightViewMatrix, lightPosition, origin, upVector);\n\n  const lightProjectionMatrix = mat4.create();\n  {\n    const left = -80;\n    const right = 80;\n    const bottom = -80;\n    const top = 80;\n    const near = -200;\n    const far = 300;\n    mat4.ortho(lightProjectionMatrix, left, right, bottom, top, near, far);\n  }\n\n  const lightViewProjMatrix = mat4.create();\n  mat4.multiply(lightViewProjMatrix, lightProjectionMatrix, lightViewMatrix);\n\n  const viewProjMatrix = mat4.create();\n  mat4.multiply(viewProjMatrix, projectionMatrix, viewMatrix);\n\n  // Move the model so it's centered.\n  const modelMatrix = mat4.create();\n  mat4.translate(modelMatrix, modelMatrix, vec3.fromValues(0, -5, 0));\n  mat4.translate(modelMatrix, modelMatrix, vec3.fromValues(0, -40, 0));\n\n  // The camera/light aren't moving, so write them into buffers now.\n  {\n    const lightMatrixData = lightViewProjMatrix as Float32Array;\n    device.queue.writeBuffer(\n      sceneUniformBuffer,\n      0,\n      lightMatrixData.buffer,\n      lightMatrixData.byteOffset,\n      lightMatrixData.byteLength\n    );\n\n    const cameraMatrixData = viewProjMatrix as Float32Array;\n    device.queue.writeBuffer(\n      sceneUniformBuffer,\n      64,\n      cameraMatrixData.buffer,\n      cameraMatrixData.byteOffset,\n      cameraMatrixData.byteLength\n    );\n\n    const lightData = lightPosition as Float32Array;\n    device.queue.writeBuffer(\n      sceneUniformBuffer,\n      128,\n      lightData.buffer,\n      lightData.byteOffset,\n      lightData.byteLength\n    );\n\n    const modelData = modelMatrix as Float32Array;\n    device.queue.writeBuffer(\n      modelUniformBuffer,\n      0,\n      modelData.buffer,\n      modelData.byteOffset,\n      modelData.byteLength\n    );\n  }\n\n  // Rotates the camera around the origin based on time.\n  function getCameraViewProjMatrix() {\n    const eyePosition = vec3.fromValues(0, 50, -100);\n\n    const rad = Math.PI * (Date.now() / 2000);\n    vec3.rotateY(eyePosition, eyePosition, origin, rad);\n\n    const viewMatrix = mat4.create();\n    mat4.lookAt(viewMatrix, eyePosition, origin, upVector);\n\n    mat4.multiply(viewProjMatrix, projectionMatrix, viewMatrix);\n    return viewProjMatrix as Float32Array;\n  }\n\n  const shadowPassDescriptor: GPURenderPassDescriptor = {\n    colorAttachments: [],\n    depthStencilAttachment: {\n      view: shadowDepthTextureView,\n      depthLoadValue: 1.0,\n      depthStoreOp: 'store',\n      stencilLoadValue: 0,\n      stencilStoreOp: 'store',\n    },\n  };\n\n  return function frame() {\n    const cameraViewProj = getCameraViewProjMatrix();\n    device.queue.writeBuffer(\n      sceneUniformBuffer,\n      64,\n      cameraViewProj.buffer,\n      cameraViewProj.byteOffset,\n      cameraViewProj.byteLength\n    );\n\n    renderPassDescriptor.colorAttachments[0].view = swapChain\n      .getCurrentTexture()\n      .createView();\n\n    const commandEncoder = device.createCommandEncoder();\n    {\n      const shadowPass = commandEncoder.beginRenderPass(shadowPassDescriptor);\n      shadowPass.setPipeline(shadowPipeline);\n      shadowPass.setBindGroup(0, sceneBindGroupForShadow);\n      shadowPass.setBindGroup(1, modelBindGroup);\n      shadowPass.setVertexBuffer(0, vertexBuffer);\n      shadowPass.setIndexBuffer(indexBuffer, 'uint16');\n      shadowPass.drawIndexed(indexCount);\n\n      shadowPass.endPass();\n    }\n    {\n      const renderPass = commandEncoder.beginRenderPass(renderPassDescriptor);\n      renderPass.setPipeline(pipeline);\n      renderPass.setBindGroup(0, sceneBindGroupForRender);\n      renderPass.setBindGroup(1, modelBindGroup);\n      renderPass.setVertexBuffer(0, vertexBuffer);\n      renderPass.setIndexBuffer(indexBuffer, 'uint16');\n      renderPass.drawIndexed(indexCount);\n\n      renderPass.endPass();\n    }\n    device.queue.submit([commandEncoder.finish()]);\n  };\n}\n\nconst wgslShaders = {\n  vertexShadow: `\n[[block]] struct Scene {\n  lightViewProjMatrix : mat4x4<f32>;\n  cameraViewProjMatrix : mat4x4<f32>;\n  lightPos : vec3<f32>;\n};\n\n[[block]] struct Model {\n  modelMatrix : mat4x4<f32>;\n};\n\n[[group(0), binding(0)]] var<uniform> scene : Scene;\n[[group(1), binding(0)]] var<uniform> model : Model;\n\n[[stage(vertex)]]\nfn main([[location(0)]] position : vec3<f32>)\n     -> [[builtin(position)]] vec4<f32> {\n  return scene.lightViewProjMatrix * model.modelMatrix * vec4<f32>(position, 1.0);\n}\n`,\n\n  fragmentShadow: `\n[[stage(fragment)]]\nfn main() {\n}\n`,\n\n  vertex: `\n[[block]] struct Scene {\n  lightViewProjMatrix : mat4x4<f32>;\n  cameraViewProjMatrix : mat4x4<f32>;\n  lightPos : vec3<f32>;\n};\n\n[[block]] struct Model {\n  modelMatrix : mat4x4<f32>;\n};\n\n[[group(0), binding(0)]] var<uniform> scene : Scene;\n[[group(1), binding(0)]] var<uniform> model : Model;\n\nstruct VertexOutput {\n  [[location(0)]] shadowPos : vec3<f32>;\n  [[location(1)]] fragPos : vec3<f32>;\n  [[location(2)]] fragNorm : vec3<f32>;\n\n  [[builtin(position)]] Position : vec4<f32>;\n};\n\n[[stage(vertex)]]\nfn main([[location(0)]] position : vec3<f32>,\n        [[location(1)]] normal : vec3<f32>) -> VertexOutput {\n  var output : VertexOutput;\n\n  // XY is in (-1, 1) space, Z is in (0, 1) space\n  let posFromLight : vec4<f32> = scene.lightViewProjMatrix * model.modelMatrix * vec4<f32>(position, 1.0);\n\n  // Convert XY to (0, 1)\n  // Y is flipped because texture coords are Y-down.\n  output.shadowPos = vec3<f32>(\n    posFromLight.xy * vec2<f32>(0.5, -0.5) + vec2<f32>(0.5, 0.5),\n    posFromLight.z\n  );\n\n  output.Position = scene.cameraViewProjMatrix * model.modelMatrix * vec4<f32>(position, 1.0);\n  output.fragPos = output.Position.xyz;\n  output.fragNorm = normal;\n  return output;\n}\n`,\n  fragment: `\n[[block]] struct Scene {\n  lightViewProjMatrix : mat4x4<f32>;\n  cameraViewProjMatrix : mat4x4<f32>;\n  lightPos : vec3<f32>;\n};\n\n[[group(0), binding(0)]] var<uniform> scene : Scene;\n[[group(0), binding(1)]] var shadowMap: texture_depth_2d;\n[[group(0), binding(2)]] var shadowSampler: sampler_comparison;\n\nstruct FragmentInput {\n  [[location(0)]] shadowPos : vec3<f32>;\n  [[location(1)]] fragPos : vec3<f32>;\n  [[location(2)]] fragNorm : vec3<f32>;\n};\n\nlet albedo : vec3<f32> = vec3<f32>(0.9, 0.9, 0.9);\nlet ambientFactor : f32 = 0.2;\n\n[[stage(fragment)]]\nfn main(input : FragmentInput) -> [[location(0)]] vec4<f32> {\n  // Percentage-closer filtering. Sample texels in the region\n  // to smooth the result.\n  var shadowFactor : f32 = 0.0;\n  for (var y : i32 = -1 ; y <= 1 ; y = y + 1) {\n      for (var x : i32 = -1 ; x <= 1 ; x = x + 1) {\n        let offset : vec2<f32> = vec2<f32>(\n          f32(x) * ${1 / shadowDepthTextureSize},\n          f32(y) * ${1 / shadowDepthTextureSize});\n\n        shadowFactor = shadowFactor + textureSampleCompare(\n          shadowMap, shadowSampler,\n          input.shadowPos.xy + offset, input.shadowPos.z - 0.007);\n      }\n  }\n\n  shadowFactor = ambientFactor + shadowFactor / 9.0;\n\n  let lambertFactor : f32 = abs(dot(normalize(scene.lightPos - input.fragPos), input.fragNorm));\n\n  let lightingFactor : f32 = min(shadowFactor * lambertFactor, 1.0);\n  return vec4<f32>(lightingFactor * albedo, 1.0);\n}\n`,\n};\n\nexport default makeBasicExample({\n  name: 'Shadow Mapping',\n  description:\n    'This example shows how to sample from a depth texture to render shadows.',\n  slug: 'shadowMapping',\n  init,\n  source: __SOURCE__,\n});\n"})},"N/8h":function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/samples/shadowMapping",function(){return t("DELu")}])},O1S9:function(e,n,t){e.exports={shaderEditor:"BasicExample_shaderEditor__2wVi1",updateShaderBtn:"BasicExample_updateShaderBtn__Qgygo",canvasContainer:"BasicExample_canvasContainer__3e5KH"}},QqoD:function(e,n,t){"use strict";t.d(n,"a",(function(){return u}));var r=t("FvBH"),a=t.n(r);var o=t("BsWD");function i(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var t=[],r=!0,a=!1,o=void 0;try{for(var i,s=e[Symbol.iterator]();!(r=(i=s.next()).done)&&(t.push(i.value),!n||t.length!==n);r=!0);}catch(c){a=!0,o=c}finally{try{r||null==s.return||s.return()}finally{if(a)throw o}}return t}}(e,n)||Object(o.a)(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var s=t("IOcx");var c={xy:[0,1],xz:[0,2],yz:[1,2]};var u={positions:a.a.positions,triangles:a.a.cells,normals:[],uvs:[]};u.normals=function(e,n){var t=e.map((function(){return[0,0,0]}));return n.forEach((function(n){var r=i(n,3),a=r[0],o=r[1],c=r[2],u=e[a],f=e[o],d=e[c],l=s.b.subtract(s.b.create(),f,u),p=s.b.subtract(s.b.create(),d,u);s.b.normalize(l,l),s.b.normalize(p,p);var m=s.b.cross(s.b.create(),l,p);s.b.add(t[a],t[a],m),s.b.add(t[o],t[o],m),s.b.add(t[c],t[c],m)})),t.forEach((function(e){s.b.normalize(e,e)})),t}(u.positions,u.triangles),u.uvs=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"xy",t=c[n],r=e.map((function(){return[0,0]})),a=[1/0,1/0],o=[-1/0,-1/0];return e.forEach((function(e,n){r[n][0]=e[t[0]],r[n][1]=e[t[1]],a[0]=Math.min(e[t[0]],a[0]),a[1]=Math.min(e[t[1]],a[1]),o[0]=Math.max(e[t[0]],o[0]),o[1]=Math.max(e[t[1]],o[1])})),r.forEach((function(e){e[0]=(e[0]-a[0])/(o[0]-a[0]),e[1]=(e[1]-a[1])/(o[1]-a[1])})),r}(u.positions,"xy"),u.triangles.push([u.positions.length,u.positions.length+2,u.positions.length+1],[u.positions.length,u.positions.length+1,u.positions.length+3]),u.positions.push([-100,20,-100],[100,20,100],[-100,20,100],[100,20,-100]),u.normals.push([0,1,0],[0,1,0],[0,1,0],[0,1,0]),u.uvs.push([0,0],[1,1],[0,1],[1,0])},SoUo:function(e,n,t){"use strict";t.d(n,"b",(function(){return O})),t.d(n,"a",(function(){return T})),t.d(n,"c",(function(){return F}));var r=t("a3WO");var a=t("BsWD");function o(e){return function(e){if(Array.isArray(e))return Object(r.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(a.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var i=t("nKUr");function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=t("o0o1"),u=t.n(c),f=t("HaE+");function d(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function l(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function m(e,n){return(m=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}function h(e){return(h="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function g(e,n){return!n||"object"!==h(n)&&"function"!==typeof n?p(e):n}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var b=t("rePB"),x=t("g4pe"),w=t.n(x),y=t("q1tI"),P=t.n(y),S=t("O1S9"),M=t.n(S);function E(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function j(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?E(Object(t),!0).forEach((function(n){Object(b.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):E(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function B(e){var n=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,r=v(e);if(n){var a=v(this).constructor;t=Reflect.construct(r,arguments,a)}else t=r.apply(this,arguments);return g(this,t)}}var O=600,T=600;t("+dQi");var V=t("VrN/"),U=t("7QzT").setShaderRegisteredCallback,G=function(e){!function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&m(e,n)}(c,e);var n,r,a,o=B(c);function c(){var e;d(this,c);for(var n=arguments.length,t=new Array(n),r=0;r<n;r++)t[r]=arguments[r];return e=o.call.apply(o,[this].concat(t)),Object(b.a)(p(e),"stopRunning",!1),Object(b.a)(p(e),"canvasRef",P.a.createRef()),e}return n=c,(r=[{key:"componentDidMount",value:function(){var e=this,n=void 0;this.props.gui&&(n=new(t("iZKT").GUI)({autoPlace:!1}),this.canvasRef.current.parentNode.appendChild(n.domElement),n.domElement.style.position="absolute",n.domElement.style.top="10px",n.domElement.style.right="10px");var r=0;U(function(){var n=Object(f.a)(u.a.mark((function n(t,a){var o;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:o={value:t,lineNumbers:!0,lineWrapping:!0,theme:"monokai"},e.props.addShaderEditor(Object(i.jsx)("div",{className:M.a.shaderEditor,ref:function(e){if(e){var n=V(e,o);n.updatedSource=a;var t=e.firstElementChild,r=document.createElement("button");r.className=M.a.updateShaderBtn,r.innerHTML="Update shader",r.onclick=function(){return a(n.getValue())},t.prepend(r)}}},t+r++));case 2:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}()),this.canvasRef.current&&this.props.init(this.canvasRef.current,n).then((function(n){requestAnimationFrame((function t(r){e.stopRunning||(n(r),requestAnimationFrame(t))}))}))}},{key:"componentWillUnmount",value:function(){this.stopRunning=!0}},{key:"render",value:function(){var e=this.props,n=(e.gui,e.init,e.addShaderEditor,s(e,["gui","init","addShaderEditor"]));return Object(i.jsx)("canvas",j(j({},n),{},{ref:this.canvasRef}))}}])&&l(n.prototype,r),a&&l(n,a),c}(P.a.Component);function F(e){return function(){var n=Object(y.useState)("undefined"!==typeof navigator&&!!navigator.gpu),t=n[0],r=n[1],a=function(){var n=Object(f.a)(u.a.mark((function n(t,a){return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,e.init(t,a);case 3:return n.abrupt("return",n.sent);case 6:n.prev=6,n.t0=n.catch(0),console.error(n.t0),r(!1);case 10:case"end":return n.stop()}}),n,null,[[0,6]])})));return function(e,t){return n.apply(this,arguments)}}(),s=Object(y.useState)([]),c=s[0],d=s[1],l=Object(y.useMemo)((function(){return Object(i.jsx)("div",{ref:function(n){var t={value:e.source,readOnly:!0,lineNumbers:!0,lineWrapping:!0,theme:"monokai",mode:"text/typescript"};V(n,t)}})}),[]);return Object(i.jsxs)("main",{children:[Object(i.jsxs)(w.a,{children:[Object(i.jsx)("style",{dangerouslySetInnerHTML:{__html:"\n            .CodeMirror {\n              height: auto !important;\n              margin: 1em 0;\n            }\n\n            .CodeMirror-scroll {\n              height: auto !important;\n              overflow: visible !important;\n            }\n          "}}),Object(i.jsx)("title",{children:"".concat(e.name," - WebGPU Samples")}),Object(i.jsx)("meta",{name:"description",content:e.description})]}),Object(i.jsxs)("div",{children:[Object(i.jsx)("h1",{children:e.name}),Object(i.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://github.com/austinEng/webgpu-samples/tree/main/src/pages/samples/".concat(e.slug,".ts"),children:"See it on Github!"}),Object(i.jsx)("p",{children:e.description}),t?null:Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("p",{children:"Is WebGPU enabled?"}),Object(i.jsxs)("p",{children:["WebGPU or this example is not supported! Please visit"," ",Object(i.jsx)("a",{href:"//webgpu.io",children:"webgpu.io"})," to see the current implementation status."]})]})]}),Object(i.jsx)("div",{className:M.a.canvasContainer,children:t?Object(i.jsx)(G,{init:a,gui:e.gui,addShaderEditor:function(e){return d([].concat(o(c),[e]))},width:O,height:T}):Object(i.jsx)("canvas",{width:O,height:T})}),Object(i.jsxs)("div",{children:[c,l]})]})}}}},[["N/8h",0,1,4,7,2,3,5]]]);