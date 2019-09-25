<template>
    <div class="rule">
        <div class="rule-title">爬虫规则录入</div>
        <div class="input-wrap">
            <mu-form :model="form" class="mu-form" :label-position="labelPosition" label-width="100">
    <mu-form-item prop="input" label="爬取页面网址">
      <mu-text-field v-model="form.web"></mu-text-field>
    </mu-form-item>
      <mu-form-item prop="input" label="信息发布时间">
      <mu-text-field v-model="form.time"></mu-text-field>
    </mu-form-item>
     <mu-form-item prop="input" label="标题">
      <mu-text-field v-model="form.title"></mu-text-field>
    </mu-form-item>
     <mu-form-item prop="input" label="链接地址">
      <mu-text-field v-model="form.href"></mu-text-field>
    </mu-form-item>
    <mu-form-item prop="checkbox" label="Checkbox">
      <mu-checkbox v-model="form.checkbox" value="eat" label="Eat"></mu-checkbox>
      <mu-checkbox v-model="form.checkbox" value="sleep" label="Sleep"></mu-checkbox>
      <mu-checkbox v-model="form.checkbox" value="run" label="Run"></mu-checkbox>
      <mu-checkbox v-model="form.checkbox" value="movie" label="Movie"></mu-checkbox>
    </mu-form-item>
    <mu-form-item prop="switch" label="Switch">
      <mu-switch v-model="form.switch"></mu-switch>
    </mu-form-item>
    <mu-form-item prop="slider" label="Slider">
      <mu-slider v-model="form.slider"></mu-slider>
    </mu-form-item>

  </mu-form>
        </div>
    </div>
</template>
<script>
export default {
  data () {
    return {
      options: [
        'Option 1', 'Option 2', 'Option 3', 'Option 4',
        'Option 5', 'Option 6', 'Option 7', 'Option 8',
        'Option 9', 'Option 10'
      ],
      labelPosition: 'top',
      form: {
          web:'',
          time:'',
          title:'',
          href:'',
        input: '',
        select: '',
        date: '',
        radio: '',
        checkbox: [],
        switch: false,
        slider: 30,
        textarea: ''
      }
    }
  }
};
</script>
<style scoped>
.rule-title {
  position: relative;
  font-family: "Marck Script", cursive;
  letter-spacing: 1px;
  font-size: 24px;
  color: rgb(121, 121, 121);
  text-align: center;
  margin-top: 20px;
  margin-bottom: 10px;
}
.mu-form{
    width: 80%;
    margin: 0 auto;
}
</style>