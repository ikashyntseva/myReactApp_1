import React from 'react' // мы обязаны импортировать необходимые пакеты в каждом файле
import PropTypes from 'prop-types' // у Article это react и prop-types
import { Article } from './Article' // ./ = текущая директория,

class News extends React.Component {
    renderNews = () => {
        const { data } = this.props;
        let newsTemplate;

        if (data
            && data.length) {
            newsTemplate = data.map(function (item) {
                return (
                    <Article key={item.id} data={item}/>
                );
            });
        } else {
            newsTemplate = <p>К сожалению, новостей нет</p>;
        }

        return (
            <div className="news">
                {newsTemplate}
                {
                    (data && data.length) ?
                        <strong className="news__count">Всего новостей: {data.length}</strong> : null
                }
            </div>
        );
    };

    render() {
        const news = this.renderNews();

        return (
            news
        );
    }
}

News.propTypes = {
    data: PropTypes.array.isRequired // PropTypes (с большой буквы) = библиотека prop-types
};

export { News }