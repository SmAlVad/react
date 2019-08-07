import React, { Component } from 'react';
import PropTypes from 'prop-types'; // пакет для валидации входных параметров

// Компонент
const Counter = ({counter, func, number, string}) => {
    console.log(counter, func, number, string);
    return <h1>{`Counter component. Counter value is: ${counter}`}</h1>
};

// Валидация входных параметров
Counter.propTypes = {
  counter: PropTypes.number.isRequired, // обязательное значение
  func: PropTypes.func,
  number: PropTypes.number,
  string: PropTypes.string
};

// Дефолтные значения
Counter.defaultProps = {
    func: () => {},
    number: 0,
    string: ''
};

// Компонент
class CounterButton extends Component{
    state = {
        counter: 2,
    };

    handleClick = () => {
        // Изменить state можно с помощью спец метода setState
        this.setState(({ counter }) => ({
            counter: ++counter,
        }))
    };

    render() {
        const { counter } = this.state;

        return(
            <div>
                <Counter
                    counter={counter}
                    // Будут использованы значения по умолчанию
                    // func={() => {}}
                    // number={1}
                    // string="string"
                />
                <button onClick={this.handleClick}>+1</button>
            </div>
        )
    }
}

export default CounterButton;