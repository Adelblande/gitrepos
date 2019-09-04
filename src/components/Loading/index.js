import React from 'react';

import { Girando } from  './styles';

const Loading = () => (
	<Girando>
		<div className="loading">
			<div className="loading-meio">
				<div className="loading-interno"></div>
			</div>
		</div>
	</Girando>
)

export default Loading;