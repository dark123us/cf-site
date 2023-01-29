import { useEffect } from 'react';

enum ActionKind {
    FETCHING = 'FETCHING',
    FETCHED = 'FETCHED',
    ERROR = 'ERROR',
    IDLE = 'IDLE'
}

type ErrorType = string
type DataType = object

interface ActionFetching {
    type: ActionKind.FETCHING
}

interface ActionFetched {
    type: ActionKind.FETCHED
    data: DataType
}

interface ActionError {
    type: ActionKind.ERROR
    error: ErrorType
}

type Action = ActionFetching | ActionFetched | ActionError

interface State {
    status: ActionKind
    data?: DataType
    error?: ErrorType
}

const initialState: State = {
    status: ActionKind.IDLE,
};

const reducer = (state: State, action: Action): State => {
    switch (action.type) {
    case ActionKind.FETCHING:
        return { ...state, status: ActionKind.FETCHING };
    case ActionKind.FETCHED:
        return { ...state, status: ActionKind.FETCHED, data: action.data };
    case ActionKind.ERROR:
        return { ...state, status: ActionKind.ERROR, error: action.error };
    default:
        return state;
    }
};

interface Request {
    jsonrpc: '2.0'
    method: string | 'report'
    params: {
        session?: string
    }
    id?: number
}

interface RequestArgs {
    session?: string
    params: {}
    method: string | 'report'
    idRequest?: number
}

const getRequest = (requestArgs: RequestArgs): Request => {
    const {
        idRequest, session, params, method = 'report',
    } = requestArgs;
    const request: Request = {
        jsonrpc: '2.0',
        method,
        params,
    };
    if (!('session' in params)) request.params.session = session;
    if (idRequest !== undefined) request.id = idRequest;
    return request;
};

export const useApi = (url: string, requestArgs: RequestArgs) => {
    const {
        method = 'report',
        idRequest,
        session,
        params,
    } = requestArgs;
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(():(()=> void) => {
        let cancelRequest = false;
        const clenUp = () => {
            cancelRequest = true;
        };

        if (url === undefined || !url.trim() || params === undefined
            || params == null) return clenUp;
        const fetchData = async () => {
            try {
                dispatch({ type: ActionKind.FETCHING });
                const request = getRequest(requestArgs);
                const response = await fetch(`${url}/api`, {
                    method: 'POST',
                    // mode: 'no-cors', // no-cors, *cors, same-origin
                    // cache: 'no-cache',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(request),
                });
                // console.log("done", response.ok);
                if (!response.ok) { throw response; }
                const data = await response.json();
                // console.log(data);
                if (cancelRequest) return;
                dispatch({ type: ActionKind.FETCHED, data });
            } catch (e:any) {
                if (cancelRequest) return;
                if (typeof e === 'object' && e !== null && e.message) {
                    dispatch({ type: ActionKind.ERROR, error: e.message });
                }
            }
        };
        fetchData().then();
        return clenUp;
    }, [url, requestArgs, params]);
    return state;
};
