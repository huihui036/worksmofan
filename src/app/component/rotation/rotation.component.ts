import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery'
@Component({
  selector: 'app-rotation',
  templateUrl: './rotation.component.html',
  styleUrls: ['./rotation.component.less']
})
export class RotationComponent implements OnInit {
  public animate:number=-410
  public conts = 0;
  public le = 0;
  constructor() { }

  ngOnInit(): void {
  }
  nextchang(){
    if(this.conts ==0){
      $('.leftcontrs ul').css({
        transform: 'translate(-820px)'
      }) 
      this.conts =2
    }else{
      this.conts--
      this.le = this.conts*this.animate
      $('.leftcontrs ul').css({
        transform:` translate(${this.le}px)`
      }) 
    }
    if( this.conts<=-2){
      this.conts=0
     
      $('.leftcontrs ul').css({
        transform: 'translate(0px)'
      })
    }
  
    console.log(this.conts)



  }

 

  
  printchang(){
    if(this.conts ==2){
      $('.leftcontrs ul').css({
        transform: 'translate(0px)'
      })
      this.conts =0
    }else{
      this.conts--
      this.le =-(this.conts*this.animate)
      $('.leftcontrs ul').css({
        transform:` translate(${this.le}px)`
      }) 
    }
  if( this.conts<-2){
    this.conts=0
    $('.leftcontrs ul').css({
      transform: 'translate(0px)'
    })
    
  }
    console.log(this.conts)


  }

}
