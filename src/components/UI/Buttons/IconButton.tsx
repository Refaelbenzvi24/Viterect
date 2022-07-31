import type { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react'
import styled from "@emotion/styled"
import tw, { css } from "twin.macro"
import theme from "../Utils/theme"
import { isDark } from "../index"
import { ButtonHTMLAttributes } from "react"

export interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	dark?: boolean
}

const IconButton = styled.button(({ dark }: IconButtonProps) => [
	tw`flex cursor-pointer text-xl opacity-80 hover:opacity-100 border-none active:opacity-70`,
	css`
		background-color: transparent;
		color: ${theme.colors.dark_200};

		&:hover {
			color: ${theme.colors.gray_700};
		}

		&:active {
			color: ${theme.colors.gray_500};
		}
	`,

	(dark || isDark()) && css`
		color: ${theme.colors.white};

		&:hover {
			color: ${theme.colors.gray_100};
		}

		&:active {
			color: ${theme.colors.gray_300};
		}
	`
])


export default IconButton
