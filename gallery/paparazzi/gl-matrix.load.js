montageDefine("fb87e57","gl-matrix",{dependencies:[],factory:function(e,t,n){(function(e){e.glMatrixArrayType=e.MatrixArray=null,e.vec3={},e.mat3={},e.mat4={},e.quat4={},e.setMatrixArrayType=function(e){return glMatrixArrayType=MatrixArray=e},e.determineMatrixArrayType=function(){return setMatrixArrayType("undefined"!=typeof Float32Array?Float32Array:Array)},determineMatrixArrayType()})("undefined"!=typeof t?global:this),vec3.create=function(e){var t=new MatrixArray(3);return e?(t[0]=e[0],t[1]=e[1],t[2]=e[2]):t[0]=t[1]=t[2]=0,t},vec3.set=function(e,t){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t},vec3.add=function(e,t,n){return!n||e===n?(e[0]+=t[0],e[1]+=t[1],e[2]+=t[2],e):(n[0]=e[0]+t[0],n[1]=e[1]+t[1],n[2]=e[2]+t[2],n)},vec3.subtract=function(e,t,n){return!n||e===n?(e[0]-=t[0],e[1]-=t[1],e[2]-=t[2],e):(n[0]=e[0]-t[0],n[1]=e[1]-t[1],n[2]=e[2]-t[2],n)},vec3.multiply=function(e,t,n){return!n||e===n?(e[0]*=t[0],e[1]*=t[1],e[2]*=t[2],e):(n[0]=e[0]*t[0],n[1]=e[1]*t[1],n[2]=e[2]*t[2],n)},vec3.negate=function(e,t){return t||(t=e),t[0]=-e[0],t[1]=-e[1],t[2]=-e[2],t},vec3.scale=function(e,t,n){return!n||e===n?(e[0]*=t,e[1]*=t,e[2]*=t,e):(n[0]=e[0]*t,n[1]=e[1]*t,n[2]=e[2]*t,n)},vec3.normalize=function(e,t){t||(t=e);var n=e[0],r=e[1],i=e[2],s=Math.sqrt(n*n+r*r+i*i);return s?1===s?(t[0]=n,t[1]=r,t[2]=i,t):(s=1/s,t[0]=n*s,t[1]=r*s,t[2]=i*s,t):(t[0]=0,t[1]=0,t[2]=0,t)},vec3.cross=function(e,t,n){n||(n=e);var r=e[0],i=e[1],e=e[2],s=t[0],o=t[1],t=t[2];return n[0]=i*t-e*o,n[1]=e*s-r*t,n[2]=r*o-i*s,n},vec3.length=function(e){var t=e[0],n=e[1],e=e[2];return Math.sqrt(t*t+n*n+e*e)},vec3.dot=function(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]},vec3.direction=function(e,t,n){n||(n=e);var r=e[0]-t[0],i=e[1]-t[1],e=e[2]-t[2],t=Math.sqrt(r*r+i*i+e*e);return t?(t=1/t,n[0]=r*t,n[1]=i*t,n[2]=e*t,n):(n[0]=0,n[1]=0,n[2]=0,n)},vec3.lerp=function(e,t,n,r){return r||(r=e),r[0]=e[0]+n*(t[0]-e[0]),r[1]=e[1]+n*(t[1]-e[1]),r[2]=e[2]+n*(t[2]-e[2]),r},vec3.dist=function(e,t){var n=t[0]-e[0],r=t[1]-e[1],i=t[2]-e[2];return Math.sqrt(n*n+r*r+i*i)},vec3.unproject=function(e,t,n,r,i){i||(i=e);var s=mat4.create(),o=new MatrixArray(4);return o[0]=2*(e[0]-r[0])/r[2]-1,o[1]=2*(e[1]-r[1])/r[3]-1,o[2]=2*e[2]-1,o[3]=1,mat4.multiply(n,t,s),mat4.inverse(s)?(mat4.multiplyVec4(s,o),0===o[3]?null:(i[0]=o[0]/o[3],i[1]=o[1]/o[3],i[2]=o[2]/o[3],i)):null},vec3.str=function(e){return"["+e[0]+", "+e[1]+", "+e[2]+"]"},mat3.create=function(e){var t=new MatrixArray(9);return e&&(t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8]),t},mat3.set=function(e,t){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t},mat3.identity=function(e){return e||(e=mat3.create()),e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=1,e[5]=0,e[6]=0,e[7]=0,e[8]=1,e},mat3.transpose=function(e,t){if(!t||e===t){var n=e[1],r=e[2],i=e[5];return e[1]=e[3],e[2]=e[6],e[3]=n,e[5]=e[7],e[6]=r,e[7]=i,e}return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],t},mat3.toMat4=function(e,t){return t||(t=mat4.create()),t[15]=1,t[14]=0,t[13]=0,t[12]=0,t[11]=0,t[10]=e[8],t[9]=e[7],t[8]=e[6],t[7]=0,t[6]=e[5],t[5]=e[4],t[4]=e[3],t[3]=0,t[2]=e[2],t[1]=e[1],t[0]=e[0],t},mat3.str=function(e){return"["+e[0]+", "+e[1]+", "+e[2]+", "+e[3]+", "+e[4]+", "+e[5]+", "+e[6]+", "+e[7]+", "+e[8]+"]"},mat4.create=function(e){var t=new MatrixArray(16);return e&&(t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t[9]=e[9],t[10]=e[10],t[11]=e[11],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15]),t},mat4.set=function(e,t){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t[9]=e[9],t[10]=e[10],t[11]=e[11],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15],t},mat4.identity=function(e){return e||(e=mat4.create()),e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e},mat4.transpose=function(e,t){if(!t||e===t){var n=e[1],r=e[2],i=e[3],s=e[6],o=e[7],u=e[11];return e[1]=e[4],e[2]=e[8],e[3]=e[12],e[4]=n,e[6]=e[9],e[7]=e[13],e[8]=r,e[9]=s,e[11]=e[14],e[12]=i,e[13]=o,e[14]=u,e}return t[0]=e[0],t[1]=e[4],t[2]=e[8],t[3]=e[12],t[4]=e[1],t[5]=e[5],t[6]=e[9],t[7]=e[13],t[8]=e[2],t[9]=e[6],t[10]=e[10],t[11]=e[14],t[12]=e[3],t[13]=e[7],t[14]=e[11],t[15]=e[15],t},mat4.determinant=function(e){var t=e[0],n=e[1],r=e[2],i=e[3],s=e[4],o=e[5],u=e[6],a=e[7],f=e[8],l=e[9],c=e[10],h=e[11],p=e[12],d=e[13],v=e[14],e=e[15];return p*l*u*i-f*d*u*i-p*o*c*i+s*d*c*i+f*o*v*i-s*l*v*i-p*l*r*a+f*d*r*a+p*n*c*a-t*d*c*a-f*n*v*a+t*l*v*a+p*o*r*h-s*d*r*h-p*n*u*h+t*d*u*h+s*n*v*h-t*o*v*h-f*o*r*e+s*l*r*e+f*n*u*e-t*l*u*e-s*n*c*e+t*o*c*e},mat4.inverse=function(e,t){t||(t=e);var n=e[0],r=e[1],i=e[2],s=e[3],o=e[4],u=e[5],a=e[6],f=e[7],l=e[8],c=e[9],h=e[10],p=e[11],d=e[12],v=e[13],m=e[14],g=e[15],y=n*u-r*o,b=n*a-i*o,w=n*f-s*o,E=r*a-i*u,S=r*f-s*u,x=i*f-s*a,T=l*v-c*d,N=l*m-h*d,C=l*g-p*d,k=c*m-h*v,L=c*g-p*v,A=h*g-p*m,O=y*A-b*L+w*k+E*C-S*N+x*T;return O?(O=1/O,t[0]=(u*A-a*L+f*k)*O,t[1]=(-r*A+i*L-s*k)*O,t[2]=(v*x-m*S+g*E)*O,t[3]=(-c*x+h*S-p*E)*O,t[4]=(-o*A+a*C-f*N)*O,t[5]=(n*A-i*C+s*N)*O,t[6]=(-d*x+m*w-g*b)*O,t[7]=(l*x-h*w+p*b)*O,t[8]=(o*L-u*C+f*T)*O,t[9]=(-n*L+r*C-s*T)*O,t[10]=(d*S-v*w+g*y)*O,t[11]=(-l*S+c*w-p*y)*O,t[12]=(-o*k+u*N-a*T)*O,t[13]=(n*k-r*N+i*T)*O,t[14]=(-d*E+v*b-m*y)*O,t[15]=(l*E-c*b+h*y)*O,t):null},mat4.toRotationMat=function(e,t){return t||(t=mat4.create()),t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t[9]=e[9],t[10]=e[10],t[11]=e[11],t[12]=0,t[13]=0,t[14]=0,t[15]=1,t},mat4.toMat3=function(e,t){return t||(t=mat3.create()),t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[4],t[4]=e[5],t[5]=e[6],t[6]=e[8],t[7]=e[9],t[8]=e[10],t},mat4.toInverseMat3=function(e,t){var n=e[0],r=e[1],i=e[2],s=e[4],o=e[5],u=e[6],a=e[8],f=e[9],l=e[10],c=l*o-u*f,h=-l*s+u*a,p=f*s-o*a,d=n*c+r*h+i*p;return d?(d=1/d,t||(t=mat3.create()),t[0]=c*d,t[1]=(-l*r+i*f)*d,t[2]=(u*r-i*o)*d,t[3]=h*d,t[4]=(l*n-i*a)*d,t[5]=(-u*n+i*s)*d,t[6]=p*d,t[7]=(-f*n+r*a)*d,t[8]=(o*n-r*s)*d,t):null},mat4.multiply=function(e,t,n){n||(n=e);var r=e[0],i=e[1],s=e[2],o=e[3],u=e[4],a=e[5],f=e[6],l=e[7],c=e[8],h=e[9],p=e[10],d=e[11],v=e[12],m=e[13],g=e[14],e=e[15],y=t[0],b=t[1],w=t[2],E=t[3],S=t[4],x=t[5],T=t[6],N=t[7],C=t[8],k=t[9],L=t[10],A=t[11],O=t[12],M=t[13],_=t[14],t=t[15];return n[0]=y*r+b*u+w*c+E*v,n[1]=y*i+b*a+w*h+E*m,n[2]=y*s+b*f+w*p+E*g,n[3]=y*o+b*l+w*d+E*e,n[4]=S*r+x*u+T*c+N*v,n[5]=S*i+x*a+T*h+N*m,n[6]=S*s+x*f+T*p+N*g,n[7]=S*o+x*l+T*d+N*e,n[8]=C*r+k*u+L*c+A*v,n[9]=C*i+k*a+L*h+A*m,n[10]=C*s+k*f+L*p+A*g,n[11]=C*o+k*l+L*d+A*e,n[12]=O*r+M*u+_*c+t*v,n[13]=O*i+M*a+_*h+t*m,n[14]=O*s+M*f+_*p+t*g,n[15]=O*o+M*l+_*d+t*e,n},mat4.multiplyVec3=function(e,t,n){n||(n=t);var r=t[0],i=t[1],t=t[2];return n[0]=e[0]*r+e[4]*i+e[8]*t+e[12],n[1]=e[1]*r+e[5]*i+e[9]*t+e[13],n[2]=e[2]*r+e[6]*i+e[10]*t+e[14],n},mat4.multiplyVec4=function(e,t,n){n||(n=t);var r=t[0],i=t[1],s=t[2],t=t[3];return n[0]=e[0]*r+e[4]*i+e[8]*s+e[12]*t,n[1]=e[1]*r+e[5]*i+e[9]*s+e[13]*t,n[2]=e[2]*r+e[6]*i+e[10]*s+e[14]*t,n[3]=e[3]*r+e[7]*i+e[11]*s+e[15]*t,n},mat4.translate=function(e,t,n){var r=t[0],i=t[1],t=t[2],s,o,u,a,f,l,c,h,p,d,v,m;return!n||e===n?(e[12]=e[0]*r+e[4]*i+e[8]*t+e[12],e[13]=e[1]*r+e[5]*i+e[9]*t+e[13],e[14]=e[2]*r+e[6]*i+e[10]*t+e[14],e[15]=e[3]*r+e[7]*i+e[11]*t+e[15],e):(s=e[0],o=e[1],u=e[2],a=e[3],f=e[4],l=e[5],c=e[6],h=e[7],p=e[8],d=e[9],v=e[10],m=e[11],n[0]=s,n[1]=o,n[2]=u,n[3]=a,n[4]=f,n[5]=l,n[6]=c,n[7]=h,n[8]=p,n[9]=d,n[10]=v,n[11]=m,n[12]=s*r+f*i+p*t+e[12],n[13]=o*r+l*i+d*t+e[13],n[14]=u*r+c*i+v*t+e[14],n[15]=a*r+h*i+m*t+e[15],n)},mat4.scale=function(e,t,n){var r=t[0],i=t[1],t=t[2];return!n||e===n?(e[0]*=r,e[1]*=r,e[2]*=r,e[3]*=r,e[4]*=i,e[5]*=i,e[6]*=i,e[7]*=i,e[8]*=t,e[9]*=t,e[10]*=t,e[11]*=t,e):(n[0]=e[0]*r,n[1]=e[1]*r,n[2]=e[2]*r,n[3]=e[3]*r,n[4]=e[4]*i,n[5]=e[5]*i,n[6]=e[6]*i,n[7]=e[7]*i,n[8]=e[8]*t,n[9]=e[9]*t,n[10]=e[10]*t,n[11]=e[11]*t,n[12]=e[12],n[13]=e[13],n[14]=e[14],n[15]=e[15],n)},mat4.rotate=function(e,t,n,r){var i=n[0],s=n[1],n=n[2],o=Math.sqrt(i*i+s*s+n*n),u,a,f,l,c,h,p,d,v,m,g,y,b,w,E,S,x,T,N,C;return o?(1!==o&&(o=1/o,i*=o,s*=o,n*=o),u=Math.sin(t),a=Math.cos(t),f=1-a,t=e[0],o=e[1],l=e[2],c=e[3],h=e[4],p=e[5],d=e[6],v=e[7],m=e[8],g=e[9],y=e[10],b=e[11],w=i*i*f+a,E=s*i*f+n*u,S=n*i*f-s*u,x=i*s*f-n*u,T=s*s*f+a,N=n*s*f+i*u,C=i*n*f+s*u,i=s*n*f-i*u,s=n*n*f+a,r?e!==r&&(r[12]=e[12],r[13]=e[13],r[14]=e[14],r[15]=e[15]):r=e,r[0]=t*w+h*E+m*S,r[1]=o*w+p*E+g*S,r[2]=l*w+d*E+y*S,r[3]=c*w+v*E+b*S,r[4]=t*x+h*T+m*N,r[5]=o*x+p*T+g*N,r[6]=l*x+d*T+y*N,r[7]=c*x+v*T+b*N,r[8]=t*C+h*i+m*s,r[9]=o*C+p*i+g*s,r[10]=l*C+d*i+y*s,r[11]=c*C+v*i+b*s,r):null},mat4.rotateX=function(e,t,n){var r=Math.sin(t),t=Math.cos(t),i=e[4],s=e[5],o=e[6],u=e[7],a=e[8],f=e[9],l=e[10],c=e[11];return n?e!==n&&(n[0]=e[0],n[1]=e[1],n[2]=e[2],n[3]=e[3],n[12]=e[12],n[13]=e[13],n[14]=e[14],n[15]=e[15]):n=e,n[4]=i*t+a*r,n[5]=s*t+f*r,n[6]=o*t+l*r,n[7]=u*t+c*r,n[8]=i*-r+a*t,n[9]=s*-r+f*t,n[10]=o*-r+l*t,n[11]=u*-r+c*t,n},mat4.rotateY=function(e,t,n){var r=Math.sin(t),t=Math.cos(t),i=e[0],s=e[1],o=e[2],u=e[3],a=e[8],f=e[9],l=e[10],c=e[11];return n?e!==n&&(n[4]=e[4],n[5]=e[5],n[6]=e[6],n[7]=e[7],n[12]=e[12],n[13]=e[13],n[14]=e[14],n[15]=e[15]):n=e,n[0]=i*t+a*-r,n[1]=s*t+f*-r,n[2]=o*t+l*-r,n[3]=u*t+c*-r,n[8]=i*r+a*t,n[9]=s*r+f*t,n[10]=o*r+l*t,n[11]=u*r+c*t,n},mat4.rotateZ=function(e,t,n){var r=Math.sin(t),t=Math.cos(t),i=e[0],s=e[1],o=e[2],u=e[3],a=e[4],f=e[5],l=e[6],c=e[7];return n?e!==n&&(n[8]=e[8],n[9]=e[9],n[10]=e[10],n[11]=e[11],n[12]=e[12],n[13]=e[13],n[14]=e[14],n[15]=e[15]):n=e,n[0]=i*t+a*r,n[1]=s*t+f*r,n[2]=o*t+l*r,n[3]=u*t+c*r,n[4]=i*-r+a*t,n[5]=s*-r+f*t,n[6]=o*-r+l*t,n[7]=u*-r+c*t,n},mat4.frustum=function(e,t,n,r,i,s,o){o||(o=mat4.create());var u=t-e,a=r-n,f=s-i;return o[0]=2*i/u,o[1]=0,o[2]=0,o[3]=0,o[4]=0,o[5]=2*i/a,o[6]=0,o[7]=0,o[8]=(t+e)/u,o[9]=(r+n)/a,o[10]=-(s+i)/f,o[11]=-1,o[12]=0,o[13]=0,o[14]=-(2*s*i)/f,o[15]=0,o},mat4.perspective=function(e,t,n,r,i){return e=n*Math.tan(e*Math.PI/360),t*=e,mat4.frustum(-t,t,-e,e,n,r,i)},mat4.ortho=function(e,t,n,r,i,s,o){o||(o=mat4.create());var u=t-e,a=r-n,f=s-i;return o[0]=2/u,o[1]=0,o[2]=0,o[3]=0,o[4]=0,o[5]=2/a,o[6]=0,o[7]=0,o[8]=0,o[9]=0,o[10]=-2/f,o[11]=0,o[12]=-(e+t)/u,o[13]=-(r+n)/a,o[14]=-(s+i)/f,o[15]=1,o},mat4.lookAt=function(e,t,n,r){r||(r=mat4.create());var i,s,o,u,a,f,l,c,h=e[0],p=e[1],e=e[2];return o=n[0],u=n[1],s=n[2],l=t[0],n=t[1],i=t[2],h===l&&p===n&&e===i?mat4.identity(r):(t=h-l,n=p-n,l=e-i,c=1/Math.sqrt(t*t+n*n+l*l),t*=c,n*=c,l*=c,i=u*l-s*n,s=s*t-o*l,o=o*n-u*t,(c=Math.sqrt(i*i+s*s+o*o))?(c=1/c,i*=c,s*=c,o*=c):o=s=i=0,u=n*o-l*s,a=l*i-t*o,f=t*s-n*i,(c=Math.sqrt(u*u+a*a+f*f))?(c=1/c,u*=c,a*=c,f*=c):f=a=u=0,r[0]=i,r[1]=u,r[2]=t,r[3]=0,r[4]=s,r[5]=a,r[6]=n,r[7]=0,r[8]=o,r[9]=f,r[10]=l,r[11]=0,r[12]=-(i*h+s*p+o*e),r[13]=-(u*h+a*p+f*e),r[14]=-(t*h+n*p+l*e),r[15]=1,r)},mat4.fromRotationTranslation=function(e,t,n){n||(n=mat4.create());var r=e[0],i=e[1],s=e[2],o=e[3],u=r+r,a=i+i,f=s+s,e=r*u,l=r*a,r=r*f,c=i*a,i=i*f,s=s*f,u=o*u,a=o*a,o=o*f;return n[0]=1-(c+s),n[1]=l+o,n[2]=r-a,n[3]=0,n[4]=l-o,n[5]=1-(e+s),n[6]=i+u,n[7]=0,n[8]=r+a,n[9]=i-u,n[10]=1-(e+c),n[11]=0,n[12]=t[0],n[13]=t[1],n[14]=t[2],n[15]=1,n},mat4.str=function(e){return"["+e[0]+", "+e[1]+", "+e[2]+", "+e[3]+", "+e[4]+", "+e[5]+", "+e[6]+", "+e[7]+", "+e[8]+", "+e[9]+", "+e[10]+", "+e[11]+", "+e[12]+", "+e[13]+", "+e[14]+", "+e[15]+"]"},quat4.create=function(e){var t=new MatrixArray(4);return e&&(t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3]),t},quat4.set=function(e,t){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t},quat4.calculateW=function(e,t){var n=e[0],r=e[1],i=e[2];return!t||e===t?(e[3]=-Math.sqrt(Math.abs(1-n*n-r*r-i*i)),e):(t[0]=n,t[1]=r,t[2]=i,t[3]=-Math.sqrt(Math.abs(1-n*n-r*r-i*i)),t)},quat4.dot=function(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]+e[3]*t[3]},quat4.inverse=function(e,t){var n=e[0],r=e[1],i=e[2],s=e[3],n=(n=n*n+r*r+i*i+s*s)?1/n:0;return!t||e===t?(e[0]*=-n,e[1]*=-n,e[2]*=-n,e[3]*=n,e):(t[0]=-e[0]*n,t[1]=-e[1]*n,t[2]=-e[2]*n,t[3]=e[3]*n,t)},quat4.conjugate=function(e,t){return!t||e===t?(e[0]*=-1,e[1]*=-1,e[2]*=-1,e):(t[0]=-e[0],t[1]=-e[1],t[2]=-e[2],t[3]=e[3],t)},quat4.length=function(e){var t=e[0],n=e[1],r=e[2],e=e[3];return Math.sqrt(t*t+n*n+r*r+e*e)},quat4.normalize=function(e,t){t||(t=e);var n=e[0],r=e[1],i=e[2],s=e[3],o=Math.sqrt(n*n+r*r+i*i+s*s);return 0===o?(t[0]=0,t[1]=0,t[2]=0,t[3]=0,t):(o=1/o,t[0]=n*o,t[1]=r*o,t[2]=i*o,t[3]=s*o,t)},quat4.multiply=function(e,t,n){n||(n=e);var r=e[0],i=e[1],s=e[2],e=e[3],o=t[0],u=t[1],a=t[2],t=t[3];return n[0]=r*t+e*o+i*a-s*u,n[1]=i*t+e*u+s*o-r*a,n[2]=s*t+e*a+r*u-i*o,n[3]=e*t-r*o-i*u-s*a,n},quat4.multiplyVec3=function(e,t,n){n||(n=t);var r=t[0],i=t[1],s=t[2],t=e[0],o=e[1],u=e[2],e=e[3],a=e*r+o*s-u*i,f=e*i+u*r-t*s,l=e*s+t*i-o*r,r=-t*r-o*i-u*s;return n[0]=a*e+r*-t+f*-u-l*-o,n[1]=f*e+r*-o+l*-t-a*-u,n[2]=l*e+r*-u+a*-o-f*-t,n},quat4.toMat3=function(e,t){t||(t=mat3.create());var n=e[0],r=e[1],i=e[2],s=e[3],o=n+n,u=r+r,a=i+i,f=n*o,l=n*u,n=n*a,c=r*u,r=r*a,i=i*a,o=s*o,u=s*u,s=s*a;return t[0]=1-(c+i),t[1]=l+s,t[2]=n-u,t[3]=l-s,t[4]=1-(f+i),t[5]=r+o,t[6]=n+u,t[7]=r-o,t[8]=1-(f+c),t},quat4.toMat4=function(e,t){t||(t=mat4.create());var n=e[0],r=e[1],i=e[2],s=e[3],o=n+n,u=r+r,a=i+i,f=n*o,l=n*u,n=n*a,c=r*u,r=r*a,i=i*a,o=s*o,u=s*u,s=s*a;return t[0]=1-(c+i),t[1]=l+s,t[2]=n-u,t[3]=0,t[4]=l-s,t[5]=1-(f+i),t[6]=r+o,t[7]=0,t[8]=n+u,t[9]=r-o,t[10]=1-(f+c),t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t},quat4.slerp=function(e,t,n,r){r||(r=e);var i=e[0]*t[0]+e[1]*t[1]+e[2]*t[2]+e[3]*t[3],s,o;return 1<=Math.abs(i)?(r!==e&&(r[0]=e[0],r[1]=e[1],r[2]=e[2],r[3]=e[3]),r):(s=Math.acos(i),o=Math.sqrt(1-i*i),.001>Math.abs(o)?(r[0]=.5*e[0]+.5*t[0],r[1]=.5*e[1]+.5*t[1],r[2]=.5*e[2]+.5*t[2],r[3]=.5*e[3]+.5*t[3],r):(i=Math.sin((1-n)*s)/o,n=Math.sin(n*s)/o,r[0]=e[0]*i+t[0]*n,r[1]=e[1]*i+t[1]*n,r[2]=e[2]*i+t[2]*n,r[3]=e[3]*i+t[3]*n,r))},quat4.str=function(e){return"["+e[0]+", "+e[1]+", "+e[2]+", "+e[3]+"]"}}})