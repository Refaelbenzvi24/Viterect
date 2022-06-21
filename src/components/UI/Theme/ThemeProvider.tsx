import type { ReactElement } from 'react'
import { useEffect, useState } from 'react'

import { LocalStorage } from '../../../modules/LocalStorage'
import { ThemeContext, getInitialTheme } from './ThemeContext'
import type { ThemeName, ThemeProviderOptions } from './types'
import { createTheme, ThemeProvider as MuiThemeProvider } from "@mui/material"


const rawSetTheme = (theme: ThemeName) => {
	const root   = window.document.documentElement
	const isDark = theme === 'dark'

	root.classList.remove(isDark ? 'light' : 'dark')
	root.classList.add(theme)

	LocalStorage.setTheme(theme)
}

const ThemeProvider = ({ children }: ThemeProviderOptions): ReactElement => {
	const [theme, setTheme] = useState<ThemeName>(getInitialTheme())

	const generateMuiTheme = () => createTheme({
		palette: {
			mode: theme
		}
	})

	useEffect(() => {
		rawSetTheme(theme)
	}, [theme])

	// eslint-disable-next-line react/jsx-no-constructed-context-values -- should be re-rendered every time that values are changed - affects children theme
	return (
		<ThemeContext.Provider value={{ theme, setTheme }}>
			<MuiThemeProvider theme={generateMuiTheme()}>
				{children}
			</MuiThemeProvider>
		</ThemeContext.Provider>
	)
}

export default ThemeProvider
