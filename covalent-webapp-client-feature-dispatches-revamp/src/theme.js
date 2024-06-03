/* eslint-disable no-dupe-keys */
/* eslint-disable import/no-unused-modules */
/*
 * Copyright 2022 Agnostiq Inc.
 * Note: This file is subject to a proprietary license agreement entered into between
 * you (or the person or organization that you represent) and Agnostiq Inc. Your rights to
 * access and use this file is subject to the terms and conditions of such agreement.
 * Please ensure you carefully review such agreements and, if you have any questions
 * please reach out to Agnostiq at: [support@agnostiq.com].
 */
import { createTheme, emphasize } from '@mui/material/styles';

const darkScrollbar = ({
	size = 7,
	border = 0,
	borderRadius = 8,
	thumbColor = emphasize('#1c1c46', 0.1),
	trackColor = 'transparent',
	active = emphasize('#1c1c46', 0.15)
} = {}) => {
	return {
		scrollbarColor: `${thumbColor} ${trackColor}`,
		'&::-webkit-scrollbar, & *::-webkit-scrollbar': {
			backgroundColor: trackColor,
			height: size,
			width: size
		},
		'&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb': {
			borderRadius,
			backgroundColor: thumbColor,
			minHeight: 24,
			border: `${border}px solid ${trackColor}`
		},
		'&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus': {
			backgroundColor: active
		},
		'&::-webkit-scrollbar-thumb:active, & *::-webkit-scrollbar-thumb:active': {
			backgroundColor: active
		},
		'&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover': {
			backgroundColor: active
		},
		'&::-webkit-scrollbar-corner, & *::-webkit-scrollbar-corner': {
			backgroundColor: trackColor
		}
	};
};

export default createTheme({
	breakpoints: {
		keys: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
		values: { xs: 0, sm: 1000, md: 1420, lg: 1500, xl: 1800, xxl: 1900 }
	},
	palette: {
		mode: 'light',
		text: {
			primary: '#CBCBD7',
			gray03: '#86869A',
			secondary: '#FFFFFF',
			gray04: '#F1F1F6',
			failed: '#FF6464',
			success: '#55D899',
			running: '#DAC3FF',
			link: 'rgba(174, 182, 255, 1)'
		},
		secondary: {
			main: '#8B31FF'
		},
		background: {
			paper: '#08081A',
			default: '#08081A',
			covalentPurple: '#1c1c46',
			covalentSidebar: 'rgba(28, 28, 70, 0.4)',
			blue03: '#303067',
			blue04: 'rgba(85, 82, 255, 1)',
			blue05: '#6473FF',
			blue06: '#5552FF',
			blue07: '#403cff',
			blue08: '#1C1C4666',
			blue09: '#BEBEBE',
			blue10: '#1C1C46B2',
			blue11: '#41418D',
			qElectronList: 'rgba(48, 48, 103, 0.60)',
			qElectronTabSelect: 'rgba(28, 28, 70, 0.80)',
			qElectronPanel: 'rgba(8, 8, 26, 0.60)',
			qElectronListBg: 'rgba(8, 8, 26, 0.40)',
			blue12: '#1C1C4666',
			blue13: '#6D7CFF',
			blue14: '#2a2a5c',
			blue15: '#1C1C467D',
			blue16: '#30306799',
			blue0380: '#303067cc',
			violet01: '#DAC3FF'
		}
	},
	shape: {
		borderRadius: 10
	},
	typography: {
		fontFamily: 'DM Sans',
		fontWeightLight: 200,
		fontWeightMedium: 300,
		fontWeightRegular: 400,
		textOverflow: 'ellipsis',
		header20: { fontSize: '1.25rem', fontWeight: 200, fontFamily: 'DM Sans' },
		h1: {
			fontSize: '2rem',
			fontWeight: 200,
			fontFamily: 'DM Sans'
		},
		h2: {
			fontSize: '0.875rem',
			fontWeight: 300,
			fontFamily: 'DM Sans'
		},
		h3: {
			fontSize: '0.75rem',
			fontWeight: 300,
			fontFamily: 'DM Sans'
		},
		h4: {
			fontSize: '1rem',
			fontWeight: 300,
			fontFamily: 'DM Sans'
		},
		h5: {
			fontSize: '1.25rem',
			fontWeight: 300,
			fontFamily: 'DM Sans'
		},
		button: {
			textTransform: 'none'
		},
		sidebar: {
			fontSize: '0.75rem'
		},
		sidebarTitle: {
			color: '#86869A'
		},
		bannerHeader: {
			fontSize: '2.5rem'
		},
		bannerParagraph: {
			fontSize: '1.5rem'
		},
		status: {
			fontSize: '1rem'
		},
		downloads: {
			fontSize: '10px'
		},
		popUpDispatch: {
			fontSize: '0.875rem',
			fontWeight: 400
		},
		downloadsSolvers: {
			fontSize: '10px',
			fontWeight: 500
		},
		graphNodeDrawer: {
			fontSize: '14px',
			fontWeight: 400,
			color: '#FFF'
		},
		graphCodeAccordion: {
			fontSize: '14px',
			fontWeight: 400,
			color: '#CBCBD7'
		}
	},
	components: {
		MuiCssBaseline: {
			styleOverrides: {
				body: {
					...darkScrollbar()
				}
			}
		},
		MuiTableSortLabel: {
			styleOverrides: {
				root: {
					color: '#CBCBD7',
					'&:hover': {
						color: '#FFFFFF'
					},
					'&.Mui-active': {
						color: '#FFFFFF'
					}
				}
			}
		},
		MuiTableCell: {
			styleOverrides: {
				root: {
					padding: '0.1rem'
				}
			}
		},
		MuiTableRow: {
			styleOverrides: {
				root: {
					'& td': { border: 0 },
					height: '3.125rem',
					'&:hover': {
						background: '#1c1c46',
						'& td': { color: '#FFFFFF' }
					}
				}
			}
		},
		MuiTabPanel: {
			styleOverrides: {
				root: {
					padding: '0.375rem'
				}
			}
		},
		MuiButtonBase: {
			defaultProps: {
				// The props to apply
				disableRipple: true // No more ripple, on the whole application 💣!,
			}
		},
		MuiTooltip: {
			defaultProps: {
				// The props to apply
				arrow: true
			},
			styleOverrides: {
				tooltip: {
					backgroundColor: 'rgba(28, 28, 70, 0.7)',
					color: '#FAFAFA'
				},
				arrow: {
					color: 'rgba(28, 28, 70, 0.7)'
				}
			}
		},
		MuiCheckbox: {
			styleOverrides: {
				root: {
					padding: '0.25rem'
				}
			}
		},
		MuiIconButton: {
			styleOverrides: {
				root: {
					padding: '0px 3px 3.5px 3px'
				}
			}
		},
		MuiInput: {
			styleOverrides: {
				input: {
					'&::placeholder': {
						color: '#CBCBD7'
					}
				}
			}
		},
		MuiListItemText: {
			styleOverrides: {
				root: {
					backgroundColor: '#303067'
				}
			}
		},
		MuiButton: {
			styleOverrides: {
				outlined: {
					border: '1px solid #6473FF',
					borderRadius: '20px'
				},
				outlinedPrimary: {
					color: '#CBCBD7'
				}
			}
		},
		MuiCardHeader: {
			styleOverrides: {
				root: {
					padding: '10px'
				}
			}
		},
		MuiCardContent: {
			styleOverrides: {
				root: {
					padding: '15px',
					'&:last-child': {
						padding: '10px'
					}
				}
			}
		},
		MuiSnackbarContent: {
			styleOverrides: {
				root: {
					color: '#FAFAFA',
					backgroundColor: '#1c1c46',
					border: '1px solid #99daff'
				}
			}
		},
		MuiChip: {
			styleOverrides: {
				root: {
					backgroundColor: '#303067',
					border: '1px solid #1C1C46',
					fontSize: '0.75rem',
					borderRadius: '8px'
				}
			}
		},
		MuiListItem: {
			styleOverrides: {
				root: {
					backgroundColor: '#323267',
					cursor: 'pointer',
					'&:hover': {
						background: '#1C1C46',
						color: '#FFFFFF'
					}
				}
			}
		},
		MuiListItemButton: {
			styleOverrides: {
				root: {
					backgroundColor: '#323267',
					cursor: 'pointer',
					'&:hover': {
						background: '#1C1C46',
						color: '#FFFFFF'
					}
				}
			}
		},
		MuiList: {
			styleOverrides: {
				root: {
					padding: '0',
					backgroundColor: '#323267'
				}
			}
		},
		MuiMenuItem: {
			defaultProps: {
				divider: true
			},
			styleOverrides: {
				root: {
					backgroundColor: '#323267',
					'&:hover': {
						background: '#1C1C46'
					},
					borderBottom: '1px solid #1C1C46'
				}
			}
		},
		MuiMenu: {
			styleOverrides: {
				// paper: {
				// 	borderRadius: '6rem'
				// },
				list: {
					padding: '0'
				}
			}
		},
		MuiTab: {
			styleOverrides: {
				root: {
					color: '#CBCBD7',
					'&.Mui-selected': {
						color: '#AEB6FF',
						fontWeight: 700
					}
				}
			}
		},
		MuiTabs: {
			styleOverrides: {
				indicator: {
					backgroundColor: '#AEB6FF'
				}
			}
		},
		MuiPaginationItem: {
			styleOverrides: {
				root: {
					'&.Mui-selected': {
						backgroundColor: '#1C1C46',
						color: '#fafafa',
						border: '1px solid #AEB6FF'
					}
				}
			}
		},
		MuiUseMediaQuery: {
			defaultProps: {
				noSsr: true
			}
		}
	}
});
