import actionTypes from '../actions/actionTypes';

const initialState = {
    isLoadingGender: false,
    isLoadingRole: false,
    isLoadingPosistion: false,
    genders: [],
    roles: [],
    posistions: []
}

const adminReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_GENDER_START:
            let copyState = { ...state };
            copyState.isLoadingGender = true;
            return {
                ...copyState,
            }
        case actionTypes.FETCH_GENDER_SUCCESS:
            state.genders = action.data;
            state.isLoadingGender = false;

            return {
                ...state,
            }
        case actionTypes.FETCH_GENDER_FAILED:
            state.isLoadingGender = false;
            state.genders = [];
            return {
                ...state,
            }
        // ROLE
        case actionTypes.FETCH_ROLE_START:
            return {
                ...state,
                isLoadingPosition: true,
            };
        case actionTypes.FETCH_ROLE_SUCCESS:
            return {
                ...state,
                isLoadingRole: false,
                roles: action.data,
            };
        case actionTypes.FETCH_ROLE_FAILED:
            return {
                ...state,
                isLoadingrole: false,
                roles: [],
            };

        // POSISTION
        case actionTypes.FETCH_POSISTION_START:
            return {
                ...state,
                isLoadingPosition: true,
            };
        case actionTypes.FETCH_POSISTION_SUCCESS:
            return {
                ...state,
                isLoadingPosistion: false,
                posistions: action.data,
            };
        case actionTypes.FETCH_POSISTION_FAILED:
            return {
                ...state,
                isLoadingPosistion: false,
                posistions: [],
            };

        default:
            return state;
    }
}

export default adminReducer;