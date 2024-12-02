class car {
   
      

   constructor(bmw,benz,audi){

    this.firstcar = bmw
    this.secondcar = audi
   this.thirdcar = benz

   }

  check(){

  this.name = "manoj"
  console.log(this.name)

  }
   normMethod(yamaha,pulsar,honda){
   
   this.fBike = pulsar;
   this.Sbike = yamaha;
   this.Tbike = honda;

   console.log(this.fBike)
   console.log(this.Sbike)
   console.log(this.Tbike)

   }

}
 
const cons = new car("m3","220d","R8")
console.log(cons.firstcar)
console.log(cons.secondcar)
console.log(cons.thirdcar)
cons.check()
cons.normMethod("r15","ns200","CBR")