// components/my-event/my-event.js
Component({

  /**
   * 组件的方法列表
   */
  methods: {
    handleIncrement() {
      // console.log('=============')
      this.triggerEvent('increment', {name: 'yanglt', age: 18}, {})
    }
  }
})
