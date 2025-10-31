import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './Question.css';

function Question({ category, points, question, answer, goBack }) {
    const [flipped, setFlipped] = useState(false);

    const handleFlip = () => setFlipped(!flipped);
    return (
        <div className="question-container">
            <div className="flip-card" onClick={handleFlip}>
                <div className={`flip-card-inner ${flipped ? 'flipped' : ''}`}>
                    <div className="flip-card-front">
                        <Card className="question-card" style={{ backgroundColor: category.color }}>
                            <Card.Body className="card-body">
								<Card.Title style={{ fontSize: 72 }}>{category.name}</Card.Title>
								<Card.Subtitle style={{ fontSize: 42, marginBottom: 70 }}>{points}</Card.Subtitle>
								<Card.Text style={{ fontSize: 42, margin: '20px' }}>{question}</Card.Text>
                            </Card.Body>
                        </Card>
                    </div>

                    <div className="flip-card-back">
                        <Card className="question-card" style={{ backgroundColor: category.color }}>
                            <Card.Body className="card-body" style={{ display: 'flex', alignItems: 'center' }}>
                                <Card.Text  style={{ fontSize: 42 }}>
                                    {answer ? `${answer}` : 'Brak odpowiedzi'}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>

            <Button
                variant="outline-danger"
                onClick={() => goBack(null)}
            >
                Powrót
            </Button>
        </div>
    );
}

export default Question;
