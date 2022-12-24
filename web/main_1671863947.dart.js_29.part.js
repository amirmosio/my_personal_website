self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var B={
bBx(d){var x,w,v
switch(d.w.a){case 1:x=d.c
w=x!=null?new A.hr(x.gog(x)):C.hw
break
case 0:x=d.d
w=d.c
if(x!=null){v=w==null?null:w.gog(w)
w=new A.dN(x,v==null?C.J:v)}else if(w==null)w=D.tr
break
default:throw A.d(A.B("`null` encountered as case in a switch expression with a non-nullable enum type."))}return new B.of(d.a,d.f,d.b,d.e,w)},
aVm(d,e,f){var x,w,v,u,t,s=null,r=d==null
if(r&&e==null)return s
if(!r&&e!=null){if(f===0)return d
if(f===1)return e}x=r?s:d.a
w=e==null
x=A.al(x,w?s:e.a,f)
v=r?s:d.b
v=A.bzL(v,w?s:e.b,f)
u=f<0.5?d.c:e.c
t=r?s:d.d
t=A.bt2(t,w?s:e.d,f)
r=r?s:d.e
r=A.jx(r,w?s:e.e,f)
r.toString
return new B.of(x,v,u,t,r)},
of:function of(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
akq:function akq(d,e){var _=this
_.b=d
_.d=_.c=null
_.e=$
_.w=_.r=_.f=null
_.y=_.x=$
_.z=null
_.a=e},
bl5:function bl5(){},
bl6:function bl6(d,e,f){this.a=d
this.b=e
this.c=f}},A,J,C,D
B=a.updateHolder(c[122],B)
A=c[0]
J=c[1]
C=c[2]
D=c[177]
B.of.prototype={
gea(d){return this.e.ghO()},
gGV(){return this.d!=null},
eK(d,e){if(d instanceof A.cF)return B.aVm(B.bBx(d),this,e)
else if(d==null||d instanceof B.of)return B.aVm(y.b.a(d),this,e)
return this.K9(d,e)},
eL(d,e){if(d instanceof A.cF)return B.aVm(this,B.bBx(d),e)
else if(d==null||d instanceof B.of)return B.aVm(this,y.b.a(d),e)
return this.Ka(d,e)},
p(d,e){var x=this
if(e==null)return!1
if(x===e)return!0
if(J.aD(e)!==A.ag(x))return!1
return e instanceof B.of&&J.l(e.a,x.a)&&J.l(e.c,x.c)&&A.fb(e.d,x.d)&&J.l(e.e,x.e)},
gC(d){var x=this,w=x.d
w=w==null?null:A.iQ(w)
return A.aN(x.a,x.b,x.c,x.e,w,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)},
QP(d,e,f){return this.e.eR(new A.Z(0,0,0+d.a,0+d.b),f).E(0,e)},
rH(d){return new B.akq(this,d)}}
B.akq.prototype={
axt(d,e){var x,w,v=this
if(d.p(0,v.c)&&e==v.d)return
if(v.r==null)x=v.b.a!=null||!1
else x=!1
if(x){x=$.bB()?A.c6():new A.bW(new A.bZ())
v.r=x
w=v.b.a
if(w!=null)x.saK(0,w)}x=v.b
w=x.d
if(w!=null){if(v.w==null){v.w=w.length
v.y=A.ap(new A.ac(w,new B.bl5(),A.aj(w).i("ac<1,EL>")),!0,y.m)}v.x=A.ap(new A.ac(w,new B.bl6(v,d,e),A.aj(w).i("ac<1,EN>")),!0,y.c)}if(v.r!=null||v.w!=null)v.e=x.e.eR(d,e)
if(x.c!=null)v.f=x.e.ki(d,e)
v.c=d
v.d=e},
az3(d){var x,w,v,u=this
if(u.w!=null){x=0
while(!0){w=u.w
w.toString
if(!(x<w))break
w=u.x
w===$&&A.b()
w=w[x]
v=u.y
v===$&&A.b()
d.d4(w,v[x]);++x}}},
aww(d,e){var x,w=this,v=w.b.c
if(v==null)return
x=w.z
if(x==null){x=w.a
x.toString
x=w.z=v.aEM(x)
v=x}else v=x
x=w.c
x.toString
v.a80(d,x,w.f,e)},
m(){var x=this.z
if(x!=null)x.m()
this.Vm()},
iO(d,e,f){var x=this,w=f.e,v=e.a,u=e.b,t=new A.Z(v,u,v+w.a,u+w.b),s=f.d
x.axt(t,s)
x.az3(d)
w=x.r
if(w!=null){v=x.e
v===$&&A.b()
d.d4(v,w)}x.aww(d,f)
x.b.e.fX(d,t,s)}}
var z=a.updateTypes([])
B.bl5.prototype={
$1(d){return d.ix()},
$S:1134}
B.bl6.prototype={
$1(d){return this.a.b.e.eR(this.b.dw(d.b).cL(d.d),this.c)},
$S:1135};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.of,A.jh)
x(B.akq,A.nj)
w(A.b5,[B.bl5,B.bl6])})()
A.aP(b.typeUniverse,JSON.parse('{"of":{"jh":[]},"akq":{"nj":[]}}'))
var y={m:A.u("EL"),c:A.u("EN"),b:A.u("of?")};(function constants(){D.tr=new A.fB(C.J,C.J,C.J,C.J)})()}
$__dart_deferred_initializers__["1Jwyhqw1gLlD23d1ccRb/QpbRXU="] = $__dart_deferred_initializers__.current
