import { teamConstants } from '../_constants/team.constants';
import { teamService } from '../_services/team.service';


export const teamActions = {
    getTeam,
};

function getTeam() {
    return dispatch => {
        dispatch(request());

        teamService.getTeam()
            .then(teamMembers => {
                    dispatch(success(teamMembers));
                },
                error => {
                    dispatch(failure(error.toString()));
                }
            );
    };

    function request() { return { type: teamConstants.FETCH_REQUEST } }
    function success(teamMembers) { return { type: teamConstants.FETCH_SUCCESS, teamMembers } }
    function failure(error) { return { type: teamConstants.FETCH_FAILURE, error } }
}
