// (x)(n)
//laguerre = x=>g=k=>k<1||((x-k---k)*g(k)+k*g(k-1))/~k
laguerre = x=>(i=0,g=n=>n?1-x*n/++i/i*g(n-1):1)


doSequence = () => {
  for( let i = 0; i < 30; i++ ){
    console.log(`i=${i}`)
    for( let x10 = 0; x10 < 100; x10++){
      let x = x10/100
      console.log(`x=${x} ${laguerre(x)(i)>0?'x':'o'}`)
    }
  }
}
console.log(laguerre(1)(2))
console.log(laguerre(2)(1))
console.log(laguerre(1.416)(3))
console.log(laguerre(8.6)(4))
console.log(laguerre(-2.1)(6))

doSequence()

