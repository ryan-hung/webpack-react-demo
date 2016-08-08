import React from "react"
import ReactDOM from "react-dom"

class Refs extends React.Component {
  handleClick (e) {
    this.refs.myInput.focus();
  }
  render () {
    return (
      <div>
          <input ref="myInput" type="text" />
          <input type="button"
              value="Focus!"
              onClick={this.handleClick.bind(this)}
              />
      </div>
    )
  }
}

/**
 * 使用refs可以快速精准的得到你所拥有的组件
 * this.refs.refName 得到目标组件 refName为目标组件的ref值
 *
 * 组件的生命周期：挂载  更新  销毁
 * 挂载
 * getInitialState ( this.state in es6) 对象在组件被挂载之前调用
 * componentWillMount 在即将挂载之前调用
 * componentDidMount 在挂载完成之后调用 需要dom节点的初始化操作应该放在这里
 *
 * 更新
 * componentWillReceiveProps(object nextProps) 当组件接收到新的props时候调用 该方法用于比较this.props和nextProps，然后用this.setState改变状态
 * shouldComponentUpdate(object nextProps, object nextState): boolean 当组件做出是否需要更新dom的决定时被调用
 * componentWillUpdate(object nextProps, object nextState)在更新发生之前被调用。可以在这里调用this.setState()。
 * componentDidUpdate(object prevProps, object prevState)在更新发生之后调用。
 *
 * 销毁
 * componentWillUnmount()在组件移除和销毁之前被调用。清理工作应该放在这里。
 *
 * 优点
 * 可以在组件类里面定义任何公共的方法，然后通过refs来调用这些公共的方法
 * 获取dom节点 通过 this.refs.myInput 是获取组件唯一可靠的方式
 * refs 是自动管理的，一个组件一旦被销毁，那么他的 ref 也会被销毁 所以不用担心内存为题，除非你在某些地方使用了引用
 *
 * 注意
 * 不要在组件被挂载之前、或 render 方法中访问 refs
 */

ReactDOM.render(
  <Refs />,
  document.querySelector("#app")
);
