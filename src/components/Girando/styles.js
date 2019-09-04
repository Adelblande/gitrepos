import styled from 'styled-components';

export const Girando = styled.div`
	@keyframes loading {
		0% {
			transform: rotate(0);
		}
		100% {
			transform: rotate(360deg);
		}
	}
	.is-animating {
		animation: loading 2s linear infinite;
	}
	
	@keyframes loading-inverse {
		100% {
			transform: rotate(0);
		}
		0% {
			transform: rotate(360deg);
		}
	}
	.is-animating-inverse {
		animation: loading-inverse 1s linear infinite;
	}
	.loading-interno {
		width: 90px;
		height: 90px;
		border-radius: 50%;
		padding: 5px;
		border-top: 2px solid transparent;
		border-right: 2px solid #35d1f5;
		border-bottom: 2px solid transparent;
		border-left: 2px solid transparent;
		
	}
	.loading-meio {
		display: flex;
		align-items: center;
		width: 100px;
		height: 100px;
		border-radius: 50%;
		padding: 5px;
		border-top: 2px solid transparent;
		border-right: 2px solid transparent;
		border-bottom: 2px solid #f57305;
		border-left: 2px solid transparent;
	}
	/* .loading { */
		display: flex;
		align-items: center;
		width: 110px;
		height: 110px;
		border-radius: 50%;
		padding: 5px;
		border-top: 2px solid transparent;
		border-right: 2px solid transparent;
		border-bottom: 2px solid transparent;
		border-left: 2px solid #513081;
	/* } */
`;
