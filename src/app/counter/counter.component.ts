import { Component } from "@angular/core";

@Component({
  selector:'app-counter',
  templateUrl:'./counter.component.html'
})
export class CounterComponent {
  public title: string = 'componente counter'
  public counter: number = 10;

  increateBy(value: number): void{
    this.counter+=value;
  }
  resetCounter():void{
    this.counter= 10
  }
}
