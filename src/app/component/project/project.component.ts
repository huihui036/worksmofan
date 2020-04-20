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
  public conts = 0;
  public le = 0;
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
