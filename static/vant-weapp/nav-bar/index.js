import { VantComponent } from '../common/component';
VantComponent({
  classes: ['title-class'],
  props: {
    title: String,
    fixed: Boolean,
    leftText: String,
    rightText: String,
    leftArrow: Boolean,
    leftArrowColor: String,
    border: {
      type: Boolean,
      value: true
    },
    zIndex: {
      type: Number,
      value: 1
    }
  },
  methods: {
    onClickLeft: function onClickLeft() {
      this.$emit('clickLeft');
    },
    onClickRight: function onClickRight() {
      this.$emit('clickRight');
    }
  }
});
