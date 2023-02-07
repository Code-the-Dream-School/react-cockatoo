import ButtonUnstyled, {
	buttonUnstyledClasses,
} from '@mui/base/ButtonUnstyled';
import { styled } from '@mui/system';

const green = {
	500: '#2fb583',
	600: '#34916f',
	700: '#2e8263',
};

const Button = styled(ButtonUnstyled)`
	font-family: Helvetica, sans-serif;
	font-weight: bold;
	font-size: 0.75em;
	background-color: ${green[500]};
	padding: 5px 15px;
	border-radius: 12px;
	color: white;
	transition: all 150ms ease;
	cursor: pointer;
	border: none;
	letter-spacing: 0.09em;

	&:hover {
		background-color: ${green[600]};
	}

	&.${buttonUnstyledClasses.active} {
		background-color: ${green[700]};
	}

	&.${buttonUnstyledClasses.focusVisible} {
		box-shadow: 0 4px 20px 0 rgba(61, 71, 82, 0.1), 0 0 0 5px ${green[700]};
		outline: none;
	}

	&.${buttonUnstyledClasses.disabled} {
		opacity: 0.5;
		cursor: not-allowed;
	}
`;

export default Button;
