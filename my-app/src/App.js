import React from 'react'; // подключение библиотеки React
import { Add } from './components/Add' // ./ = текущая директория,
import { News } from './components/News' // далее мы идем в директорию components и в нужный компонент
import './App.css'; // подключение файла стилей

class App extends React.Component {
    state = {
        news: null,
        isLoading: false,
    };

    handleAddNews = (news) => {
        const nextNews = [news, ...this.state.news];
        this.setState({ news: nextNews });
    };

    static getDerivedStateFromProps(props, state) {
        let nextFilteredNews;

        // смотрим в state.news (ранее смотрели в props)
        // и проверяем, чтобы не клонировать null
        // например, в момент первой отрисовки
        if (Array.isArray(state.news)) {
            nextFilteredNews = [...state.news];

            nextFilteredNews.forEach(item => {
                if (item.text.toLowerCase().indexOf('pubg') !== -1) {
                    item.text = 'СПАМ'
                }
            });

            return {
                filteredNews: nextFilteredNews,
            }
        }

        return null
    }

    componentDidMount() {
        this.setState({ isLoading: true });
        fetch('http://localhost:3000/data/newsData.json')
            .then(response => {
                return response.json()
            })
            .then(data => {
                setTimeout(() => { // добавили задержку
                    this.setState({ isLoading: false, news: data })
                }, 3000) // в три секунды
            })
    }

    render() {
        const { news, isLoading } = this.state;

        return (
            <React.Fragment>
                <Add onAddNews={this.handleAddNews}/>
                <h3>Новости</h3>
                {isLoading && <p>Загружаю...</p>}
                {Array.isArray(news) && <News data={news} />}
            </React.Fragment>
        );
    }
}

export default App;
