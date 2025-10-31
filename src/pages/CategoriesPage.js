import React, { useState } from 'react';
import Category from '../components/Category';
import { CategoryInfo } from '../common/CategoryInfo';
import Question from '../components/Question';

function CategoriesPage({ questions }) {
	const [activeQuestion, setActiveQuestion] = useState(null);
	const [visitedCards, setVisitedCards] = useState([]);

    const handleSetActiveQuestion = (category, points) => {
        setVisitedCards((prev) => [...prev, { category: category.name, points }]);

        const chosen = questions?.[category?.name]?.[points] || { question: '', answer: '' };

		setActiveQuestion({
            category: category,
            points: points,
            question: chosen.question,
            answer: chosen.answer,
        });
    };

	if (activeQuestion) {
		return (
			<div>
				<Question
					category={activeQuestion.category}
					points={activeQuestion.points}
					question={activeQuestion.question}
					answer={activeQuestion.answer}
					goBack={setActiveQuestion}
				/>
			</div>
		)
	}

	return (
		<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '50px' }}>
			{activeQuestion}
			<Category
				categoryInfo={CategoryInfo.Monsters}
				visitedCards={visitedCards.filter(v => v.category === CategoryInfo.Monsters.name)}
				returnQuestion={handleSetActiveQuestion}
			/>
			<Category
				categoryInfo={CategoryInfo.Movies}
				visitedCards={visitedCards.filter(v => v.category === CategoryInfo.Movies.name)}
				returnQuestion={handleSetActiveQuestion}
			/>
			<Category
				categoryInfo={CategoryInfo.Traditions}
				visitedCards={visitedCards.filter(v => v.category === CategoryInfo.Traditions.name)}
				returnQuestion={handleSetActiveQuestion}
			/>
			<Category
				categoryInfo={CategoryInfo.Phobias}
				visitedCards={visitedCards.filter(v => v.category === CategoryInfo.Phobias.name)}
				returnQuestion={handleSetActiveQuestion}
			/>
		</div>
	);
}

export default CategoriesPage;
