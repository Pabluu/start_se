const articles = [
    {
        id: 1,
        title: 'Healthtech de "telemedicina aumentada" ...',
        description: 'A telemedicina por si só...'
    },

    {
        id: 2,
        title: 'Tesla: entregas caem com lockdown...',
        description: 'A tesla entregou quase 18% menos...'
    }
];

function getArticles() {
    return articles;
}

function getArticleById(articleId) {
    return articles.find(article =>
        article.id === Number(articleId));
};

export { getArticles, getArticleById };