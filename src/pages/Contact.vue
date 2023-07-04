<template>
  <div class='contact'>
    <h1>Drop us a line!</h1>
    <el-form 
      ref="formRef"
      class='form'
      :model="form"
      label-width="80px"
      :rules="rules"
    >
      <el-form-item label="Name" prop="name">
        <el-input 
          class='singleInput'
          type='text'
          placeholder='Name'
          v-model="form.name"
        />
      </el-form-item>
      <el-form-item label="Mobile" prop="mobile">
        <el-input 
          class='singleInput'
          type='text'
          placeholder='Mobile'
          v-model="form.mobile"
        />
      </el-form-item>
      <el-form-item label="Email" prop="email">
        <el-input 
          class='singleInput'
          type='email'
          placeholder='Email'
          v-model="form.email"
        />
      </el-form-item>
      <el-form-item label="Address" prop="address">
        <el-input 
          class='singleInput'
          type='text'
          placeholder='Address'
          v-model="form.address"
        />
      </el-form-item>
      <el-form-item label="Message" prop="message">
        <el-input 
          class='richInput'
          type='textarea'
          :rows="4"
          placeholder='Message'
          v-model="form.message"
        />
      </el-form-item>
      <el-form-item>
        <el-button 
          class='submitButton'
          type="primary"
          @click="onHandleClick(formRef)"
        >
          Send a Message
        </el-button>
      </el-form-item>
    </el-form>
  </div> 
</template>

<script setup>
import { ref } from 'vue'
import { ElMessage } from 'element-plus'

const rules = {
  name: [
    { required: true, message: 'Please tell us how to call you', trigger: 'blur' },
  ],
  email: [
    { required: true, message: 'Please input email address', trigger: 'blur' },
  ],
  message: [
    { required: true, message: 'Please tell us what you want to say', trigger: 'blur' },
  ],
}
const formRef = ref()
const form = ref({
  name: '',
  mobile: '',
  email: '',
  address: '',
  message: ''
})

const onHandleClick = async (formEl) => {
  if (!formEl) return 
  await formEl.validate((valid) => {
    if (valid) {
      ElMessage({
        type: 'success',
        message: 'Message sent successfully!'
      })
    } else return
  })
}
</script>
<style lang="less" scoped>
.form {
  min-width: 500px;
}
</style>