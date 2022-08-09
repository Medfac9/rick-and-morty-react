import {
  faMars, faVenus, faGenderless, faUser, faQuestion,
} from '@fortawesome/free-solid-svg-icons';
import { faRedditAlien } from '@fortawesome/free-brands-svg-icons';
import { URL } from './const';
import { FilterState } from './features/filters/interface';

export const getStatusBg = (status?: string) => {
  const other = 'secondary';
  const statusMap = {
    alive: 'success',
    dead: 'danger',
  };

  if (typeof status !== 'string') return other;
  return statusMap[status.toLowerCase()] || other;
};

export const getGenderIcon = (gender?: string) => {
  const other = faQuestion;
  const genderMap = {
    male: faMars,
    female: faVenus,
    genderless: faGenderless,
  };

  if (typeof gender !== 'string') return other;
  return genderMap[gender.toLowerCase()] || other;
};

export const getSpecieIcon = (specie?: string) => {
  const other = faQuestion;
  const specieMap = {
    human: faUser,
    alien: faRedditAlien,
  };

  if (typeof specie !== 'string') return other;
  return specieMap[specie.toLowerCase()] || other;
};

export const createUrl = (page?: number, term?: string, filters?: FilterState) => {
  let url = URL;

  // Para iniciar los parametros, si no se mete el primer query cambiara a ?
  let symbol = '?';

  // Si viene una pagina
  if (page) {
    url += `${symbol}page=${page}`;
    symbol = '&';
  }

  // Si viene un nombre
  if (term) {
    url += `${symbol}name=${term}`;
    symbol = '&';
  }

  // Filtro por los filtros que me vengan
  if (filters) {
    let urlFilters = '';

    // Si viene algo distinto a all filtro por el
    if (filters.status) {
      urlFilters += `${symbol}status=${filters.status}`;
      symbol = '&';
    }

    if (filters.specie) {
      urlFilters += `${symbol}species=${filters.specie}`;
      symbol = '&';
    }

    if (filters.gender) {
      urlFilters += `${symbol}gender=${filters.gender}`;
    }

    url += urlFilters;
  }

  return url;
};
