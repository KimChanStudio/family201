<template>
  <div id="meal">
    <nav-bar class="home-nav">
      <div slot="center">Family201 - 点餐系统</div>
    </nav-bar>
    <div class="meal-block">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="用餐人数">
          <el-select v-model="form.person" placeholder="请选择人数">
            <el-option label="一人" value="1"></el-option>
            <el-option label="两人" value="2"></el-option>
            <el-option label="三人" value="3"></el-option>
            <el-option label="四人" value="4"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="用餐类型">
          <el-select v-model="form.type" placeholder="请选择类型">
            <el-option label="工作日省时套餐" value="workday"></el-option>
            <el-option label="周末齐家大餐" value="weekend"></el-option>
            <el-option label="节假日庆祝全系" value="holiday"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">立即创建</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
import Scroll from "@/components/common/scroll/Scroll";

export default {
  data() {
    return {
      form: {
        person: "",
        type: ""
      }
    };
  },
  components: {
      NavBar
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    }
  }
};
</script>

<style scoped>
.meal-block {
  padding: 24px;
}
</style>