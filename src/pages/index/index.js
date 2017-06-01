export default {
  name: 'Index',
  data () {
    return {
      msg: 'Welcome to Index',
      activeIndex: "1"
    }
  },
  methods: {
    handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
  }
}