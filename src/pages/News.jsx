import { React, useState } from 'react'
import '../pagesCss/News.css'
import NewsPost from './NewsPost';
import UseMyHooksNwes from '../myHooks/UseMyHooksNwes';

export default function News() {
    let [newsInput, poxelNewsInput] = useState("");
    let [pageSize, poxelPageSize] = useState(5)

    let newsInfo = UseMyHooksNwes(newsInput, pageSize);
    console.log(pageSize, 222);
    return (
        <div>
            <div className='inputContainer'>
                <input type="text" name="text" placeholder='News' className='newsInput' value={newsInput} onChange={(e) => { poxelNewsInput(e.target.value) }} />
                <select id='nuber' name='nuber' className='select' value={pageSize} onChange={(e) => { poxelPageSize(e.target.value) }}>
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="15">15</option>
                    <option value="20">20</option>
                </select>
            </div>
            <div className='newsPosts'>
                {newsInfo ? <NewsPost newsArtical={newsInfo} /> : newsInput && <p style={{ textAlign: "center", color: 'red' }}>Loading....</p>}
            </div>
        </div>
    )
}

