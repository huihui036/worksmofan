import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.less']
})
export class ServerComponent implements OnInit {
  public listicon =[
    'icon-shouji2','icon-xinhao','icon-qukuailianshujufuwu','icon-shouji','icon-ai221',
   ' icon-dizhi','icon-shouji2','icon-xinhao','icon-xinhao','icon-xinhao','icon-xinhao','icon-xinhao'
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
