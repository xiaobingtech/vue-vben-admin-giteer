<script lang="ts" setup>
import type { AnalysisOverviewItem } from '@vben/common-ui';

import { AnalysisOverview } from '@vben/common-ui';
import { SvgCardIcon } from '@vben/icons';

const overviewItems: AnalysisOverviewItem[] = [
  {
    icon: SvgCardIcon,
    title: '用户量',
    totalTitle: '总用户量',
    totalValue: 120_000,
    value: 2000,
  },
];

// const chartTabs: TabOption[] = [
//   {
//     label: '流量趋势',
//     value: 'trends',
//   },
//   {
//     label: '月访问量',
//     value: 'visits',
//   },
// ];
</script>

<template>
  <div class="p-5">
    <AnalysisOverview :items="overviewItems" />
    <!-- <AnalysisChartsTabs :tabs="chartTabs" class="mt-5">
      <template #trends>
        <AnalyticsTrends />
      </template>
      <template #visits>
        <AnalyticsVisits />
      </template>
    </AnalysisChartsTabs>

    <div class="mt-5 w-full md:flex">
      <AnalysisChartCard class="mt-5 md:mr-4 md:mt-0 md:w-1/3" title="访问数量">
        <AnalyticsVisitsData />
      </AnalysisChartCard>
      <AnalysisChartCard class="mt-5 md:mr-4 md:mt-0 md:w-1/3" title="访问来源">
        <AnalyticsVisitsSource />
      </AnalysisChartCard>
      <AnalysisChartCard class="mt-5 md:mt-0 md:w-1/3" title="访问来源">
        <AnalyticsVisitsSales />
      </AnalysisChartCard>
    </div> -->
  </div>
</template>
