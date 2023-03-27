import { createSlice } from "@reduxjs/toolkit";
import { Navigate, redirect } from "react-router";

const planSlice = createSlice({
    name: 'plan',
    initialState: {
        plan: {
            arcade: true,
            advanced: false,
            pro: false
        },
        planTotal: 0,
        addOns: {
            addon1: false,
            addon2: false,
            addon3: false
        },
        addOnTotal: null,
        info: {
            name: '',
            email: '',
            number: ''
        },
        emailInvalid: false,
        validInfo: {
            name: null,
            email: null,
            number: null
        },
        formValid: false,
        monthly: true,
        total: 0,
    },
    reducers: {
        submitHandler(state) {
            let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

            for(let i in state.info){
                if(state.info[i] === ''){
                    state.validInfo[i] = false
                }else {
                    state.validInfo[i] = true
                  }
              }

              if(!state.info.email.match(mailformat)){
                state.validInfo.email = false
                state.emailInvalid = true
              }else {
                state.validInfo.email = true
              }

              for(let i in state.validInfo){
                state.formValid = state.validInfo[i] && !state.formValid
              }
        },
        changeHandler(state, action){
            state.info[action.payload.name] = action.payload.value

            if(state.info[action.payload.name].length > 0){
                state.validInfo[action.payload.name] = null
            }
        },
        choosePlan(state, action){
            switch(action.payload){
                case 'arcade':
                    state.plan.arcade = true
                    state.plan.advanced = false
                    state.plan.pro = false
                    break

                case 'advanced':
                    state.plan.advanced = true
                    state.plan.arcade = false
                    state.plan.pro = false
                    break

                case 'pro':
                    state.plan.pro = true
                    state.plan.advanced = false
                    state.plan.arcade = false
                    break
            }
        },
        billingType(state){
            state.monthly = !state.monthly
        },
        checkUpdate(state, action) {
            state.addOns[action.payload] = !state.addOns[action.payload]
        },
        addOnSubmit(state) {
            state.total = state.planTotal + state.addOnTotal
        },
        calcTotal(state) {
            if(state.addOns.addon1){
                state.addOnTotal += state.monthly ? 1 : 10
            }

            if(state.addOns.addon2){
                state.addOnTotal += state.monthly ? 2 : 20
            }

            if(state.addOns.addon3){
                state.addOnTotal += state.monthly ? 2 : 20
            }

            if(state.plan.arcade){
                state.planTotal = state.monthly ? 9 : 90
            }

            if(state.plan.advanced){
                state.planTotal = state.monthly ? 12 : 120
            }

            if(state.plan.pro){
                state.planTotal = state.monthly ? 15 : 150
            }

            state.total = state.planTotal + state.addOnTotal
        },
        reset(state) {
            state.addOnTotal = 0
        }
    }
})

export const planActions = planSlice.actions

export default planSlice