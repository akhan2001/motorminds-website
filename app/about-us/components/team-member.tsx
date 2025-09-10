import React from 'react';

interface TeamMemberProps {
	children: React.ReactNode;
	className?: string;
}

export default function TeamMember({ children, className = '' }: TeamMemberProps) {
	return (
		<div className={`bg-gray-900 ${className}`}>
			{children}
		</div>
	);
}