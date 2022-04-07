import React, { Component } from 'react';

import { appSocket } from './appSocket';

interface MensagemPayload {
  nome: string;
  mensagem: string;
}

interface State {
  mensagens: MensagemPayload[];
}

export class ListarMensagens extends Component<{}, State> {
  state: State = {
    mensagens: [{ nome: "m4r6i0", mensagem: "Teste"}]
  };

  componentDidMount() {
    appSocket.on("receive_message", (mensagens: MensagemPayload[]) => {
      this.setState({
        mensagens
      });
    });
  }

  renderMensagens = () => {
    return this.state.mensagens.map((mensagem) => <Mensagem {...mensagem} />);
  };

  render() {
    return <ul className="ListarMensagens">{this.renderMensagens()}</ul>;
  }
}


const Mensagem = (item: MensagemPayload) => {
  return (

    <li key={item.mensagem} className="Mensagem" >
      <p>
        {item.mensagem}
        <small>
          <i> {item.nome}</i>
        </small>
      </p>
    </li>
  );
};
