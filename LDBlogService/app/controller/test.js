'use strict';

const BaseController = require("./BaseController")
class TestController extends BaseController {
    async add() {
        const {
            ctx,
            logger,
            config
        } = this;
        const {
            username,
            password
        } = ctx.request.body
        ctx.body = this.success({
            username,
            password
        })
    }
    async index() {
        this.ctx.body = 123
    }
    async getList() {
        const {
            ctx,
            logger,
            config
        } = this;
        const {
            pageSize,
            pageIndex
        } = ctx.request.body
        const data = [1, 2, 3, 4]
        this.ctx.body = {
            list: data,
            pageIndex,
            pageSize
        }
    }
    async getMenu() {
        const {
            ctx,
            logger,
            config
        } = this;
        const {
            pageSize,
            pageIndex
        } = ctx.request.body
        const data = [
            {
                path: '/',
                redirect: '/user/login',
            },
            {
                path: '/user',
                layout: false,
                routes: [{
                        name: 'login',
                        path: '/user/login',
                        component: './Intercept',
                        hideInMenu: true,
                        menuRender: false,
                    },
                    {
                        component: './404',
                    },
                ],
            },
            {
                path: '/welcome',
                name: 'welcome',
                icon: 'smile',
                component: './Welcome',
            },
            {
                path: '/admin',
                name: 'admin',
                icon: 'crown',
                access: 'canAdmin',
                routes: [{
                        path: '/admin/sub-page',
                        name: 'sub-page',
                        icon: 'smile',
                        component: './Welcome',
                    },
                    {
                        component: './404',
                    },
                ],
            },
            {
                name: 'list.table-list',
                icon: 'table',
                path: '/list',
                component: './TableList',
            },
            {
                name: '书籍',
                path: '/book',
                component: './Book',
            },
            {
                path: '/study',
                name: '学习',
                routes: [{
                        name: '语文',
                        path: '/study/chinese',
                        component: './Study/Chinese',
                    },
                    {
                        name: '数学',
                        path: '/study/math',
                        component: './Study/Math',
                    },
                ],
            },
            {
                component: './404',
            },
        ]
        this.ctx.body = {
            list: data,
            pageIndex,
            pageSize
        }
    }
}

module.exports = TestController;