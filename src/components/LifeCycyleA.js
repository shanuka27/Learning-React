import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB'

class LifeCycyleA extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         name:'shanu'
      }
      console.log('LifeCycleA con')
    }

    static getDerivedStateFormProps(props, state){
        console.log('LifeCycleA GetDer...')
        return null
    }

    componentDidMount(){
        console.log('compoA...Did')
    }

  render() {
    console.log('renderA')
    return (
      <div>
        Life Cycyle A
        <LifeCycleB />
      </div>
    )
  }
}

export default LifeCycyleA