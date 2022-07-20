import { CharacterState } from '../features/allCharacters/interface';
import { FilterState } from '../features/filters/interface';

export interface StoreState {
    allCharacters: CharacterState,
    filters: FilterState,
    page: number,
    search: string,
}
