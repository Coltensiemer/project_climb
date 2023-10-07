

export enum reduceAction { 
	signUp,
	signIn,
	signOut
}

type signUp { 
	type: reduceAction.signUp,
	payload: any
}

type signIn { 
	type: reduceAction.signIn,
	payload: any
}

type signOut { 
	type: reduceAction.signOut,
	payload: any
}

type configAction = signUp | signIn | signOut

interface authState { 
	email: string,
	password: string
}

export const authReducer = (state: authState, action: configAction) => { 
	switch(action.type) { 
		case reduceAction.signUp: 
		return { 
			...state,
			email: action.payload,
			password: action.payload
		}
		case reduceAction.signIn:
			return { 
				...state,
				email: action.payload,
				password: action.payload
			}
		case reduceAction.signOut: 
		return { 
			...state,
			email: null,
			password: null
		}
	}
}