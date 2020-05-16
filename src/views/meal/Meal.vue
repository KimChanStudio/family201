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
            <el-option label="节假日庆祝全席" value="holiday"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="generateMeal">麻辣鸡丝砰！</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="meal-block">
      <el-tag
        v-for="meal in mealSelection"
        :key="meal.name"
        closable
        @close="handleClose(meal)"
      >{{meal.name}}</el-tag>
      <el-table
        ref="multipleTable"
        :data="meal"
        stripe
        height="500"
        :default-sort="{prop: 'name', order: 'descending'}"
        tooltip-effect="dark"
        style="width: 100%"
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" width="55"></el-table-column>
        <el-table-column prop="name" sortable label="菜名" width="120"></el-table-column>
        <el-table-column prop="category" sortable label="种类" width="90"></el-table-column>
        <el-table-column prop="flavor" sortable label="口味" width="90"></el-table-column>
        <el-table-column prop="difficulty" sortable label="难度" width="90"></el-table-column>
        <el-table-column prop="cost" sortable label="花费" width="90"></el-table-column>
      </el-table>
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
      },
      value: [],
      mealSelection: []
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
    },
    handleSelectionChange(val) {
      this.mealSelection = val;
    },
    handleClose(tag) {
      this.mealSelection.splice(this.mealSelection.indexOf(tag), 1);
      this.$refs.multipleTable.toggleRowSelection(tag)
    }
  },
  created() {
    this.$store.dispatch("getMeal");
  },
  computed: {
    meal() {
      let meal = [];
      let get_meal = this.$store.getters.getMeal;
      // console.log(get_meal[0].name);
      /**
       * category:
       *          1 --- 素
       *          2 --- 小荤
       *          3 --- 大荤
       *          4 --- 凉菜
       *
       * flavor:
       *          1 --- 清淡
       *          2 --- 微辣
       *          3 --- 中辣
       *          4 --- 重辣
       *          5 --- 咸味
       *          6 --- 甜味
       *
       * difficulty:
       *          1 --- 容易
       *          2 --- 中等
       *          3 --- 复杂
       *          4 --- 极其复杂
       *
       * cost:
       *          1 --- 廉价
       *          2 --- 普通
       *          3 --- 有点贵
       *          4 --- 很贵
       */
      for (let i = 0; i < get_meal.length; i++) {
        switch (get_meal[i].category) {
          case "1":
            get_meal[i].category = "素菜";
            break;
          case "2":
            get_meal[i].category = "小荤";
            break;
          case "3":
            get_meal[i].category = "大荤";
            break;
          case "4":
            get_meal[i].category = "凉菜";
            break;
        }
        switch (get_meal[i].flavor) {
          case "1":
            get_meal[i].flavor = "清淡";
            break;
          case "2":
            get_meal[i].flavor = "微辣";
            break;
          case "3":
            get_meal[i].flavor = "中辣";
            break;
          case "4":
            get_meal[i].flavor = "重辣";
            break;
          case "5":
            get_meal[i].flavor = "咸味";
            break;
          case "6":
            get_meal[i].flavor = "甜味";
            break;
        }
        switch (get_meal[i].difficulty) {
          case "1":
            get_meal[i].difficulty = "容易";
            break;
          case "2":
            get_meal[i].difficulty = "中等";
            break;
          case "3":
            get_meal[i].difficulty = "复杂";
            break;
          case "4":
            get_meal[i].difficulty = "极其复杂";
            break;
        }
        switch (get_meal[i].cost) {
          case "1":
            get_meal[i].cost = "廉价";
            break;
          case "2":
            get_meal[i].cost = "普通";
            break;
          case "3":
            get_meal[i].cost = "有点贵";
            break;
          case "4":
            get_meal[i].cost = "很贵";
            break;
        }
      }
      return get_meal;
    }
  }
};
</script>

<style scoped>
.meal-block {
  padding: 24px;
}

.meal-block .el-tag + .el-tag {
  margin-left: 10px;
}
</style>