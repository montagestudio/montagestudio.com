montageDefine("572fd27","ui/composer/flow-translate-composer",{dependencies:["montage","ui/composer/translate-composer","core/event/event-manager","core/geometry/point","ui/dom"],factory:function(e,t,n){var r=e("montage").Montage,i=e("ui/composer/translate-composer").TranslateComposer,s=e("core/event/event-manager").defaultEventManager,o=e("core/geometry/point").Point,u=e("ui/dom").convertPointFromPageToNode,a=t.FlowTranslateComposer=r.create(i,{_scrollingMode:{value:"linear"},scrollingMode:{get:function(){return this._scrollingMode},set:function(e){switch(e){case"linear":case"drag":this._scrollingMode=e}}},_linearScrollingVector:{value:[-300,0]},linearScrollingVector:{get:function(){return this._linearScrollingVector},set:function(e){this._linearScrollingVector=e}},_startPageX:{value:null},_startPageY:{value:null},_pageX:{value:null},_pageY:{value:null},_pointerStartX:{value:null},_pointerStartY:{value:null},_contentOffsetX:{value:null},_contentOffsetY:{value:null},_start:{value:function(e,t){var n=window.getComputedStyle(this._element,null),r=this.convertCssPixelsPropertyStringToNumber(n.getPropertyValue("border-left-width")),i=this.convertCssPixelsPropertyStringToNumber(n.getPropertyValue("border-top-width")),s=this.convertCssPixelsPropertyStringToNumber(n.getPropertyValue("padding-left")),a=this.convertCssPixelsPropertyStringToNumber(n.getPropertyValue("padding-top")),f=u(this._element,o.create().init(e,t));this._pointerStartX=this._pointerX=f.x-r-s,this._pointerStartY=this._pointerY=f.y-i-a,this._contentOffsetX=this._startPageX-this._pointerStartX,this._contentOffsetY=this._startPageY-this._pointerStartY,this._computePointedElement(),this._startPageX=this._pageX=e,this._startPageY=this._pageY=t,this._startScroll=this._scroll,this._previousScrollDelta=0,this._scrollEnd=null,this.isAnimating=!1,window.Touch?(document.addEventListener("touchend",this,!0),document.addEventListener("touchmove",this,!0)):(document.addEventListener("mouseup",this,!0),document.addEventListener("mousemove",this,!0)),this._isFirstMove=!0}},_analyzeMovement:{value:function(e){var t=e.velocity,n,r,i;if(!t)return;n=t.speed,n>=this.startTranslateSpeed?this._stealPointer():(r=this.startPageX-e.pageX,i=this.startPageY-e.pageY,r*r+i*i>this.startTranslateRadius*this.startTranslateRadius&&this._stealPointer())}},_dispatchTranslateStart:{value:function(e,t){var n=document.createEvent("CustomEvent");n.initCustomEvent("translateStart",!0,!0,null),n.scroll=this._scroll,this.dispatchEvent(n)}},_dispatchTranslateEnd:{value:function(){var e=document.createEvent("CustomEvent");e.initCustomEvent("translateEnd",!0,!0,null),e.scroll=this._scroll,this.dispatchEvent(e)}},_dispatchTranslate:{value:function(){var e=document.createEvent("CustomEvent");e.initCustomEvent("translate",!0,!0,null),e.scroll=this._scroll,this.dispatchEvent(e)}},_move:{value:function(e,t){var n;this._isFirstMove&&(this._dispatchTranslateStart(),this._isFirstMove=!1),this._pageX=e,this._pageY=t,this._scrollingMode==="drag"?(this._pointerX=e-this._contentOffsetX,this._pointerY=t-this._contentOffsetY,this._updateDragScroll()):this._updateLinearScroll(),this._closerIndex!==null,this._shouldDispatchTranslate&&this._dispatchTranslate()}},_end:{value:function(e){this.startTime=Date.now(),this.endX=this.startX=this._pageX,this.endY=this.startY=this._pageY,this._hasMomentum&&(e.velocity.speed>40||this.translateStrideX||this.translateStrideY)?(this._axis!="vertical"?this.momentumX=e.velocity.x*this._pointerSpeedMultiplier*(this._invertXAxis?1:-1):this.momentumX=0,this._axis!="horizontal"?this.momentumY=e.velocity.y*this._pointerSpeedMultiplier*(this._invertYAxis?1:-1):this.momentumY=0,this.endX=this.startX+this.momentumX*this.__momentumDuration/2e3,this.endY=this.startY+this.momentumY*this.__momentumDuration/2e3,this.startStrideXTime=null,this.startStrideYTime=null,this.animateMomentum=!0):this.animateMomentum=!1,this.animateMomentum?this._animationInterval():this._isFirstMove||this._dispatchTranslateEnd(),this._releaseInterest()}},handleMousewheel:{value:function(){}},_scroll:{value:0},scroll:{get:function(){return this._scroll},set:function(e){this.minScroll!==null&&e<this.minScroll&&(e=this.minScroll),this.maxScroll!==null&&e>this.maxScroll&&(e=this.maxScroll),this._scroll=e}},minScroll:{value:null},maxScroll:{value:null},_flow:{value:null},flow:{get:function(){return this._flow},set:function(e){this._flow=e,this.component=e}},_updateScroll:{value:function(){this._scrollingMode==="linear"?this._updateLinearScroll():this._updateDragScroll()}},_updateLinearScroll:{value:function(){var e=500/this._flow._height,t=(this._pageX-this._startPageX)*this._linearScrollingVector[0]*e,n=(this._pageY-this._startPageY)*this._linearScrollingVector[1]*e,r=this._linearScrollingVector[0]*this._linearScrollingVector[0]+this._linearScrollingVector[1]*this._linearScrollingVector[1],i=(t+n)/r;this.scroll+=i-this._previousScrollDelta,this._previousScrollDelta=i}},_updateDragScroll:{value:function(){var e=(this._pointerX-this._pointerStartX)*this._lineVectorX,t=(this._pointerY-this._pointerStartY)*this._lineVectorY,n=this._lineVectorX*this._lineVectorX+this._lineVectorY*this._lineVectorY,r=(e+t)/n;this.scroll+=r-this._previousScrollDelta,this._previousScrollDelta=r;var i=this._flow,s=i._cameraPosition,o=i._splinePaths,u=o.length,a=this._closerIndex%u,f=this.flow._splinePaths[a],l=Math.floor(this._closerIndex/u)-this._scroll+this._flow._paths[a].headOffset,c,h,p,d,v,m,g,y,b=null,w=null,E=0,S,x,T=this._element.clientWidth*.5,N=this._element.clientHeight*.5,e=T-this._pointerX,t=N-this._pointerY,C=i.cameraTargetPoint[0]-s[0],k=i.cameraTargetPoint[1]-s[1],L=i.cameraTargetPoint[2]-s[2],A=-Math.atan2(C,L),O,M,_=this._pointerIntersectionPosition,D,P,H,B,j,F,I,q;O=L*Math.cos(A)-C*Math.sin(A),M=-Math.atan2(k,O),B=Math.sin(A),j=Math.cos(A),F=Math.sin(M),I=Math.cos(M),P=N/Math.tan(i.cameraFov*.008726646259972),q=0,g=1e100;do x=f._convertSplineTimeToBezierIndexTime(l+q),x!==null&&(c=f.getPositionAtIndexTime(x),rotation=o[a].getRotationAtIndexTime(x),D=this._rotateXYZ(_,rotation),h=(s[2]-c[2]-D[2])*B-(c[0]-s[0]+D[0])*j,p=c[1]-s[1]+D[1],d=(c[2]-s[2]+D[2])*j-(c[0]-s[0]+D[0])*B,v=d*F+p*I,m=d*I-p*F,H=P/m,h=e+h*H,p=t+v*H,S=h*h+p*p,S<g&&(g=S,b=q)),q-=.025;while(q>-6);b+.025>0&&(b=-0.025),q=b+.025,g=1e100;do x=f._convertSplineTimeToBezierIndexTime(l+q),x!==null&&(c=f.getPositionAtIndexTime(x),rotation=o[a].getRotationAtIndexTime(x),D=this._rotateXYZ(_,rotation),h=(s[2]-c[2]-D[2])*B-(c[0]-s[0]+D[0])*j,p=c[1]-s[1]+D[1],d=(c[2]-s[2]+D[2])*j-(c[0]-s[0]+D[0])*B,v=d*F+p*I,m=d*I-p*F,H=P/m,h=e+h*H,p=t+v*H,S=h*h+p*p,S<g&&(g=S,b=q)),q-=2e-4;while(q>b-.05);q=0,y=1e100;do x=f._convertSplineTimeToBezierIndexTime(l+q),x!==null&&(c=f.getPositionAtIndexTime(x),rotation=o[a].getRotationAtIndexTime(x),D=this._rotateXYZ(_,rotation),h=(s[2]-c[2]-D[2])*B-(c[0]-s[0]+D[0])*j,p=c[1]-s[1]+D[1],d=(c[2]-s[2]+D[2])*j-(c[0]-s[0]+D[0])*B,v=d*F+p*I,m=d*I-p*F,H=P/m,h=e+h*H,p=t+v*H,S=h*h+p*p,S<y&&(y=S,w=q)),q+=.025;while(q<6);w-.025<0&&(w=.025),q=w-.025,y=1e100;do x=f._convertSplineTimeToBezierIndexTime(l+q),x!==null&&(c=f.getPositionAtIndexTime(x),rotation=o[a].getRotationAtIndexTime(x),D=this._rotateXYZ(_,rotation),h=(s[2]-c[2]-D[2])*B-(c[0]-s[0]+D[0])*j,p=c[1]-s[1]+D[1],d=(c[2]-s[2]+D[2])*j-(c[0]-s[0]+D[0])*B,v=d*F+p*I,m=d*I-p*F,H=P/m,h=e+h*H,p=t+v*H,S=h*h+p*p,S<y&&(y=S,w=q)),q+=2e-4;while(q<w+.05);b?w?b*b<w*w?E=b:E=w:E=b:w&&(E=w),E>0?E<=.05&&(this.scroll=this._scroll-E):E>=-0.05&&(this.scroll=this._scroll-E)}},frame:{value:function(e){this.isAnimating&&this._animationInterval()}},convertCssPixelsPropertyStringToNumber:{value:function(e){return typeof e=="string"?e.substr(-2)==="px"?e.substr(0,e.length-2)*1:0:0}},_rayRectangleIntersection:{value:function(e,t,n,r){var i=e[1]*r[2]-e[2]*r[1],s=e[2]*r[0]-e[0]*r[2],o=e[0]*r[1]-e[1]*r[0],u=n[0]*i+n[1]*s+n[2]*o,a=1e-10,f,l,c=!1,h,p,d;return u<-a?(f=-t[0]*i-t[1]*s-t[2]*o,f<0&&f>u&&(h=n[1]*t[2]-n[2]*t[1],p=n[2]*t[0]-n[0]*t[2],d=n[0]*t[1]-n[1]*t[0],l=e[0]*h+e[1]*p+e[2]*d,l<0&&l>u&&(c=(r[0]*h+r[1]*p+r[2]*d)/u,c<0&&(c=!1)))):u>a&&(f=-t[0]*i-t[1]*s-t[2]*o,f>0&&f<u&&(h=n[1]*t[2]-n[2]*t[1],p=n[2]*t[0]-n[0]*t[2],d=n[0]*t[1]-n[1]*t[0],l=e[0]*h+e[1]*p+e[2]*d,l>0&&l<u&&(c=(r[0]*h+r[1]*p+r[2]*d)/u,c<0&&(c=!1)))),c}},_rayRectangleIntersectionPosition:{enumerable:!1,value:function(e,t,n,r){var i=e[1]*r[2]-e[2]*r[1],s=e[2]*r[0]-e[0]*r[2],o=e[0]*r[1]-e[1]*r[0],u=n[0]*i+n[1]*s+n[2]*o,a=this._flow._boundingBoxSize,f,l,c,h,p;return f=-t[0]*i-t[1]*s-t[2]*o,c=n[1]*t[2]-n[2]*t[1],h=n[2]*t[0]-n[0]*t[2],p=n[0]*t[1]-n[1]*t[0],l=e[0]*c+e[1]*h+e[2]*p,[f*a[0]/u-a[0]*.5,l*a[1]/u-a[1]*.5,0]}},_rotateXYZ:{enumerable:!1,value:function(e,t){var n=Math.cos(t[0]),r=Math.sin(t[0]),i=Math.cos(t[1]),s=Math.sin(t[1]),o=Math.cos(t[2]),u=Math.sin(t[2]),a,f,l,c;return f=n*e[1]-r*e[2],l=r*e[1]+n*e[2],c=i*e[0]+s*l,l=-s*e[0]+i*l,a=o*c-u*f,f=u*c+o*f,[a,f,l]}},_pointerIntersectionPosition:{enumerable:!1,value:null},_closerIndex:{enumerable:!1,value:null},_computePointedElement:{value:function(){var e=this._flow._splinePaths,t=e.length;if(t){var n=this._flow,r=n.cameraTargetPoint[0]-n.cameraPosition[0],i=n.cameraTargetPoint[2]-n.cameraPosition[2],s=Math.atan2(r,i),o=i*Math.cos(-s)-r*Math.sin(-s),u=Math.atan2(n.cameraTargetPoint[1]-n.cameraPosition[1],o),a=this._element.clientWidth*.5-this._pointerX,f=this._pointerY-this._element.clientHeight*.5,l=this._element.offsetHeight*.5/Math.tan(n.cameraFov*n._doublePI*(1/720)),c,h,p=[],d=n._repetition._indexMap,v=d.length,m,g,y,b=null,w=null,E=1e100,S,x,T,N,C,k,L,A,O;h=l*Math.cos(u)-f*Math.sin(u),f=l*Math.sin(u)+f*Math.cos(u),c=h*Math.cos(s)-a*Math.sin(s),a=h*Math.sin(s)+a*Math.cos(s),L=[a,f,c];for(O=0;O<e.length;O++)p[O]=e[O].transform([1,0,0,0,0,1,0,0,0,0,1,0,-n.cameraPosition[0],-n.cameraPosition[1],-n.cameraPosition[2],1]);for(O=0;O<v;O++)A=this._flow.offset(d[O]),m=A.pathIndex,y=A.slideTime,x=p[m]._convertSplineTimeToBezierIndexTime(y),x!==null&&(pos=p[m].getPositionAtIndexTime(x),T=e[m].getRotationAtIndexTime(x),C=this._rotateXYZ([n.boundingBoxSize[0],0,0],T),k=this._rotateXYZ([0,n.boundingBoxSize[1],0],T),N=[pos[0]-(C[0]+k[0])*.5,pos[1]-(C[1]+k[1])*.5,pos[2]-(C[2]+k[2])*.5],(S=this._rayRectangleIntersection(L,N,C,k))&&S<E&&(E=S,b=d[O],this._pointerIntersectionPosition=this._rayRectangleIntersectionPosition(L,N,C,k)));this._closerIndex=b,b!==null}}},test:{enumerable:!1,value:function(){var e=this._flow,t=this._bezierValue,n=e.cameraTargetPoint[0]-e.cameraPosition[0],r=e.cameraTargetPoint[1]-e.cameraPosition[1],i=e.cameraTargetPoint[2]-e.cameraPosition[2],s=Math.atan2(n,i),o,u,a,f,l,c,h,p,d,v,m=this._pointerX,g=this._pointerY;o=i*Math.cos(-s)-n*Math.sin(-s),u=Math.atan2(r,o),f=this._element.clientWidth*.5-m,l=g-this._element.clientHeight*.5,v=c=this._element.offsetHeight*.5/Math.tan(e.cameraFov*e._doublePI*(1/720)),d=c*Math.cos(u)-l*Math.sin(u),p=c*Math.sin(u)+l*Math.cos(u),h=f,c=d*Math.cos(s)-h*Math.sin(s),f=d*Math.sin(s)+h*Math.cos(s),l=p,this.t=a=this._raycastBezierTubes(e._cameraPosition[0],e._cameraPosition[1],e._cameraPosition[2],this._computeRotationValuesToXAxis(f,l,c));if(a[0]!==null){var y=[e._splinePaths[a[0]]._knots[a[1]][0]-e._cameraPosition[0],e._splinePaths[a[0]]._knots[a[1]][1]-e._cameraPosition[1],e._splinePaths[a[0]]._knots[a[1]][2]-e._cameraPosition[2],e._splinePaths[a[0]]._nextHandlers[a[1]][0]-e._cameraPosition[0],e._splinePaths[a[0]]._nextHandlers[a[1]][1]-e._cameraPosition[1],e._splinePaths[a[0]]._nextHandlers[a[1]][2]-e._cameraPosition[2],e._splinePaths[a[0]]._previousHandlers[a[1]+1][0]-e._cameraPosition[0],e._splinePaths[a[0]]._previousHandlers[a[1]+1][1]-e._cameraPosition[1],e._splinePaths[a[0]]._previousHandlers[a[1]+1][2]-e._cameraPosition[2],e._splinePaths[a[0]]._knots[a[1]+1][0]-e._cameraPosition[0],e._splinePaths[a[0]]._knots[a[1]+1][1]-e._cameraPosition[1],e._splinePaths[a[0]]._knots[a[1]+1][2]-e._cameraPosition[2]],b=[],f,l,c,h,p,d,w,E,S,x,T;for(T=0;T<12;T+=3)b[0]=y[T+2]*Math.sin(-s)+y[T]*Math.cos(-s),b[1]=y[T+1],b[2]=y[T+2]*Math.cos(-s)-y[T]*Math.sin(-s),y[T]=b[0],y[T+1]=b[2]*Math.sin(-u)+b[1]*Math.cos(-u),y[T+2]=b[2]*Math.cos(-u)-b[1]*Math.sin(-u);c=t(y[2],y[5],y[8],y[11],a[2]),d=t(y[2],y[5],y[8],y[11],a[2]+1e-8),f=t(y[0],y[3],y[6],y[9],a[2])/c,h=t(y[0],y[3],y[6],y[9],a[2]+1e-8)/d,w=(h-f)*v/1e-8,l=t(y[1],y[4],y[7],y[10],a[2])/c,p=t(y[1],y[4],y[7],y[10],a[2]+1e-8)/d,dy=(p-l)*v/1e-8,E=Math.sqrt(w*w+dy*dy),S=Math.atan2(dy,w),x=e._splinePaths[a[0]]._densities[a[1]]*(1-a[2])+e._splinePaths[a[0]]._densities[a[1]+1]*a[2],this._lineVectorX=Math.cos(-S)*E/x,this._lineVectorY=Math.sin(-S)*E/x}}},_lineVectorX:{enumerable:!1,value:Math.cos(Math.PI-.6)*80},_lineVectorY:{enumerable:!1,value:Math.sin(Math.PI-.6)*80},_startX:{enumerable:!1,value:0},_startY:{enumerable:!1,value:0},_currentX:{enumerable:!1,value:0},_currentY:{enumerable:!1,value:0},_previousScrollDelta:{enumerable:!1,value:0},_startScroll:{enumerable:!1,value:0},_bezierValue:{enumerable:!1,value:function(e,t,n,r,i){var s=1-i;return e*s*s*s+t*3*s*s*i+n*3*s*i*i+r*i*i*i}},_computeRotationValuesToXAxis:{enumerable:!1,value:function(e,t,n){var r,i,s,o,u;return e*e<1e-100&&(e=1e-50),r=e*e+t*t,i=Math.sqrt(r),s=1/i,u=e*s,o=-t*s,s=1/Math.sqrt(r+n*n),[o,u,-n*s,i*s]}},_infinite:{enumerable:!1,value:1e100},_sphereIntersection:{enumerable:!1,value:function(e,t){var n=e[0]*t[1]-e[1]*t[0],r=e[0]*t[0]+e[1]*t[1],i=n*t[2]+e[2]*t[3],s=e[3]*e[3],o,u,a;return r*r+i*i<=s?(o=n*t[3]-e[2]*t[2],u=Math.sqrt(s-r*r-i*i),a=o-u,a<0?o+u<0?this._infinite:0:a):this._infinite}},_bezierTubeBoundingSphere:{enumerable:!1,value:function(e,t){var n=e[0],r=e[1],i=e[2],s=e[0],o=e[1],u=e[2],a,f,l,c,h;return h=e[3],h<n?n=h:h>s&&(s=h),h=e[4],h<r?r=h:h>o&&(o=h),h=e[5],h<i?i=h:h>u&&(u=h),h=e[6],h<n?n=h:h>s&&(s=h),h=e[7],h<r?r=h:h>o&&(o=h),h=e[8],h<i?i=h:h>u&&(u=h),h=e[9],h<n?n=h:h>s&&(s=h),h=e[10],h<r?r=h:h>o&&(o=h),h=e[11],h<i?i=h:h>u&&(u=h),a=(s-n)*.5,f=(o-r)*.5,l=(u-i)*.5,c=Math.sqrt(a*a+f*f+l*l)+t,[n+a,r+f,i+l,c]}},_raycastBezierTubes:{enumerable:!1,value:function(e,t,n,r){var i,s,o=[],u=this._infinite,a=null,f=0,l=null,c,h,p,d,v,m,g,y,b,w,E,S,x,T,N,C,k,L,A,O,M,_,D,P,H,B,j,F=0,I=this._flow._splinePaths;for(j=0;j<I.length;j++)for(B=0;B<I[j]._knots.length-1;B++)o[F]=[I[j]._knots[B][0]-e,I[j]._knots[B][1]-t,I[j]._knots[B][2]-n,I[j]._nextHandlers[B][0]-e,I[j]._nextHandlers[B][1]-t,I[j]._nextHandlers[B][2]-n,I[j]._previousHandlers[B+1][0]-e,I[j]._previousHandlers[B+1][1]-t,I[j]._previousHandlers[B+1][2]-n,I[j]._knots[B+1][0]-e,I[j]._knots[B+1][1]-t,I[j]._knots[B+1][2]-n,0,1048576,B,j],F++;B=F-1;while(B>=0)v=o[B],g=(v[0]+v[3])*.5,y=(v[3]+v[6])*.5,b=(v[6]+v[9])*.5,x=(v[1]+v[4])*.5,T=(v[4]+v[7])*.5,N=(v[7]+v[10])*.5,A=(v[2]+v[5])*.5,O=(v[5]+v[8])*.5,M=(v[8]+v[11])*.5,w=(g+y)*.5,E=(y+b)*.5,S=(w+E)*.5,C=(x+T)*.5,k=(T+N)*.5,L=(C+k)*.5,_=(A+O)*.5,D=(O+M)*.5,P=(_+D)*.5,H=v[13]>>1,c=[v[0],v[1],v[2],g,x,A,w,C,_,S,L,P,v[12],H,v[14],v[15]],i=this._bezierTubeBoundingSphere(c,this._flow._elementsBoundingSphereRadius),h=[S,L,P,E,k,D,b,N,M,v[9],v[10],v[11],v[12]+H,H,v[14],v[15]],s=this._bezierTubeBoundingSphere(h,this._flow._elementsBoundingSphereRadius),p=this._sphereIntersection(i,r),d=this._sphereIntersection(s,r),p<u?d<u?p<d?H?(o[B++]=h,o[B]=c):(u=p-1e-5,f=v[12],a=v[14],l=v[15],B--):H?(o[B++]=c,o[B]=h):(u=d-1e-5,f=v[12],a=v[14],l=v[15],B--):H?o[B]=c:(u=p-1e-5,f=v[12],a=v[14],l=v[15],B--):d<u?H?o[B]=h:(u=d-1e-5,f=v[12],a=v[14],l=v[15],B--):B--;return[l,a,f*(1/1048576)]}},_translateStride:{enumerable:!1,value:null},translateStride:{serializable:!0,get:function(){return this._translateStride},set:function(e){this._translateStride=e,this.translateStrideX=e}},startStrideTime:{enumerable:!1,value:null},_scrollEnd:{enumerable:!1,value:null},_scrollStart:{enumerable:!1,value:null},_hasMomentum:{enumerable:!1,value:!0},_animationInterval:{enumerable:!1,value:function(){var e=Date.now(),t,n,r,i,s,o=!1,u,a,f;a=this.minScroll,f=this.maxScroll,this.minScroll=null,this.maxScroll=null,this._scrollEnd===null&&(this._scrollStart=this.scroll,this._pageX=this.endX,this._pageY=this.endY,this._updateScroll(),this._scrollEnd=this.scroll,this._pageX=this.startX,this._pageY=this.startY,this._updateScroll()),this.animateMomentum?(t=e-this.startTime,t<this.__momentumDuration?(this._pageX=this.startX+(this.momentumX+this.momentumX*(this.__momentumDuration-t)/this.__momentumDuration)*t/1e3/2,this._pageY=this.startY+(this.momentumY+this.momentumY*(this.__momentumDuration-t)/this.__momentumDuration)*t/1e3/2,this._updateScroll(),this.translateStrideX&&this.startStrideXTime===null&&(this.__momentumDuration-t<this.translateStrideDuration||Math.abs(this.scroll-this._scrollEnd)<this.translateStrideX*.75)&&(this.startStrideXTime=e,this._strideStartScroll=this._scroll)):this.animateMomentum=!1):this.startStrideXTime===null&&(this.startStrideXTime=this.startTime,this._strideStartScroll=this._scrollStart),u=this.scroll,this.startStrideXTime&&e-this.startStrideXTime>0&&(r=Math.round(this._scrollEnd/this.translateStrideX),e-this.startStrideXTime<this.translateStrideDuration?(t=this._bezierTValue((e-this.startStrideXTime)/this.translateStrideDuration,.275,0,.275,1),n=(e-this.startStrideXTime)/this.translateStrideDuration,u=u*(1-n)+(r*this.translateStrideX*t+this._strideStartScroll*(1-t))*n,o=!0):u=r*this.translateStrideX),this.minScroll=a,this.maxScroll=f,u<a&&(u=a,this.animateMomentum=!1,o=!1),u>f&&(u=f,this.animateMomentum=!1,o=!1),this.scroll=u,this.isAnimating=this.animateMomentum||o,this.isAnimating?this.needsFrame=!0:(this._dispatchTranslateEnd(),this._scrollEnd=null)}}})}})