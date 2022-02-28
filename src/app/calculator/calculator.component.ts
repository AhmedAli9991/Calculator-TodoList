import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  public result:string=''
  constructor() {   
  }
  
  ngOnInit(): void {
  }
  C():void{
    const len:number=this.result.length-1;
    this.result=this.result.slice(0,len)
  }
  Equal():void{
    if(this.result[0]==='+'||this.result[0]==='-'||this.result[0]==='/'||this.result[0]==='*'||this.result[0]==='e'){
    this.result="error";
    }
    else if(this.result[this.result.length-1]==='+'||this.result[this.result.length-1]==='-'||this.result[this.result.length-1]==='/'||this.result[this.result.length-1]==='*'||this.result[this.result.length-1]==='r'){
      this.result="error";
    }
    else{
     this.result=eval(this.result)
    }
  }
}
