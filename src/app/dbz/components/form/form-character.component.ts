import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'form-character',
  templateUrl: 'form-character.component.html',
})
export class FormCharacterComponent {
  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    name: '',
    power: 0,
  };

  emitCharacter(): void {
    // debugger;
    console.log(this.character);

    if (this.character.name.length == 0) return;

    this.onNewCharacter.emit({ ...this.character });

    this.character = {
      name: '',
      power: 0,
    };
  }
}
