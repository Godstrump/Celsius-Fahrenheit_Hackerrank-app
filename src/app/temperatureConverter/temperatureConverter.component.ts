import { Component, ElementRef, Input, OnInit, ViewChild } from "@angular/core";

@Component({
  selector: "temperature-converter",
  templateUrl: "./temperatureConverter.component.html",
  styleUrls: ["./temperatureConverter.component.scss"],
})
export class TemperatureConverter implements OnInit {
  c: number;
  f: number;

  ngOnInit() {
    // C = (F − 32) × 5/9
    // F = C*9/5 + 32
  }

  convertCelsius(value: number) {
    if (!value) {
      this.f = undefined;
      return;
    }
    let fahrenheit = (value * 9) / 5 + 32;

    if (fahrenheit % 2 != 0) {
      this.f = parseFloat(fahrenheit.toFixed(1));
    } else {
      this.f = fahrenheit;
    }
  }

  convertFahrenheit(value: number) {
    if (!value) {
      this.c = undefined;
      return;
    }
    let celsius = ((value - 32) * 5) / 9;

    if (celsius % 2 != 0) {
      this.c = parseFloat(celsius.toFixed(1));
    } else {
      this.c = celsius;
    }
  }
}
