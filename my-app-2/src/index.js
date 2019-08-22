import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './index.css'

const initialState = {
  history: [
    {
      squares: Array(9).fill(null),
    },
  ],
  xIsNext: true,
  isWinner: false,
}

function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  )
}

class Board extends Component {
  renderSquare(i) {
    return (
      <Square
        value={this.props.squares[i]}
        onClick={() => this.props.handleClick(i)}
      />
    )
  }

  render() {
    const status = this.props.isWinner
      ? `Winner: ${this.props.xIsNext ? 'O' : 'X'}`
      : `Next player: ${this.props.xIsNext ? 'X' : 'O'}`

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    )
  }
}

class Reset extends Component {
  render() {
    return (
      <button
        className="btn-reset"
        disabled={this.props.disabled}
        onClick={this.props.onClick}
      >
        Reset
      </button>
    )
  }
}

class Game extends Component {
  constructor(props) {
    super(props)
    this.state = initialState
  }

  calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ]
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i]
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a]
      }
    }
    return null
  }

  handleClick(i) {
    let { squares } = this.state.history[this.state.history.length - 1]
    squares = squares.slice()

    if (this.state.isWinner || squares[i]) {
      return
    } else {
      squares[i] = this.state.xIsNext ? 'X' : 'O'
      this.setState({
        history: [...this.state.history, { squares }],
        xIsNext: !this.state.xIsNext,
      })

      if (this.calculateWinner(squares)) {
        this.setState({ isWinner: true })
      }
    }
  }

  isDisabled() {
    const { squares } = this.state.history[this.state.history.length - 1]
    return squares.every(square => square === null)
  }

  resetGame() {
    this.setState(initialState)
  }

  render() {
    const { squares } = this.state.history[this.state.history.length - 1]
    const { xIsNext, isWinner } = this.state

    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={squares}
            xIsNext={xIsNext}
            isWinner={isWinner}
            handleClick={this.handleClick.bind(this)}
          />
          <Reset
            disabled={this.isDisabled()}
            onClick={() => this.resetGame()}
          />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    )
  }
}

// ========================================

ReactDOM.render(<Game />, document.getElementById('root'))
