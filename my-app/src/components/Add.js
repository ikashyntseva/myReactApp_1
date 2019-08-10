import React from 'react' // мы обязаны импортировать необходимые пакеты в каждом файле
import PropTypes from 'prop-types' // у Article это react и prop-types

class Add extends React.Component {
    constructor(props) {
        super(props);
        this.input = React.createRef();
    }

    state = {
        author:      '',
        text:        '',
        agree:       false,
        isFormValid: false,
    };

    componentDidMount() {
        // ставим фокус в input
        this.input.current.focus();
    }

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

    onClickHandler = () => {
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
                        placeholder='Type your name'
                        ref={this.input}/>
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
                        Click on me
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