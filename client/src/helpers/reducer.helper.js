export const createActionTypeSet = actionName => ({
    REQUESTED: `${actionName}_REQUESTED`,
    FULFILLED: `${actionName}_FULFILLED`,
    FAILED: `${actionName}_FAILED`,
    NOT_REQUESTED: `${actionName}_NOT_REQUESTED`
});

export const STATUS = {
    NOT_REQUESTED: 'NOT_REQUESTED',
    REQUESTED: 'REQUESTED',
    FULFILLED: 'FULFILLED',
    FAILED: 'FAILED'
};

export const makeActionCreators = actionTypeSet => ({
    createFulfilledAction: payload => ({
        type: actionTypeSet.FULFILLED,
        payload
    }),
    createRequestedAction: () => ({
        type: actionTypeSet.REQUESTED
    }),
    createFailedAction: payload => ({
        type: actionTypeSet.FAILED,
        payload
    }),
    createNotRequestedAction: payload => ({
        type: actionTypeSet.NOT_REQUESTED
    })
});
