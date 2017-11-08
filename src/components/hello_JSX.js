export default {
  //el: '#app',
  //_withStripped: true,
  //_compiled: true,
  //functional: true,
  name: 'jsx',
  data() {
    return {
      msg: 'click me!'
    }
  },
  methods: {
    c() {
      alert(`hello jsx_vue`)
    }
  },
  render(h) {//正常渲染
    //throw new Error('test')
    return (<div id="hello_JSX"><p class={{'my-class': true}} onClick={this.c}>{this.msg}</p></div>)//jsx
  },
  renderError(h, err) {//渲染出错
    return h('pre', {style: {color: 'red'}}, err.stack)//createElement
  },
  mounted() {
    console.log(this.$el)
  }
}
