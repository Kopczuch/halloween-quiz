import React from 'react';
import QuizCard from './QuizCard';
import './Category.css';

function Category({ categoryInfo, visitedCards, returnQuestion }) {
	return (
		<div className="category-container">
			<h2>{categoryInfo.name}</h2>
			<div className="quiz-grid">
			{(() => {
				const items = [];
				for (let i = 1; i <= 5; i++) {
					items.push(<QuizCard
						key={i}
						visited={!!visitedCards.find(c => c.points === i*100)}
						color={categoryInfo.color}
						points={i*100}
						onClick={() => returnQuestion(categoryInfo, i*100)}
					/>);
				}
				return items;
			})()}
			</div>
		</div>
	);
}

export default Category;
