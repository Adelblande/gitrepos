import styled from 'styled-components';

export const ScreenLoading = styled.div`
	@keyframes loading {
		0% {
			transform: rotate(0);
		}
		100% {
			transform: rotate(360deg);
		}
	}
	
	@keyframes loading-inverse {
		100% {
			transform: rotate(0);
		}
		0% {
			transform: rotate(360deg);
		}
	}

	.loading-internal {
		width: 90px;
		height: 90px;
		border-radius: 50%;
		padding: 5px;
		border: 2px solid transparent;
		border-right: 2px solid #35d1f5;
		animation: loading-inverse 1s linear infinite;
	}
	.loading-middle {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100px;
		height: 100px;
		border-radius: 50%;
		padding: 5px;
		border: 2px solid transparent;
		border-bottom: 2px solid #f57305;
		animation: loading-inverse 1s linear infinite;
	}
	.loading {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 110px;
		height: 110px;
		border-radius: 50%;
		padding: 5px;
		border: 2px solid transparent;
		border-left: 2px solid #513081;
		animation: loading 2s linear infinite;
	}
`;
