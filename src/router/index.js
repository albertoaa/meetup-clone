import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import CreateMeetup from '@/components/Meetup/CreateMeetup'
import Meetups from '@/components/Meetup/Meetups'
import Profile from '@/components/User/Profile'
import Signin from '@/components/User/Signin'
import Signup from '@/components/User/Signup'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/meetups',
      name: 'Meetups',
      component: Meetups
    },
    {
      path: '/meetup/new',
      name: 'CreateMeetups',
      component: CreateMeetup
    },
    {
      path: '/user/profile',
      name: 'UserProfile',
      component: Profile
    },
    {
      path: '/user/signin',
      name: 'UserSignin',
      component: Signin
    },
    {
      path: '/user/signup',
      name: 'UserSignup',
      component: Signup
    }
  ],
  mode: 'history'
})
