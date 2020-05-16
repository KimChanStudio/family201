import MealAPI from '../data/meal.js'

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
            // console.log('generate meal');
            // console.log('person(s):' + data.person);
            // console.log('type:' + data.type);
            dispatch('getMeal', data).then(function () {
                console.log(state.meal);
            })
        },
        getMeal({
            commit,
            state,
            dispatch
        }, data) {
            // console.log('generate meal');
            // console.log('person(s):' + data.person);
            // console.log('type:' + data.type);
            commit('setMealLoadStatus', 1)

            let meal = MealAPI.getMeal()
            commit('setMeal', meal)
            commit('setMealLoadStatus', 2)
            // .then(function (response) {
            //     commit('setMeal', response.data)
            //     commit('setMealLoadStatus', 2)
            // }).catch(function () {
            //     commit('setMeal', {})
            //     commit('setMealLoadStatus', 3)
            // })
        }
    },
    mutations: {
        setMealLoadStatus(state, status) {
            state.mealLoadStatus = status
        },
        setMeal(state, meal) {
            state.meal = meal
        }
    },
    getters: {
        getMealLoadStatus(state) {
            return state.mealLoadStatus
        },
        getMeal(state) {
            return state.meal
        }
    }
}