<template>
  <Layout>
    <template #header>
      <Header></Header>
    </template>
    <template #resume>
      <Resume :total-amount="totalAmount" :amount="amount" :label="resumeLabel">
        <template #graphic> Graphic </template>
        <template #action>
          <ActionMovement @submit-movement="submitMovement" />
        </template>
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
import ActionMovement from '@/components/Action/ActionMovement.vue';

export default {
  components: {
    Layout,
    Header,
    Resume,
    Movements,
    ActionMovement,
  },
  data() {
    return {
      amount: 100,
      resumeLabel: '',
      movements: [
        { id: 1, title: 'test 01', description: 'lorem ipsum', amount: 1000 },
      ],
    };
  },
  methods: {
    submitMovement(data) {
      const lastId = this.movements[0]?.id + 1 ?? 1;
      const newMovement = {
        id: lastId,
        title: data.title,
        description: data.description,
        amount: data.movementType === 'income' ? data.amount : -1 * data.amount,
      };

      this.movements.push(newMovement);
    },
  },
  computed: {
    totalAmount() {
      return this.movements.reduce((acc, { amount }) => acc + amount, 0);
    },
  },
};
</script>
