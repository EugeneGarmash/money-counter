import React from 'react';

type PropsType = {
  
}

type StateType = {
  component: React.ReactElement | null,
}

const asyncComponent = (importComponent) => {
  return class extends React.Component<PropsType, StateType> {
    state = { /** @todo any type ? */
      component: null,
    };

    componentDidMount() {
      importComponent()
        .then(component => {
        // console.log("🚀 ~ file: asyncComponent.jsx ~ line 12 ~ extends ~ componentDidMount ~ component", component);
          this.setState({
            component: component.default
          });
        })
    }

    render() {
      const Component = this.state.component;

      return Component ? <Component {...this.props} /> : null;
    }
  }
}

export default asyncComponent;