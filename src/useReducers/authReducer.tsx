

export enum reducerAction { 
	signUp,
	signIn,
	signOut
}

type signUp = { 
	type: reducerAction.signUp,
	payload: any
}

type signIn = { 
	type: reducerAction.signIn,
	payload: any
}

type signOut = { 
	type: reducerAction.signOut,
	payload: any
}

type configAction = signUp | signIn | signOut

interface authState { 
	email: string,
	password: string
}


export const authReducer = (state: authState, action: configAction) => { 
	switch(action.type) { 
		case reducerAction.signUp: 
		return { 
			...state, 
			email: action.payload,
			password: action.payload
		}
		case reducerAction.signIn:
			return { 
				...state,
				email: action.payload,
				password: action.payload
			}
		case reducerAction.signOut: 
		return { 
			...state,
			email: null,
			password: null
		}
	}
}