// components/y-tab-control/y-tab-control.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    titles: {
      type: Array,
      value: []
    }
  },
  data: {
    currentIndex: 0
  },
  methods: {
    handleClick(event) {
      // 1.取出index
      const index = event.currentTarget.dataset.index
      console.log('---------------------', index)

      // 2.修改currentIndex
      this.setData({
        currentIndex: index
      })

      // 3.通知页面内部的点击事件
      this.triggerEvent('itemClick', {index, title: this.properties.titles[index]}, {})
    }
  }
})
