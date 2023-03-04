<template>
  <Layout>
    <template #header>
      <Header></Header>
    </template>
    <template #resume>
      <Resume
        :total-amount="totalAmount"
        :amount="amount"
        :label="resumeLabel"
      >
        <template #graphic>
          <RemoveGraph :amounts="amounts" />
        </template>
        <template #action>
          <ActionMovement
            @submit-movement="submitMovement"
          />
        </template>
      </Resume>
    </template>
    <template #movements>
      <Movements :movements="movements" @remove-movement="removeMovement"/>
    </template>
  </Layout>
</template>

<script>
import Layout from '@/components/LayoutPage.vue';
import Header from '@/components/HeaderPage.vue';
import Resume from '@/components/Resume/ResumenComponent.vue';
import RemoveGraph from '@/components/Resume/ResumeGraph.vue';
import Movements from '@/components/Movements/GeneralMovements.vue';
import ActionMovement from '@/components/Action/ActionMovement.vue';

export default {
  components: {
    Layout,
    Header,
    Resume,
    Movements,
    ActionMovement,
    RemoveGraph,
  },
  data() {
    return {
      amount: 100,
      resumeLabel: '',
      movements: [
        {
          id: 1,
          title: 'test 06',
          description: 'lorem ipsum',
          amount: 6000,
          time: Date.now(),
        },
        {
          id: 2,
          title: 'test 05',
          description: 'lorem ipsum',
          amount: -5000,
          time: Date.now(),
        },
        {
          id: 3,
          title: 'test 04',
          description: 'lorem ipsum',
          amount: 4000,
          time: Date.now(),
        },
        {
          id: 4,
          title: 'test 03',
          description: 'lorem ipsum',
          amount: -3000,
          time: Date.now(),
        },
        {
          id: 5,
          title: 'test 02',
          description: 'lorem ipsum',
          amount: -2000,
          time: Date.now(),
        },
        {
          id: 6,
          title: 'test 01',
          description: 'lorem ipsum',
          amount: -1000,
          time: Date.now(),
        },
      ],
    };
  },
  methods: {
    submitMovement(data) {
      const lastId = this.movements[0]?.id + 1 ?? 1;
      const newMovement = {
        id: lastId,
        time: new Date(),
        title: data.title,
        description: data.description,
        amount:
          data.movementType === 'income'
            ? data.amount
            : -1 * data.amount,
      };

      this.movements.push(newMovement);
    },
    removeMovement(targetId) {
      this.movements = this.movements.filter(
        ({ id }) => id !== targetId
      );
    },
  },
  computed: {
    totalAmount() {
      return this.movements.reduce(
        (acc, { amount }) => acc + amount,
        0
      );
    },
    amounts() {
      return this.movements
        .filter(({ time }) => {
          const today = new Date();
          const oldDate = today.setDate(today.getDate() - 30);

          return time > oldDate;
        })
        .reduce((acc, { amount }) => {
          return acc.length
            ? [...acc, acc[acc.length - 1] + amount]
            : [amount];
        }, []);
    },
  },
};
</script>
