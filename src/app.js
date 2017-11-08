export default {
  name: 'app',
  data() {
    return {
      msg: 'Show the message.'
    }
  },
  created() {
    let num = 10;
    const timmer = setInterval(() => {
      if (num > 0) this.msg = `我将在${num--}S后自动跳转！`;
      else {
        this.$router.push('/jsx');
        clearInterval(timmer)
      }
    }, 1000);
  },
  methods: {
    hello() {
      alert('This is the message.')
    }
  },
  render() {
    return (
      <span class={{'my-class': true}} onClick={this.hello} style={{color: 'red'}}>
    {this.msg}
  </span>)
  }
};
