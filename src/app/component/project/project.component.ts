import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery'
@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.less']
})
export class ProjectComponent implements OnInit {

  constructor() { }
  public animate:number=-410

  ngOnInit(): void {
  }
  nextchang(){
  $('.leftcontrs ul').stop().animate({
    marginLeft: this.animate+'px'
  },1000)
  this.animate-=410
  if(this.animate<-420*2.2){
    this.animate =0
  }
  console.log(this.animate)
  }


  // printchang(){
  //   if(this.animate==0){
  //     console.log("0")
  //     $('.leftcontrs ul').stop().animate({
  //       // marginRight
  //       // console.log(Math.abs(this.animate)==410)
       
  //       marginLeft:0+'px'
  //     },1000)
    
  //   }
 
  //   if(this.animate==-410){
  //    console.log("1")
  //     $('.leftcontrs ul').stop().animate({
      
  //       marginLeft:-410+'px'
  //     },1000)
     
  //   }
  //   if(this.animate==-820){
  //     console.log("123")
  //     $('.leftcontrs ul').stop().animate({

  //       marginLeft:-820+'px'
  //     },1000)
    
  //   }
  //   this.animate-=410
  //   if(this.animate<-820){
  //     this.animate=0
  //     console.log("z:"+0)
  //   }
 
  //   console.log(this.animate)
  // }
  printchang(){
    
    $('.leftcontrs ul .names').stop().animate({
     left:410+'px'
          },1000)
          // if(this.animate==-410){
          //   $('.leftcontrs ul').stop().animate({
     
          //     marginLeft:this.animate*2+'px'
          //         },1000)
          // }
         
          this.animate-=410
          if(this.animate<-420*2.2){
            this.animate =0
          }


  }
 
  

  

}
