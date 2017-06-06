<template>
<div class="manage">
  <button @click="add" id="btn1">{{mes}}</button>
  <div class="input-area" v-show="showAdd">
    <input type="text" placeholder="请输入人员姓名" v-model="namespace">
    <button id="btn2" @click="addName">确定</button>
  </div>
  <table>
    <tr>
    <th>姓名</th>
    <th>操作</th>
    </tr>
    <tr v-for="(item,index) in peoples">
      <td>
        {{item.name}}
      </td>
      <td :id="index"><span @click="edit">编辑</span><span @click="del">删除</span></td>
    </tr>
  </table>
  <div class="wrap" v-show="showEdit">
    <div class="content">
      <input type="text" placeholder="请输入新姓名" v-model="newName">
      <button @click="cancel" class="btn3">取消</button>
      <button @click="editName" class="btn3">确定</button>
    </div>
  </div>
</div>
</template>


<style scoped>
  .manage{
    width: 100%;
  }
table{
  width: 100%;
  margin: 0  auto;
  margin-top: 40px;
}
  th,td{width:100px;}
  #btn1{
    width: 20%;
    height: 40px;
    border: 0px;
    border-radius: 5px;
    font-size: 20px;
    color: aliceblue;
  }
  .input-area{
    margin-top: 20px;
  }
  .input-area input{
    width: 40%;
    height: 40px;
  }
  #btn2{
    width: 6%;
    height: 40px;
    border: 0px;
    border-radius: 5px;
    color: aliceblue;
  }
  span{
    padding-left: 40px;
    cursor: pointer;
  }
  button{
    cursor: pointer;
  }
  .wrap{
    display: table;
    position: fixed;
    background-color: rgba(0,0,0,.8);
    opacity: 0.8;
    z-index:10;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }
   .content{
     display: table-cell;
     vertical-align: middle;
   }
  .btn3{
    border: 0;
    width: 8%;
    height: 46px;
    color: aliceblue;
    border-radius: 5px;
  }
  .content input{
    width: 40%;
    height: 40px;
    font-size: 18px;
  }
</style>

<script>
  export default{
      data(){
          return{
              showAdd:false,
              showEdit:false,
              peoples:[{'name':'Peter'},{'name':'Rose'}],
              namespace:'',
              newName:'',
              editId:'',
              mes:'新增'
          }
      },
    methods:{
        add(){
            var that=this;
            that.showAdd=!that.showAdd;
            if(that.mes=='新增'){
              that.mes='隐藏'
          }
          else {
                this.mes='新增'
            }
        },
      addName(){
            var v=this.namespace;
            if(v.trim()==""){
                alert("请输入姓名，不要搞事情")
            }
            else {
                var data={};
                data.name=v;
                this.peoples.push(data);
                this.namespace=''
            }
      },del(e){
          var id=e.target.offsetParent.id;
          this.peoples.splice(id,1)
      },edit(e){
          var id =e.target.offsetParent.id;
          this.showEdit=true;
          this.editId=id;
          this.newName=this.peoples[id].name;
      },cancel(){
          this.showEdit=false
      },
      editName(){
          var v= this.newName;
          if(v.trim()==""){
              alert("请输入新姓名，不要搞事情")
          }else{
              this.peoples[this.editId].name=v;
              this.showEdit=false
          }
      }
      }
  }
</script>
