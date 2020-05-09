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
          <el-button type="primary" @click="generateMeal">麻辣鸡丝砰！</el-button>
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
    generateMeal: function() {
      console.log("submit!");
      if (this.validateGenerateMeal()) {
        this.$store.dispatch("generateMeal", {
          person: this.form.person,
          type: this.form.type
        });
      } else {
        console.log("parameters invalid");
      }
    },
    validateGenerateMeal: function() {
      let validGenerateMealForm = true;
      let personRange = ["1", "2", "3", "4"];
      let typeRange = ["workday", "weekend", "holiday"];

      if (personRange.indexOf(this.form.person.toString()) != -1) {
        validGenerateMealForm = true;
      } else {
        validGenerateMealForm = false;
      }
      //   console.log(personRange.indexOf(this.form.person.toString()));
      //   console.log(validGenerateMealForm);
      if (typeRange.indexOf(this.form.type.toString()) != -1) {
        validGenerateMealForm = true;
        // console.log("valid type");
      } else {
        validGenerateMealForm = false;
      }
      //   console.log(this.form.type.toString());
      //   console.log(typeRange.indexOf(this.form.type.toString()));
      //   console.log(validGenerateMealForm);

      return validGenerateMealForm;
    }
  }
};
</script>

<style scoped>
.meal-block {
  padding: 24px;
}
</style>