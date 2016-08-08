import React from "react"
import ReactDOM from "react-dom"

class FormPractice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        text: "Hello",
        text2: "React",
        text3: "Awesome"
    }
  }

  handleChangeText (e) {
    this.setState({text2: e.target.value})
  }

  render () {
    let text = this.state.text
    let text2 = this.state.text2
    let text3 = this.state.text3
    return (
      <div>
      <div>
        <label>
          受限文本框:
        </label>
        <br /><br />
        <input type="text" value={text} />
      </div>
      <br />
      <div>
        <label>
          监听改变事件改变state，取消受限:
        </label>
        <br /><br />
        <input type="text" value={text2} onChange={this.handleChangeText.bind(this)} /> {text2}
      </div>
      <br />
      <div>
        <label>
          defaultValue设置为非受限文本框:
        </label>
        <br /><br />
        <input type="text" defaultValue={text3} /> {text3}
      </div>
      </div>
    )
  }
}

/**
 * 不受限组件
 * input select textarea 支持defaultValue属性
 * input radio checkbox 支持defaultChecked属性
 * textarea设置默认值不应该使用子节点方式，而应该使用value或defaultValue传值设置，换行使用\n
 * 
 */

ReactDOM.render(
  <FormPractice />,
  document.querySelector("#app")
);
