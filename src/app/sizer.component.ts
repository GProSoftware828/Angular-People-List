import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'my-sizer',
  template: `
    <label [style.color]="textColor">FontSize: {{ size }}px</label>
    <button (click)="resize(+1)">+</button>
    <button (click)="resize(-1)">-</button>
  `
})
export class SizerComponent {
  @Input() size: number = 10;
  @Output() sizeChange = new EventEmitter<number>();

  resize(offset: number) {
    this.size += offset;
    if (this.size > 40) this.size = 40;
    if (this.size < 8) this.size = 8;
    this.sizeChange.emit(this.size);
  }

  textColor = 'blue';
}
