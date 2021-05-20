<template>
  <div class="app">laitisia la bg</div>
</template>

<script>
export default {
  name: "MetricComputed",

  computed: {
    totalFundsMetricComputed: {
      get: function() {
        return this.totalFundsMetric;
      },
      set: function(newV) {
        console.log(this.totalFundsMetric);
        if (this.totalFundsMetric == 0) {
          const interval = setInterval(() => {
            if (this.totalFundsMetric < newV) {
              this.totalFundsMetric += 1;
            } else {
              clearInterval(interval);
            }
          }, 0.5);
        } else {
          this.totalFundsMetric = newV;
        }
      },
    },
  },

  props: {},

  methods: {
    totalFundsMetricComputed: {
      get: function() {
        return this.totalFundsMetric;
      },
      set: function(newV) {
        console.log(this.totalFundsMetric);
        if (this.totalFundsMetric == 0) {
          const interval = setInterval(() => {
            if (this.totalFundsMetric < newV) {
              this.totalFundsMetric += 1;
            } else {
              clearInterval(interval);
            }
          }, 0.5);
        } else {
          this.totalFundsMetric = newV;
        }
      },
    },
  },
};
</script>

<style lang="scss"></style>
