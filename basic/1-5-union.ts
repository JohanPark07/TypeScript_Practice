{
  type Direction = "left" | "right" | "up";
  function move(direction: Direction) {
    console.log(direction);
  }

  type TileSize = 8 | 16 | 32;
  const tile: TileSize = 16;

  // function: login -> success, fail
  type SuccessState = {
    response: {
      body: string;
    };
  };

  type FailState = {
    reason: string;
  };
  type LoginState = SuccessState | FailState;

  function printLoginState(state: LoginState) {
    if ("response" in state) {
      console.log(`${state.response.body}`);
    } else {
      console.log(`${state.reason}`);
    }
  }
}
