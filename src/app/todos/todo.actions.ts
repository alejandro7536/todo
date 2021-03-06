import { createAction, props } from '@ngrx/store';

export const crear = createAction('[TODO] Crear Todo', props<{texto: string}>());
export const togle = createAction('[TODO] Togle Todo', props<{id: number}>());
export const editar = createAction('[TODO] Editar Todo', props<{id: number, texto: string}>());
export const borrar = createAction('[TODO] Borrar Todo', props<{id: number}>());
export const togleAll = createAction('[TODO] TogleAll Todo', props<{completado: boolean}>());
export const borrarCompletados = createAction('[TODO] BorrarCompletados Todo');