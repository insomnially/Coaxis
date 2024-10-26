import React, { useEffect, useState } from "react";
import Header from "../../Header/Header";
import './Reviews.css';

export default function Reviews() {
    const [reviews, setReviews] = useState([]);

    const [newReview, setNewReview] = useState({
        name: "",
        text: "",
        rating: 0,
    });

    const predefinedReviews = [
        {
            id: 1,
            name: "Иван Иванов",
            text: "Отличный сервис! Быстро и качественно установили оборудование. Рекомендую всем!",
            rating: 4,
            date: "2024-10-01",
        },
        {
            id: 2,
            name: "Анна Петрова",
            text: "Я очень довольна работой специалистов. Рекомендую всем! Установили всё быстро и качественно.",
            rating: 5,
            date: "2024-09-15",
        },
        {
            id: 3,
            name: "Сергей Смирнов",
            text: "Хорошая команда. Все сделали в срок и без проблем. Никаких претензий.",
            rating: 5,
            date: "2024-08-20",
        },
        {
            id: 4,
            name: "Мария Кузнецова",
            text: "Прекрасный опыт! Обязательно вернусь. Особенно понравилось отношение к клиентам.",
            rating: 4,
            date: "2024-10-10",
        },
        {
            id: 5,
            name: "Дмитрий Сидоров",
            text: "Ребята знают свое дело. Спасибо! Результат превзошёл все ожидания.",
            rating: 4,
            date: "2024-09-05",
        },
        {
            id: 6,
            name: "Елена Алексеева",
            text: "Довольна результатом, все на высшем уровне. Профессионалы своего дела.",
            rating: 5,
            date: "2024-08-25",
        },
        {
            id: 7,
            name: "Антон Иванов",
            text: "Рекомендую! Все очень быстро и качественно. Команда отзывчивая и дружелюбная.",
            rating: 5,
            date: "2024-07-15",
        },
        {
            id: 8,
            name: "Ольга Петрова",
            text: "Всё сделано идеально, спасибо! Все пожелания были учтены.",
            rating: 4,
            date: "2024-06-30",
        },
        {
            id: 9,
            name: "Александр Смирнов",
            text: "Отличный сервис и хорошее качество! Все работы выполнены на высшем уровне.",
            rating: 5,
            date: "2024-06-10",
        },
        {
            id: 10,
            name: "Наталья Федорова",
            text: "Довольна работой команды. Вернусь снова! Обслуживание на высоте.",
            rating: 4,
            date: "2024-05-25",
        },
    ];

    useEffect(() => {
        const savedReviews = JSON.parse(localStorage.getItem("reviews"));
        
        if (savedReviews && savedReviews.length > 0) {
            setReviews(savedReviews);
        } else {
            setReviews(predefinedReviews);
            localStorage.setItem("reviews", JSON.stringify(predefinedReviews));
        }
    }, []);
    

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewReview((prev) => ({ ...prev, [name]: value }));
    };

    const handleRatingChange = (rating) => {
        setNewReview((prev) => ({ ...prev, rating }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const reviewToAdd = {
            id: reviews.length + 1,
            name: newReview.name,
            text: newReview.text,
            rating: newReview.rating,
            date: new Date().toLocaleDateString("ru-RU"),
        };
        const updatedReviews = [...reviews, reviewToAdd];
        setReviews(updatedReviews);
        localStorage.setItem("reviews", JSON.stringify(updatedReviews));
        setNewReview({ name: "", text: "", rating: 0 });
    };

    return (
        <>
            <Header />
            <div className="reviews-container">
                <h1 className="reviews-title">Отзывы наших клиентов</h1>
                <div className="reviews-list">
                    {reviews.map((review) => (
                        <div key={review.id} className="review-card">
                            <h3 className="review-name">{review.name}</h3>
                            <div className="review-rating">
                                {[...Array(5)].map((_, index) => (
                                    <span key={index} className={`star ${index < review.rating ? 'filled' : ''}`}>★</span>
                                ))}
                            </div>
                            <p className="review-text">{review.text}</p>
                            <span className="review-date">{review.date}</span>
                        </div>
                    ))}
                </div>

                <form onSubmit={handleSubmit} className="add-review-form">
                    <input
                        type="text"
                        name="name"
                        placeholder="Ваше имя"
                        value={newReview.name}
                        onChange={handleChange}
                        required
                        className="input-field"
                    />
                    <textarea
                        name="text"
                        placeholder="Ваш отзыв"
                        value={newReview.text}
                        onChange={handleChange}
                        required
                        className="input-field"
                    />
                    <div className="rating-container">
                        <span>Рейтинг:</span>
                        {[1, 2, 3, 4, 5].map((star) => (
                            <span
                                key={star}
                                onClick={() => handleRatingChange(star)}
                                className={`star ${newReview.rating >= star ? 'filled' : ''}`}
                            >
                                ★
                            </span>
                        ))}
                    </div>
                    <button type="submit" className="add-review-button">Добавить отзыв</button>
                </form>
            </div>
        </>
    );
}