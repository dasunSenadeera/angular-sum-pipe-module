import { Component } from "@angular/core";
import { SumPipe } from './pipe/sum.pipe';

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular";

  studentArray = [
    { id: 1, fees: 5000 },
    { id: 2, fees: 2000 },
    { id: 3, fees: 2000 },
    { id: 4, fees: 100}
  ];

  constructor() {}
}
