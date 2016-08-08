import React from "react"
import ReactDOM from "react-dom"

class FancyCheckBox extends React.Component {
  render () {
    var { checked, title, ...other } = this.props;
    var fancyClass = checked ? 'FancyChecked' : 'FancyUnchecked';
    var fancyTitle = checked ? 'X ' + title : 'O ' + title;
    var checkStatus = checked ? 'checked' : '';
    console.log({...other});
    return (
      <label>
        <input {...other}
          defaultChecked={checkStatus}
          className={fancyClass}
          type="checkbox"
        />
        {fancyTitle}
      </label>
    );
  }
}

ReactDOM.render(
  <FancyCheckBox checked={true} title="哈哈" onClick={console.log.bind("123")} />,
  document.querySelector("#app")
);
