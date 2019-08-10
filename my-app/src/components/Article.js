import React from 'react' // мы обязаны импортировать необходимые пакеты в каждом файле
import PropTypes from 'prop-types' // у Article это react и prop-types

class Article extends React.Component {
    state = {
        visible: false, // определили начальное состояние
    };

    handleReadMoreClick = (e) => { // добавили метод
        e.preventDefault();
        this.setState({ visible: true });
    };

    render() {
        const { author, text, bigText } = this.props.articleData;
        const { visible } = this.state;
        return (
            <div className="article">
                <p className="news__author">{author}:</p>
                <p className="news__text">{text}</p>
                {
                    visible ? <p className="news__big-text">{bigText}</p> :
                        <a href="#readmore" onClick={this.handleReadMoreClick} className='news__read-more'>More</a>
                }
            </div>
        );
    }
}

Article.propTypes = {
    articleData: PropTypes.shape({
        id:      PropTypes.number.isRequired,
        author:  PropTypes.string.isRequired,
        text:    PropTypes.string.isRequired,
        bigText: PropTypes.string.isRequired,
    }),
};

export { Article }