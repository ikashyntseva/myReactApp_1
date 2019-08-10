import React from 'react' // мы обязаны импортировать необходимые пакеты в каждом файле
import PropTypes from 'prop-types' // у Article это react и prop-types

class Add extends React.Component {
    state = {
        author:      '',
        text:        '',
        agree:       false,
        isFormValid: false,
    };

    validate = () => {
        const { author, text, agree } = this.state;
        return author.trim() && text.trim() && agree;
    };

    onChangeHandler = (e) => {
        const { id, value } = e.currentTarget;
        this.setState({ [id]: value });
    };

    onCheckboxChangeHandler = (e) => {
        this.setState({
            agree: e.currentTarget.checked,
        });
    };

    onClickHandler = (e) => {
        e.preventDefault();
        let { author, text } = this.state;
        const id = +new Date();
        const textLength = text.length;
        const textLimit = 50;
        const bigText = textLength > textLimit ? text.slice(textLimit - textLength) : '';

        text = textLength > textLimit ? text.slice(0, textLimit) : text;

        this.props.onAddNews({ id, author, text, bigText });
    };

    render() {
        const { author, text } = this.state;

        return (
            <React.Fragment>
                <form className='add'>
                    <input
                        id='author'
                        className='add__author'
                        onChange={this.onChangeHandler}
                        value={author}
                        placeholder='Type your name'/>
                    <textarea
                        id='text'
                        className='add__text'
                        onChange={this.onChangeHandler}
                        value={text}
                        placeholder='Type your news'/>
                    <label className='add__checkrule'>
                        <input
                            type='checkbox'
                            onChange={this.onCheckboxChangeHandler}
                        /> Я согласен с правилами
                    </label>
                    <button
                        className='add__btn'
                        onClick={this.onClickHandler}
                        disabled={!this.validate()}>
                        Add news
                    </button>
                </form>
            </React.Fragment>
        );
    }
}

Add.propTypes = {
    onAddNews: PropTypes.func.isRequired, // func используется для проверки передачи function
};

export { Add }