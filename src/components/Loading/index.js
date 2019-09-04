import React from 'react';

import { ScreenLoading } from  './styles';

const Loading = () => (
	<ScreenLoading>
		<div className="loading">
			<div className="loading-middle">
				<div className="loading-internal"></div>
			</div>
		</div>
	</ScreenLoading>
)

export default Loading;