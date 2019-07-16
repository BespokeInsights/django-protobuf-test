import React, { useState } from "react";

import { Button } from "reactstrap";
import axios from "axios";

import { Network } from "./proto";
import "./App.css";

const App: React.FC = () => {
  const [protobufEntity, setProtobufEntity] = useState({});

  function sendRequest() {
    axios({
      method: "GET",
      url: "http://localhost:8000/api/networks/ERG/"
    }).then(function(response) {
      const buffer = Uint8Array.from(atob(response.data), c => c.charCodeAt(0));
      const network = Network.decode(buffer);
      setProtobufEntity(Network.toObject(network));
    });
  }

  return (
    <div className="App">
      <header className="App-header">
        <Button onClick={e => sendRequest()}>Send Request</Button>
        <p>Protobuf test</p>
        <dl className="row">
          {Object.entries<any>(protobufEntity).map(([key, value], index) => (
            <span style={{ textAlign: "left", display: "flex" }}>
              <dt className="col-12 col-sm-3">{key}</dt>
              <dd
                className="col-12 col-sm-9"
                style={{ marginInlineStart: "auto", paddingLeft: "30px" }}
              >
                {value}
              </dd>
            </span>
          ))}
        </dl>
      </header>
    </div>
  );
};

export default App;
