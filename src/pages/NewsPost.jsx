import React from 'react'
import '../pagesCss/NewsPost.css'

export default function NewsPost({ newsArtical }) {
    return (
        <div className="postContainer">{newsArtical.map((el, i) => (
            <h3 key={`news artical ${i}`} className="post">{el.title}</h3>
        ))}</div>
    )
}
