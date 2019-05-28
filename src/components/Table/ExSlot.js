
// 配置table 自定义内容的组件
export default {
  functional: true,
  props: {
    row: {
      type: Object,
      default: () => {}
    },
    render: Function,
    index: {
      type: Number,
      default: () => 0
    },
    column: {
      type: Object,
      default: null
    }
  },

  render: (h, data) => {
    const params = {
      row: data.props.row,
      index: data.props.index
    };

    if (data.props.column) params.column = data.props.column;
    return data.props.render(h, params);
  }
};
