import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Directive from '@/components/directive/Index'
import LifeHooks from '@/components/component_demo/LifeHooks'
import ComputedDemo from '@/components/component_demo/ComputedDemo'
import Parent from '@/components/component_demo/Parent'
import StoreDemo from '@/components/StoreDemo'
import Countries from '@/components/route/Countries'
import Country from '@/components/route/Country'
import States from '@/components/ajax/States'
import State from '@/components/ajax/State'
import DirectiveClick from '@/components/directive/Click'
import DirectiveSubmit from '@/components/directive/Submit'
import DirectiveDisabled from '@/components/directive/Disabled'
import DirectiveIf from '@/components/directive/If'
import DirectiveFor from '@/components/directive/For'
import DirectiveOnce from '@/components/directive/Once'
import DirectiveHtml from '@/components/directive/Html'
import DirectiveModel from '@/components/directive/Model'
import DirectiveIs from '@/components/directive/Is'
import NotFound from '@/components/route/NotFound'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld
        }, {
            path: '/directives',
            name: 'directives',
            component: Directive
        }, {
            path: '/life_hooks',
            name: 'life_hooks',
            component: LifeHooks
        }, {
            path: '/computed',
            name: 'Computed',
            component: ComputedDemo
        }, {
            path: '/store',
            name: 'Store',
            component: StoreDemo
        }, {
            path: '/props',
            name: 'props',
            component: Parent
        }, {
            path: '/country',
            name: 'countries',
            component: Countries
        }, {
            path: '/country/:id',
            name: 'country',
            component: Country
        }, {
            path: '/state/:id',
            name: 'state',
            component: State
        }, {
            path: '/state',
            name: 'listStates',
            component: States,
        }, {
            path: '/directives/click',
            name: 'click',
            component: DirectiveClick,
        }, {
            path: '/directives/submit',
            name: 'submit',
            component: DirectiveSubmit,
        }, {
            path: '/directives/disabled',
            name: 'disabled',
            component: DirectiveDisabled,
        }, {
            path: '/directives/if',
            name: 'if',
            component: DirectiveIf,
        }, {
            path: '/directives/for',
            name: 'for',
            component: DirectiveFor,
        }, {
            path: '/directives/once',
            name: 'once',
            component: DirectiveOnce,
        }, {
            path: '/directives/html',
            name: 'html',
            component: DirectiveHtml,
        }, {
            path: '/directives/model',
            name: 'model',
            component: DirectiveModel,
        }, {
            path: '/directives/is',
            name: 'is',
            component: DirectiveIs,
        } , {
            path: '*',
            component: NotFound
        }
    ]
})