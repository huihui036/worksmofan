import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabnave',
  templateUrl: './tabnave.component.html',
  styleUrls: ['./tabnave.component.less']
})
export class TabnaveComponent implements OnInit {

  constructor( private router: Router) { }
  public listdata =[
    {
      "Selected": true,
      title:'首页',
      paht:'home'
    },
    {
      "Selected": true,
      title:'产品自选',
      paht:'project'
    },

  

    {
      "Selected": true,
      title:'关于我们',
      paht:'abouts'
    },
    {
      title:'帮助中心',
      paht:'seave'
    },
    {
      title:'联系我们',
      paht:'contact'
    },
  ]
  selectedname = ''
  ngOnInit(): void {
  }
  changepage(pages){
    this.selectedname = pages
    this.router.navigate([pages])
  }
 // this.router.navigate([pages])

}
