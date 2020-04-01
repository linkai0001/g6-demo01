import React,{useEffect} from 'react';
import G6 from '@antv/g6';
import './App.css';

function App() {

  // 通过 React.userRef 函数的 current 获取绑定 ref 的元素
  const ref = React.useRef();
  let data = {
    // 点集
    nodes: [{
      id: 'node1', // String，该节点存在则必须，节点的唯一标识
      x: 100,      // Number，可选，节点位置的 x 值
      y: 100,       // Number，可选，节点位置的 y 值
      label: "新增",
      class: "n0",
      // 设置节点的形状
      type: "modelRect",
      style: {
        cursor: "pointer"
      },
      // 节点中文本样式和其他配置
      labelCfg: {
        // 文本在元素中的位置
        positions: "center",
        style: {
          fontSize: 10
        }
      }
    }]
  };

  useEffect(() => {

    // 使用 defaultNode 和 defaultEdge 实现默认配置(全局配置)
    let graph = new G6.Graph({
      container: ref.current,
      width: 400,
      height: 400,
      renderer: "svg"
    });
    graph.data(data);
    graph.render();
  },[]);
  return (
      <React.Fragment>
        <div ref={ref}></div>
      </React.Fragment>
  )
}

export default App;
