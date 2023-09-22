'use client'
import React from 'react';

const CommentInput = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target[0].value)
    }
  return (
      <form method="POST" onSubmit={handleSubmit} className="w-full">
          <textarea name="message" rows={5} className="text-primary-100 w-full p-4"/>
          <button type="submit" className='bg-secondary-200 px-6 py-2 mb-10'>Wyślij</button>
    </form>
  )
}

export default CommentInput