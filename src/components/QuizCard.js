import React from 'react';
import Card from 'react-bootstrap/Card';

function QuizCard({ visited, color, points, onClick }) {
	return (
		<Card
			style={{
				width: '250px',
				height: '130px',
				margin: '10px auto',
				marginBottom: '12px',
				cursor: 'pointer',
				backgroundColor: visited ? '#999' : color }}
			onClick={onClick}
		>
			<Card.Body style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
				<Card.Title style={{ fontSize: 32 }}>{points}</Card.Title>
			</Card.Body>
		</Card>
	);
}

export default QuizCard;
