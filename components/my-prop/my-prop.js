// components/my-prop/my-prop.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // title: String
    title: {
      value: '我是默认的标题',
      type: String,
      observer: (newVal, oldVal) => {
        console.log(newVal, oldVal)
      }
    }
  },
  externalClasses: ['titleclass']
})
