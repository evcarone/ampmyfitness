import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
  palette: {
    success: {
			light: '#81c784',
			main: '#4caf50',
			dark: '#388e3c',
		},
    secondary: {
			light: '#b20000',
			main: '#ff0000',
			dark: '#ff3333',
		},
	},
	typography: {
		fontFamily: 'Spartan, Helvetica, sans-serif',
	},
	overrides: {
		MuiButton: {
			root: {
				borderRadius: '50%',
			},
		},
	},
})

export default theme