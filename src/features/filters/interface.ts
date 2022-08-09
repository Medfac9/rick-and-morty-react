export interface FilterState {
    status: string | null,
    specie: string | null,
    gender: string | null,
}

export interface FiltersInterface {
    filters: FilterState
}
