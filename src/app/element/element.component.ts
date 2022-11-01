import { Component, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'element',
  templateUrl: 'element.component.html',
  styleUrls: ['./../app.component.css'],
})
export class Element {
  @Input() artist: any;
  @Output() elementEvent: any = new EventEmitter<any>();
  content: any;
  private _property: String = '';

  get property() {
    return this._property;
  }
  set property(value: String) {
    this._property = value;
    this.search({
      event: 'search',
      id: this.content.id,
      search: this._property,
    });
  }
  ngOnInit() {
    this.content = { ...this.artist };
    //this.content = Object.assign({}, this.artist);//Otro modo de clonar objetos
  }
  emitEvent(value: any) {
    this.elementEvent.emit(value);
  }
  search(value: any) {
    this.emitEvent(value);
    this.content.songs = this.artist.songs.filter((x) => {
      if (x.name.search(new RegExp(value.search, 'i')) != -1) {
        return x;
      }
    });
  }
}
