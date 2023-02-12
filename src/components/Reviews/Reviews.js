import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './review.css'

const Reviews = () => {
    const comments = useLoaderData();
    return (
        <div>
            <h2>All the reviews are here...</h2>
            {
                comments.map(comment => <div className='review'
                    key={comment.id}>

                    <p>{comment.body}</p>
                    <p><small>{comment.email}</small></p>

                </div>)
            }
        </div>
    );
};

export default Reviews;