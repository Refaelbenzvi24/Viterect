import styled from "@emotion/styled"
import tw, { css } from "twin.macro"
import { isDark } from "../index"
import theme from "../Utils/theme"


const Subtitle = styled.p(({ dark }: { dark?: boolean }) => [
	tw`flex flex-row`,

	css`
		color: ${theme.colors.gray_500};
	`,

	(dark || isDark()) && css`
		color: ${theme.colors.gray_300};
	`
])

export default Subtitle
