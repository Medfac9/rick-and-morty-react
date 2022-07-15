import { faMars, faVenus, faGenderless, faUser, faQuestion } from '@fortawesome/free-solid-svg-icons';
import { faRedditAlien } from '@fortawesome/free-brands-svg-icons';

export const getStatusBg = (status) => {
    const _default = 'secondary';
    const statusMap = {
        alive: 'success',
        dead: 'danger'
    }

    if (typeof status !== 'string') return _default;
    return statusMap[status.toLowerCase()] || _default;
}

export const getGenderIcon = (gender) => {
    const _default = faQuestion;
    const genderMap = {
        male: faMars,
        female: faVenus,
        genderless: faGenderless
    }

    if (typeof gender !== 'string') return _default;
    return genderMap[gender.toLowerCase()] || _default;
}

export const getSpecieIcon = (specie) => {
    const _default = faQuestion;
    const specieMap = {
        human: faUser,
        alien: faRedditAlien
    }

    if (typeof specie !== 'string') return _default;
    return specieMap[specie.toLowerCase()] || _default;
}