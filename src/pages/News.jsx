import { React, useState } from 'react'
import '../pagesCss/News.css'
import NewsPost from './NewsPost';
import myContext from './context';
import UseMyHooksNwes from '../myHooks/UseMyHooksNwes';

export default function News() {
    let [nwesInput, poxelNwesInput] = useState("");

    console.log(UseMyHooksNwes(nwesInput));
    return (
        <div>
            <div className='inputContainer'>
                <input type="text" name="text" placeholder='News' className='newsInput' value={nwesInput} onChange={(e) => { poxelNwesInput(e.target.value) }} />
            </div>
            <div className='newsPosts'>
                <myContext.Provider value={nwesInput}>
                    <NewsPost />
                </myContext.Provider>
            </div>
        </div>
    )
}

