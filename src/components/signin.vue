<template>
  <div>

  <el-row type="flex" justify="center">
    <el-col :span="6" >
      <div class="grid-content">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
          <el-form-item label="用户名" prop="name">
            <el-input type="text" v-model="ruleForm.name" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="pass">
            <el-input type="password" v-model="ruleForm.pass" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="确认密码" prop="checkPass">
            <el-input type="password" v-model="ruleForm.checkPass" auto-complete="off"></el-input>
          </el-form-item>
            <el-button @click="signup('ruleForm')">注册</el-button>
            <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>

        </el-form>
      </div>
    </el-col>
  </el-row>


  </div>
</template>

<script>
export default {
  data () {
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass')
        }
        callback()
      }
    }
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.ruleForm.pass) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      ruleForm: {
        name: '',
        pass: '',
        checkPass: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        pass: [
          { validator: validatePass, trigger: 'blur' }
        ],
        checkPass: [
          { validator: validatePass2, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      let _this = this
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$http.get('/api/admin/getUser/' + this.ruleForm.name).then(
          response => {
            if (_this.ruleForm.pass !== response.data.pass) {
              _this.$message.error('用户名或密码不正确')
            } else {
              let obj = {
                name: _this.ruleForm.name,
                pass: _this.ruleForm.pass
              }
              _this.$http.post('/api/admin/signin', {
                userInfo: obj
              }).then(
                response => {
                  _this.$message({
                    message: '登录成功',
                    type: 'success'
                  })
                  delete _this.ruleForm.pass
                  _this.$router.push('home')
                }).catch(
                response => console.log('登录失败' + response)
              )
            }
          }).catch(
            response => {
              _this.$message.error('该用户不存在')
              return
            }
          )
        } else {
          alert('error submit!!')
          return false
        }
      })
    },
    signup (formName) {
      let _this = this
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$http.get('/api/admin/getUser/' + _this.ruleForm.name).then(
          response => {
            if (response.data.name === _this.ruleForm.name) {
              _this.$message.error('该用户已存在')
              _this.name = ''
              // 由于异步，name的改变比正常流执行得慢，所以不能通过判断name去执行是否post
              // 所以我把post移入else中，而不是在外面通过判断name执行
            } else {
              console.log(response)
              let obj = {
                name: _this.ruleForm.name,
                pass: _this.ruleForm.pass
              }

              _this.$http.post('/api/admin/signup', {
                userInfo: obj
              }).then(
                response => {
                  _this.$message({
                    message: '注册成功',
                    type: 'success'
                  })
                }).catch(
                response => console.log('注册失败')
              )
            }
          }).catch(
          response => console.log(response)
        )
        } else {
          this.$message({
            message: '请按正确格式填写所有内容',
            type: 'warning'
          })
          return false
        }
      })
    }
  }
}
</script>

<style lang="css" scoped>
  .demo-ruleForm{
    margin-top: 20px;
    margin-left: -50px;
  }
  .grid-content{
    text-align: center;
  }
</style>
