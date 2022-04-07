import React, { ChangeEvent, Component } from 'react';

import { appSocket } from './appSocket';

interface State {
  mensagem: string;
}

export class EntradaTexto extends Component<{}, State> {
  state: State = {
    mensagem: "",
  };

  handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {

    this.setState({
      mensagem: e.currentTarget.value
    });
  };

  handleClick = () => {

     const msg = {
              nome:"m4r6i0",
              mensagem: this.state.mensagem
            };

    appSocket.emit("send_message", msg);
  
    this.setState({
      mensagem: "",
    });
  };

  render() {
    return (
      <div className="EntradaTexto">
        <textarea onChange={this.handleChange} value={this.state.mensagem} />
        <div className="ButtonContainer">
          <button onClick={this.handleClick}>Enviar</button>
        </div>
      </div>
    );
  }
}
