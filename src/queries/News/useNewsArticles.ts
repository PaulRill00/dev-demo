// Vendor
import { handleRequest } from '@dmgincs/utils';
import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';

// Typings / Constants
import { newsArticlesQueryKeys } from './keys';

// Other
import { Logger } from 'helpers/Logger';
import { News } from 'typings/News';
import { titleToSeoString } from 'helpers/titleToSeoString';

export const fetchNewsArticles = async (): Promise<News[]|null> => {
    return handleRequest<News[]>({
        url: 'common/news',
        version: 3
    }).catch((e: AxiosError) => {
        Logger.error('Error while prefetching /v3/common/news', e.response?.data.message || e.message);
        return [];
    }).then(res => res.map(x => ({
        ...x,
        seoTitle: titleToSeoString(x.title)
    })));
};

export const useNewsArticles = () => {
    const { data, ...rest } = useQuery(newsArticlesQueryKeys.all, fetchNewsArticles, {
        staleTime: 60 * 1000
    });

    return {
        newsArticles: data || [],
        ...rest
    };
};

export const useNewsArticle = (seoTitle: string) => {
    const { newsArticles, ...rest } = useNewsArticles();
    return {
        newsArticle: newsArticles.find(x => x.seoTitle === seoTitle),
        ...rest
    }
}