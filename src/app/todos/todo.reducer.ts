import { createReducer, on } from '@ngrx/store';
import { crear, togle, editar, borrar, togleAll, borrarCompletados } from './todo.actions';
import { Todo } from './models/todo.model';

export const estadoInicial: Todo[] = [
    new Todo('Clases de Udemy'),
    new Todo('Practicar guitarra'),
    new Todo('ver clase AI'),
];

const _todoReducer = createReducer(
    estadoInicial,
    on(crear, (state, { texto }) => [...state, new Todo(texto)]),
    on(borrarCompletados, (state) => state.filter(todo => !todo.completado)),
    on(togle, (state, { id }) => {
        return state.map(todo => {
            if (todo.id === id) {
                return {
                    ...todo,
                    completado: !todo.completado
                };
            } else { return todo; }
        });
    }),
    on(editar, (state, { id, texto }) => {
        return state.map(todo => {
            if (todo.id === id) {
                return {
                    ...todo,
                    texto
                };
            } else { return todo; }
        });
    }),
    on(borrar, (state, { id }) => state.filter(todo => todo.id !== id)),
    on(togleAll, (state, { completado }) => {
        return state.map(todo => {

            return { ...todo, completado };

        });
    }),
);

export function todoReducer(state, action) {
    return _todoReducer(state, action);
}