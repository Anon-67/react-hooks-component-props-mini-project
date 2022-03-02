import React from "react";
import blogData from "../data/blog";
import Article from "./Article";


function ArticleList() {


    return (
        <main>
            {blogData.posts.map(e => {
                return <Article key={e.id} title={e.title} date={e.date} preview={e.preview} />
            })}
        </main>
    )



}

export default ArticleList