<script setup>
  import { getCategoryFilterAPI, getSubCategoryAPI } from '@/apis/category.js'
  import { useRoute } from 'vue-router'
  import { ref, onMounted } from 'vue'
  import goodsItem from '@/views/Home/components/goodsItem.vue'

  const CategoryFilter = ref([])

  const route = useRoute()
  const getCategoryFilter = async () => {
    const res = await getCategoryFilterAPI(route.params.id)
    CategoryFilter.value = res.result
  }

  onMounted(() => {
    getCategoryFilter()
  })

  // 获取goods列表
  const goodsList = ref([])
  const data = ref({
    categoryId: route.params.id,
    page: 1,
    pageSize: 20,
    sortField: 'publishTime'
  })
  const getSubCategory = async () => {
    const res = await getSubCategoryAPI(data.value)
    goodsList.value = res.result.items
  }
  onMounted(() => getSubCategory())

  // 重新排列
  const tabChange = () => {
    console.log(data.value.sortField)
    data.value.page = 1
    getSubCategory()
  }
  // 下拉加载
  const disabled = ref(false)
  const load = async () => {
    data.value.page++
    const res = await getSubCategoryAPI(data.value)
    goodsList.value = [...goodsList.value, ...res.result.items]
    if (res.result.items.length == 0) {
      disabled.value = true
    }
  }
</script>

<template>
  <div class="container">
    <!-- 面包屑 -->
    <div class="bread-container">
      <el-breadcrumb separator=">">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="`/category/${CategoryFilter.parentId}`">{{ CategoryFilter.parentName }} </el-breadcrumb-item>
        <el-breadcrumb-item>{{ CategoryFilter.name }}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="sub-container">
      <el-tabs v-model="data.sortField" @tab-change="tabChange">
        <el-tab-pane label="最新商品" name="publishTime"></el-tab-pane>
        <el-tab-pane label="最高人气" name="orderNum"></el-tab-pane>
        <el-tab-pane label="评论最多" name="evaluateNum"></el-tab-pane>
      </el-tabs>
      <div class="body" v-infinite-scroll="load" :infinite-scroll-disabled="disabled">
        <!-- 商品列表-->
        <goodsItem v-for="goods in goodsList" :key="goods.id" :goods="goods"></goodsItem>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .bread-container {
    padding: 25px 0;
    color: #666;
  }

  .sub-container {
    padding: 20px 10px;
    background-color: #fff;

    .body {
      display: flex;
      flex-wrap: wrap;
      padding: 0 10px;
    }

    .goods-item {
      display: block;
      width: 220px;
      margin-right: 20px;
      padding: 20px 30px;
      text-align: center;

      img {
        width: 160px;
        height: 160px;
      }

      p {
        padding-top: 10px;
      }

      .name {
        font-size: 16px;
      }

      .desc {
        color: #999;
        height: 29px;
      }

      .price {
        color: $priceColor;
        font-size: 20px;
      }
    }

    .pagination-container {
      margin-top: 20px;
      display: flex;
      justify-content: center;
    }
  }
</style>
