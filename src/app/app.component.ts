import { Component, ElementRef, ViewChild } from "@angular/core";
import { Toppy, RelativePosition, OutsidePlacement } from "toppy";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  @ViewChild("el", { read: ElementRef, static: true })
  el: ElementRef;
  overlay: any;
  overlayControl: boolean;
  testList: Array<String> = new Array<String>();
  constructor(private _toppy: Toppy) {}

  ngOnInit() {
    this.fillArray();
    this.overlayControl = false;
    const position = new RelativePosition({
      placement: OutsidePlacement.BOTTOM_RIGHT,
      src: this.el.nativeElement
    });
    this.overlay = this._toppy
      .position(position)
      .content(`<div>any HTML content</div>`, { hasHTML: true }) // html
      .create();
  }

  open() {
    this.overlayControl = true;
    this.overlay.open();
    console.log("opened");
  }

  close() {
    this.overlayControl = false;
    this.overlay.close();
    console.log("closed");
  }

  control() {
    if (this.overlayControl == false) {
      this.open();
    } else {
      this.close();
    }
  }
  fillArray() {
    this.testList.push("button-1");
    this.testList.push("button-2");
    this.testList.push("button-3");
  }
}
