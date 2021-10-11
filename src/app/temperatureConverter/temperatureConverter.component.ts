import { Component, ElementRef, Input, OnInit, ViewChild } from "@angular/core";
import { AbstractControl, FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: "temperature-converter",
  templateUrl: "./temperatureConverter.component.html",
  styleUrls: ["./temperatureConverter.component.scss"],
})
export class TemperatureConverter implements OnInit {
  @ViewChild("cel") cels: ElementRef;
  @ViewChild("fah") fahr: ElementRef;
  tempForm = new FormGroup({
    celsius: new FormControl(""),
    fahrenheit: new FormControl(""),
  });

  ngOnInit() {
    // C = (F − 32) × 5/9
    // F = C*9/5 + 32
  }

  convertCelsius(value) {
    if (value)
      return (this.fahr.nativeElement.value =
        Math.round(((value * 9) / 5 + 32) * 10) / 10);
    else {
      value = 0;
      return (this.fahr.nativeElement.value =
        Math.round(((value * 9) / 5 + 32) * 10) / 10);
    }
  }

  convertFahrenheit(value) {
    if (value)
      return (this.cels.nativeElement.value =
        Math.round((((value - 32) * 5) / 9) * 10) / 10);
    else {
      value = 0;
      return (this.cels.nativeElement.value =
        Math.round((((value - 32) * 5) / 9) * 10) / 10);
    }
  }
}
