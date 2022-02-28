import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
  public title:string=''
  public desc:string=''
  public list:any[]=[]
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit():void{
    console.log('12')
    this.list=[...this.list,{title:this.title,desc:this.desc}]
    console.log(this.list)
    this.title=''
    this.desc=''
  }
}
