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

    insertReadMore = () => {
        const { bigText } = this.props.data;
        const { visible } = this.state;
        let html = null;

        if (bigText) {
            if (visible) {
                html = <p className="news__big-text">{bigText}</p>;
            } else {
                html = <a href="#readmore" onClick={this.handleReadMoreClick} className='news__read-more'>More</a>;
            }
        }

        return html;
    };

    render() {
        const { author, text } = this.props.data;

        return (
            <div className="article">
                <p className="news__author">{author}:</p>
                <p className="news__text">{text}</p>
                {
                    this.insertReadMore()
                }
            </div>
        );
    }
}

Article.propTypes = {
    data: PropTypes.shape({
        id:      PropTypes.number.isRequired,
        author:  PropTypes.string.isRequired,
        text:    PropTypes.string.isRequired,
        bigText: PropTypes.string.isRequired,
    }),
};

export { Article }