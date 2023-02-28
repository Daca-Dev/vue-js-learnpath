<template>
  <Layout>
    <template #header>
      <Header></Header>
    </template>
    <template #resume>
      <Resume :total-amount="999999" :amount="amount" :label="resumeLabel">
        <template #graphic> Graphic </template>
        <template #action> Action </template>
      </Resume>
    </template>
    <template #movements>
      <Movements :movements="movements" />
    </template>
  </Layout>
</template>

<script>
import Layout from '@/components/LayoutPage.vue';
import Header from '@/components/HeaderPage.vue';
import Resume from '@/components/ResumenComponent.vue';
import Movements from '@/components/Movements/GeneralMovements.vue';

export default {
  components: {
    Layout,
    Header,
    Resume,
    Movements,
  },
  data() {
    return {
      amount: 100,
      resumeLabel: '',
      movements: [
        { id: 1, title: 'test 01', description: 'lorem ipsum', amount: 1000 },
        { id: 2, title: 'test 02', description: 'lorem ipsum', amount: -2000 },
        { id: 3, title: 'test 03', description: 'lorem ipsum', amount: 3000 },
        { id: 4, title: 'test 04', description: 'lorem ipsum', amount: -4000 },
        { id: 5, title: 'test 05', description: 'lorem ipsum', amount: 5000 },
        { id: 6, title: 'test 06', description: 'lorem ipsum', amount: -6000 },
        { id: 7, title: 'test 07', description: 'lorem ipsum', amount: 7000 },
        { id: 8, title: 'test 08', description: 'lorem ipsum', amount: 8000 },
      ],
    };
  },
};
</script>
