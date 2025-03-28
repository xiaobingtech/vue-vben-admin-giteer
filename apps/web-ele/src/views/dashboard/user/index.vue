<script lang="ts" setup>
import { onMounted, ref } from 'vue';

import {
  ElCard,
  ElImage,
  ElOption,
  ElPagination,
  ElSelect,
  ElTable,
  ElTableColumn,
} from 'element-plus';

import { getAllUsersApi } from '#/api/core/user';

const users = ref([]);
const total = ref(0);
const loading = ref(false);
const currentPage = ref(1);
const pageSize = ref(20);
const pageSizeOptions = [10, 20, 50, 100];

const fetchUsers = async () => {
  loading.value = true;
  getAllUsersApi({
    page: currentPage.value,
    pageSize: pageSize.value,
  }).then((res) => {
    loading.value = false;
    users.value = res.list;
    total.value = res.total;
  });
};

const handlePageChange = (page) => {
  currentPage.value = page;
  fetchUsers();
};

const handleSizeChange = (size) => {
  pageSize.value = size;
  fetchUsers();
};

// Device type mapping
const getDeviceIcon = (type) => {
  if (type === 1) return 'i-mdi-apple';
  if (type === 2) return 'i-mdi-android';
  if (type === 3) return 'i-mdi-paw'; // Harmony OS
  return '';
};

onMounted(() => {
  fetchUsers();
});
</script>

<template>
  <div class="p-5">
    <ElCard>
      <template #header>
        <div class="card-header">
          <span class="font-bold">{{ $t('page.user.title') }}</span>
          <div class="flex items-center">
            <span class="mr-2">{{ $t('page.user.pageSize') }}</span>
            <ElSelect v-model="pageSize" @change="handleSizeChange">
              <ElOption
                v-for="option in pageSizeOptions"
                :key="option"
                :label="option"
                :value="option"
              />
            </ElSelect>
          </div>
        </div>
      </template>

      <ElTable
        :data="users"
        stripe
        border
        style="width: 100%"
        v-loading="loading"
      >
        <ElTableColumn label="ID" prop="id" width="80" />
        <ElTableColumn label="UID" prop="uid" width="100" />
        <ElTableColumn :label="$t('page.user.name')" prop="name" width="200" />
        <ElTableColumn :label="$t('page.user.avatar')" width="80">
          <template #default="scope">
            <ElImage
              v-if="scope.row.avatar"
              :src="scope.row.avatar"
              style="width: 40px; height: 40px"
              fit="cover"
              :preview-src-list="[scope.row.avatar]"
              class="rounded-full"
            />
          </template>
        </ElTableColumn>
        <ElTableColumn
          :label="$t('page.user.login')"
          prop="login"
          width="200"
        />
        <ElTableColumn :label="$t('page.user.lat')" prop="lat" />
        <ElTableColumn :label="$t('page.user.lng')" prop="lng" />

        <ElTableColumn :label="$t('page.user.device')" width="80">
          <template #default="scope">
            <div class="flex justify-center">
              <i
                v-if="scope.row.device"
                :class="getDeviceIcon(scope.row.device)"
                class="text-xl"
              ></i>
            </div>
          </template>
        </ElTableColumn>
      </ElTable>

      <div class="mt-4 flex justify-end">
        <ElPagination
          :current-page="currentPage"
          :page-size="pageSize"
          :total="total"
          layout="prev, pager, next, jumper"
          @current-change="handlePageChange"
        />
      </div>
    </ElCard>
  </div>
</template>

<style scoped>
.card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
