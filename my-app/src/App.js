import React from 'react'; // подключение библиотеки React
import { Add } from './components/Add' // ./ = текущая директория,
import { News } from './components/News' // далее мы идем в директорию components и в нужный компонент
import newsData from '../public/data/newsData' // импорт по дефолту
import './App.css'; // подключение файла стилей

class App extends React.Component {
    state = {
        news: newsData,
    };

    handleAddNews = (news) => {
        const nextNews = [news, ...this.state.news];
        this.setState({ news: nextNews });
    };

    render() {
        return (
            <React.Fragment>
                <h3>Новости</h3>
                <Add onAddNews={this.handleAddNews}/> {/* добавили вывод компонента */}
                <News data={this.state.news}/>
            </React.Fragment>
        );
    }
}

export default App;
