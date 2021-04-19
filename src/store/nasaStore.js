import NASAService from '../services/nasaService'

const state = {
    photos: [],
};

const mutations = {
    setPhotos(state, photos){
        state.photos = [...photos];
    },
    addPhotos(state, photos){
        state.photos = [...state.photos, ...photos];
    },
};

const actions = {
    fetchPhotos({commit}, {paginate, ...payload}){
        return new Promise((resolve, reject) => {
            //call service to fetch data
            NASAService.fetchPhotos(payload)
                .then(data => {
                    if(paginate) commit('addPhotos', data);
                    else commit('setPhotos', data);
                    resolve(data);
                })
                .catch(error => {
                    reject(error);
                });
        });
    },
};


const getters = {
    getPhotos(state){
        return state.photos;
    },
};

const NASAStrore = {
    state,
    mutations,
    actions,
    getters,
};

export default NASAStrore;