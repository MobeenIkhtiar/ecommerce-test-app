import React from "react"
import { Link } from "gatsby"
import * as styles from "./styles.module.scss"

const Button = ({ to, primary, primaryLight, secondary, children, ...props }) => {
	return (
		<>
			<Link
				to={to}
				className={`${styles.button} ${
					(primary && styles.buttonPrimary) ||
					(primaryLight && styles.buttonPrimaryLight) ||
					(secondary && styles.buttonSecondary)
				}`}
				{...props}
			>
				{children}
			</Link>
		</>
	)
}

export default Button
