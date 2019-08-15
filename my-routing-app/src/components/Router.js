import React, { Component } from "react";
import PropTypes from "prop-types";

let instances = []; // массив будущих роутов (экземпляров Route)

const register = comp => instances.push(comp); // добавляем в массив
const unregister = comp => instances.splice(instances.indexOf(comp), 1); // удаляем из массива

const matchPath = (pathname, options) => {
  const { exact = false, path } = options; // "вытаскиваем" из props нужные свойства, по умолчанию exact = false

  if (!path) {
    // если свойства path нет
    return {
      // устанавливаются следующие значения
      path: null,
      url: pathname,
      isExact: true
    };
  }

  const match = new RegExp(`^${path}`).exec(pathname); // с помощью регулярного выражения получаем массив строк

  if (!match) {
    // если совпадений не найдено, из функции matchParams возвращается null
    return null;
  }

  const url = match[0]; // если совпадение нашлось, берем из массива первое значение (массив, потому что, так работает RexExp метод exec)
  const isExact = pathname === url; // создаем переменную isExact равную true / false

  if (exact && !isExact) {
    // совпадение нашлось, но в свойствах было указано exact, а в данный момент pathname не равно url (следовательно, isExact - false)
    // поэтому тоже возвращаем null, так как совпадение не точное

    return null;
  }

  return {
    // все в порядке, из функции возвращается объект с полезными свойствами
    path,
    url,
    isExact
  };
};

const historyPush = path => {
  window.history.pushState({}, null, path);
  instances.forEach(instance => {
    instance.forceUpdate();
  });
};

const historyReplace = path => {
  window.history.replaceState({}, null, path);
  instances.forEach(instance => {
    instance.forceUpdate();
  });
};

export class Link extends Component {
  static propTypes = {
    // Вариант записи Props в качестве static свойства
    to: PropTypes.string.isRequired,
    replace: PropTypes.bool
  };
  handleClick = event => {
    const { replace, to } = this.props;
    event.preventDefault(); // блокируем стандартное поведение браузера

    replace ? historyReplace(to) : historyPush(to); // вызываем одну из наших функций
  };

  render() {
    const { to, children } = this.props;

    return (
      <a href={to} onClick={this.handleClick}>
        {children}
      </a>
    );
  }
}

export class Route extends Component {
  componentWillMount() {
    // установили обработчик - функцию this.handlePop, на событие popstate
    window.addEventListener("popstate", this.handlePop);
    register(this);
  }

  componentWillUnmount() {
    // сняли обработчик с события popstate
    window.removeEventListener("popstate", this.handlePop);
    unregister(this);
  }

  handlePop = () => {
    // создали новый метод, в котором вызываем forceUpdate. Этот метод мы установили в качестве обработчика выше
    this.forceUpdate();
  };

  render() {
    const { path, exact, component, render } = this.props;

    const match = matchPath(window.location.pathname, { path, exact }); // вызываем функцию matchPath [1]

    if (!match) return null; // ничего не найдено - возвращаем null и выходим из метода render

    if (component) return React.createElement(component, { match });

    if (render) return render({ match });

    return null;
  }
}

Route.propTypes = {
  // props записаны в качестве свойства
  path: PropTypes.string,
  exact: PropTypes.bool,
  component: PropTypes.func,
  render: PropTypes.func
};
