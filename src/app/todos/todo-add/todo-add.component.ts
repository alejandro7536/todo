import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { crear } from '../todo.actions';
import { AppState } from '../../app.reducer';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent implements OnInit {

  txtInput: FormControl;

  constructor(
    private store: Store<AppState>
  ) {
    this.txtInput = new FormControl('', [Validators.required]);
  }

  ngOnInit(): void {
  }

  agregar() {

    if (this.txtInput.invalid){
      return;
    }

    this.store.dispatch(crear({texto: this.txtInput.value}));
    this.txtInput.setValue('');

  }

}
