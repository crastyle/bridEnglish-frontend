<template>
    <div class="indexPage">
        <header>
            <el-menu theme="dark" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
                <el-menu-item index="1">处理中心</el-menu-item>
                <el-submenu index="2">
                    <template slot="title">我的工作台</template>
                    <el-menu-item index="2-1">选项1</el-menu-item>
                    <el-menu-item index="2-2">选项2</el-menu-item>
                    <el-menu-item index="2-3">选项3</el-menu-item>
                </el-submenu>
                <el-menu-item index="3"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
                <el-menu-item index="3" style="float: right"><a href="https://www.ele.me" target="_blank">退出</a></el-menu-item>
            </el-menu>
        </header>
        <div class="menus">
            <el-row :gutter="8">
                <el-col :span="3">
                    <el-button type="primary" size="large"  icon="plus">新建链接任务</el-button>
                </el-col>
                <el-col :span="3">
                    <el-button type="primary" size="large"  icon="plus">新建BT任务</el-button>
                </el-col>
                <el-col :span="3">
                    <el-button type="primary" size="large" icon="upload">上传视频</el-button>
                </el-col>
            </el-row>
        </div>
        <div class="lists">
            <table cellpadding="0" class="tb" cellspacing="0" border="0" width="1200">
                <tr>
                    <td width="300">资源名称</td>
                    <td width="150">文件大小</td>
                    <td width="150">下载进度</td>
                    <td width="150">切片进度</td>
                    <td width="150">添加时间</td>
                    <td width="150">完成时间</td>
                    <td>操作</td>
                </tr>
                <tr>
                    <td width="300">越狱第五季第一急</td>
                    <td width="150">306.8M</td>
                    <td width="150">100%</td>
                    <td width="150">100%</td>
                    <td width="150">2017-05-23 16:20:15</td>
                    <td width="150">2017-05-23 16:20:15</td>
                    <td>
                        <el-button type="text">复制链接</el-button>
                    </td>
                </tr>
            </table>
        </div>
    </div>
</template>

<style scoped lang="scss">
    @import './index.scss';
</style>

<script src="./index">
    
</script>