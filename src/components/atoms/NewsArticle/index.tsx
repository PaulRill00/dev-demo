import { DiButton } from "loadables";
import { useRouter } from "next/router";
import { News } from "typings/News";

export const NewsArticle: React.FC<{ article: News }> = ({article})  => {
    const router = useRouter();

    return (
        <div className="news-article">
            <div className="news-article__content">
                {/* image */}
                <h4>{article.title}</h4>
                {/* short body */}
                {/* published date */}
            </div>
            <DiButton onClick={ () => { router.push('/news/' + article.seoTitle) }}  >go to article</DiButton>
        </div>
    )
}