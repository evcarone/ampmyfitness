import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
  palette: {
    primary: {
			light: '#3333ff',
			main: '#0000ff',
			dark: '#0000b2',
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