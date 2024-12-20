import FavoriteMovieIdb from '../../data/favorite-movie-idb';
import { createMovieItemTemplate } from '../templates/template-creator';
import FavoriteMovieView from '../pages/liked-movies/favorite-movie-search-view';
import FavoriteMovieShowPresenter from '../pages/liked-movies/favorite-movie-show-presenter';
import FavoriteMovieSearchPresenter from '../pages/liked-movies/favorite-movie-search-prasenter';

const view = new FavoriteMovieView();

const Like = {
    async render() {
        return view.getTemplate();
    },

    async afterRender() {
        new FavoriteMovieShowPresenter({ view, favoriteMovies: FavoriteMovieIdb });
        new FavoriteMovieSearchPresenter({ view, favoriteMovies: FavoriteMovieIdb })
    },
};

export default Like;