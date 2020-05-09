export const meal = {
    state: {
        meal: {},
        mealLoadStatus: 0,
    },
    actions: {
        generateMeal({
            commit,
            state,
            dispatch
        }, data) {
            console.log('generate meal');
            console.log('person(s):' + data.person);
            console.log('type:' + data.type);
        }
    },
    mutations: {

    },
    getters: {

    }
}