import React from 'react';

import { Girando } from  './styles';

const Loading = () => (
	<Girando>
		<div className="loading is-animating">
			<div className="loading-meio is-animating-inverse">
				<div className="loading-interno is-animating-inverse"></div>
			</div>
		</div>
	</Girando>
)

export default Loading;