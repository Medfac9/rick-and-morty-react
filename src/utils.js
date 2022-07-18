import { faMars, faVenus, faGenderless, faUser, faQuestion } from '@fortawesome/free-solid-svg-icons';
import { faRedditAlien } from '@fortawesome/free-brands-svg-icons';
import { URL } from './const';

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

export const createUrl = (page, term, filters) => {
    let url = URL;

    // Para iniciar los parametros, si no se mete el primer query cambiara a ?
    let symbol = '?';

    // Si viene una pagina
    if(page){
        url += symbol + 'page=' + page;
        symbol = '&';
    }

    // Si viene un nombre
    if(term){
        url += symbol + 'name=' + term;
        symbol = '&';
    }
    
    // Filtro por los filtros que me vengan
    if(filters){
        let url_filters = '';
        
        // Si viene algo distinto a all filtro por el
        if(filters.status){
            url_filters += symbol + 'status=' + filters.status;
            symbol = '&';
        }

        if(filters.specie){
            url_filters += symbol + 'species=' + filters.specie;
            symbol = '&';
        }

        if(filters.gender){
            url_filters += symbol + 'gender=' + filters.gender;
        }

        url += url_filters;
    }

    return url;
}