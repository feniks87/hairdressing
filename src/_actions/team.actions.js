import { teamConstants } from '../_constants/team.constants';
import axios from '../axios-instance';

export const teamActions = {
    getTeam,
};

function getTeam() {
    return dispatch => {
        dispatch(request());

        axios.get('/stylists.json')
            .then(teamMembers => {
                dispatch(success(teamMembers.data));
                })
            .catch(error => {
                dispatch(failure(error));
            })
    };

    function request() { return { type: teamConstants.FETCH_REQUEST } }
    function success(teamMembers) { return { type: teamConstants.FETCH_SUCCESS, teamMembers } }
    function failure(error) { return { type: teamConstants.FETCH_FAILURE, error } }
}
