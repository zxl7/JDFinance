<template lang="html">
  <div class= "heador">
    <div class="header">
        <span class="left">
            <span>注册</span>&nbsp;|&nbsp;<span>登录</span>
        </span>
        <div class="btnDownload">APP下载</div>
    </div>
  </div>
</template>

<script>
</script>

<style scoped>
.heador {
  z-index: 100px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
}

.header {
  display: inline-block;
  color: #666;
  height: 5rem;
  line-height: 5rem;
  top: 0;
  left: 0;
  right: 0;
  background: #fff url(//m.jr.jd.com/spe/qyy/main/images/jr-logo.png) center
    center no-repeat;
  background-size: auto 50%;
  position: absolute;
}
.left {
  font-size: 1rem;
  height: 2rem;
  color: #000;
  line-height: 2rem;
  margin: 1rem;
}
.btnDownload {
  float: right;
  font-size: 1rem;
  padding: 0px 5px;
  margin: 1.3rem 0.8rem 0 0;
  height: 2.5rem;
  width: 4rem;
  line-height: 2.5rem;
  min-width: 1rem;
  border-radius: 4px;
  background: #f40;
  text-align: center;
  color: #fff;
}
</style>
