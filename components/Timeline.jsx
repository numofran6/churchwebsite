import React from 'react';
import { TimelineCard } from './TimelineCard';

export const Timeline = () => {
	return (
		<div>
			<div className="sticky top-0 bg-white py-3 z-10 shadow-xl shadow-white">
				<h2 className="group-date">January</h2>
			</div>

			<div className="bg-gray-100">
				<TimelineCard title={'Event 1'} date={'13 January 2023'}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
					aut numquam sequi deserunt cupiditate facere, molestiae veniam
					accusantium amet omnis odio quae dolore at, tenetur suscipit tempore
					reprehenderit sed blanditiis!
				</TimelineCard>
			</div>

			<div>
				<TimelineCard title={'Event 2'} date={'13 January 2023'}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
					aut numquam sequi deserunt cupiditate facere, molestiae veniam
					accusantium amet omnis odio quae dolore at, tenetur suscipit tempore
					reprehenderit sed blanditiis!
				</TimelineCard>
			</div>
		</div>
	);
};