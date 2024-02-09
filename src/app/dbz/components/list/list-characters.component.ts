import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'list-characters',
  templateUrl: './list-characters.component.html',
})
export class ListCharactersComponent {
  @Output()
  public onDeleteCharacter: EventEmitter<string> = new EventEmitter();

  @Input()
  public characterList: Character[] = [
    {
      name: 'trunks',
      power: 10,
    },
  ];

  deleteCharacter(id?: string): void {
    if (!id) return;
    console.log({ id });
    this.onDeleteCharacter.emit(id);
  }
}
