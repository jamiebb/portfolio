import { combineReducers } from 'redux'
import { projects } from './projects'
import { skills } from './skills'

export const AppStore = combineReducers({ projects, skills });