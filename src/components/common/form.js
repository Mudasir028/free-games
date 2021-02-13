import { Component } from "react";
import { toast } from "react-toastify";
import gameService from "../../services/game";
class Form extends Component {
  state = {};

  handleChange = (input) => {
    const { inputValue } = this.state;
    this.setState({ inputValue: input });

    if (inputValue.length > 1) {
      this.setState({ isDisable: false });
    } else if (inputValue.length == 1 || inputValue.length < 1) {
      this.setState({ isDisable: true });
    }
  };
  handleSubmit = async () => {
    const { data } = await gameService.getSearchResult(this.state.inputValue);
    this.setState({
      content: data,
    });

    this.state.content.games.length == 0 && toast("NO GOME FOUND");
  };
}
export default Form;
