import { InfoInterface } from '../page/interface';

export interface Origin {
    id: number
    character_id: number
    name: string
    image: string
}

export interface Location {
    id: number
    character_id: number
    name: string
    image: string
}

export interface CharacterInterface {
    id: number
    name: string
    status: 'alive' | 'dead' | 'unknown'
    species: string
    type?: string
    gender: 'male' | 'female' | 'genderless' | 'unknown'
    origin: Origin
    location: Location
    image?: string
    episode: []
    url: string
    created: Date | null
}

export interface CharacterResult {
    character: CharacterInterface
}

export interface CharacterState {
    characters: CharacterResult[]
    info: InfoInterface[]
    hasError: boolean
    isLoading: boolean
}
